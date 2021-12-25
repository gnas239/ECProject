import './css/Login.css'
import userApi from './api/userApi'
import savingApi from './api/savingApi'
import customerApi from "./api/customerApi"
import {useState, useEffect, createContext} from 'react'
import App from './App'
export const AccountContext = createContext()
function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")
    const [userList, setUserList] = useState([])
    const [isLogin, setIsLogin] = useState(false)
    const [customers, setCustomers] = useState([])
    const [customer, setCustomer] = useState({})
    const [savingList, setSavingList] = useState([])
    const [saving, setSaving] = useState({})
    
    useEffect(()=>{
    const fetchUserList = async () => {
      try {
        const response = await userApi.getAll();
        setUserList(response);
        const response1 = await customerApi.getAll();
        setCustomers(response1);
        const response2 = await savingApi.getAll();
        setSavingList(response2);
      } catch (error) {
        console.error("fail to fetch user list", error);
      }
    }
    fetchUserList();
  },[customer.accountBalance])
    const handleLogin = () => {
        userList.forEach(element => {
            if(element.userName === user){
                if(element.password === password){
                    customers.forEach(cus =>{
                        if (cus.idaccount.idaccount === element.idaccount){
                            setCustomer(cus)
                        }
                    }) 
                    savingList.forEach(save=>{
                        if (save.idaccount.idaccount === element.idaccount){
                            setSaving(save)
                        }
                    })
                    setIsLogin(true)
                }
                else {
                    alert("Sai tài khoản hoặc mật khẩu")
                }
                
            }
        });
    }
    function changeInputValue(event) {
        setUser(event.target.value)
    }
    function changePassword(event) {
        setPassword(event.target.value)
    }
    if (isLogin)
    {return(
        <AccountContext.Provider value={customer}>
            <App saving={saving}/>
        </AccountContext.Provider>
    )}
    else
    return(
        <div className="login">
            <div className="login-wrap">
                <div className="login-info-wrap">
                    <h2 className="login-info-title">GuiTietKiem</h2>
                    <div className="login-info-text">Hãy tin tưởng chúng tôi vì chúng tôi luôn đặt lợi ích lên hàng đầu</div>
                    <button className="login-info-btn">Đọc thêm</button>
                </div>
                <div className="login-form-wrap">
                    <h2 className="login-form-title">Xin chào</h2>
                    <h3 className="login-form-text">Welcome back</h3>
                    <div className="login-input-wrap">
                        <input type="text" className="login-input-text" placeholder=" "
                        onChange={(event)=> changeInputValue(event)}></input>
                        <label className="login-input-label" >Số điện thoại</label>
                    </div>
                    <div className="login-input-wrap">
                        <input type="password" className="login-input-text" placeholder=" "
                        onChange={(event)=> changePassword(event)}></input>
                        <label className="login-input-label" >Mật khẩu</label>
                    </div>
                    <button className="login-form-btn"
                    onClick = {handleLogin}
                    >Đăng nhập</button>
                </div>
            </div>
        </div>
    )
}
export default Login;