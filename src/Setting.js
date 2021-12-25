import { useContext, useState, useEffect } from "react"

import {AccountContext} from "./Login"
import "./css/Setting.css";
import userApi from "./api/userApi";
function Setting(){
    const account = useContext(AccountContext)
    const [useName, setUseName] = useState()
    const [passwordCurrent, setPasswordCurrent] = useState()
    const [newPassword, setNewPassword] = useState()
    const [newPasswordAgain, setNewPasswordAgain] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [user, setUser] = useState()
    useEffect(()=>{
        const fetchUserList = async () => {
            try {
              const response = await userApi.findById(account.idaccount.idaccount);
              setUser(response)  
            } catch (error) {
              console.error("fail to fetch user list", error);
            }
          }
          fetchUserList();
    },[])
    const handleUseName =(event)=> {
        setUseName(event.target.value)
    }
    const handlePasswordCurrent =(event)=> {
        setPasswordCurrent(event.target.value)
    }
    const handleNewPassword =(event)=> {
        setNewPassword(event.target.value)
    }
    const handleNewPasswordAgain =(event)=> {
        setNewPasswordAgain(event.target.value)
    }
    const handlePhoneNumber =(event)=> {
        setPhoneNumber(event.target.value)
    }
    const handleBtn = () => {
        if (passwordCurrent === user.password) {
            if (newPassword === newPasswordAgain){
                alert('Đổi mật khẩu thành công')
                const json = JSON.stringify({
                    "userName": useName,
                    "password": newPassword,
                    "idaccount": Number(user.idaccount),
                    "idrole": Number(user.idrole.idrole)
                  })
                userApi.update(json)
            }else alert('Mật khẩu mới không khớp')
        }else alert("Mật khẩu hiện tại không đúng")
        
        //   alert("Thay đổi thông tin tài khoản thành công")
    }
    return(
    <div className="setting-wrap">
        
        <h2 className="setting-title">Cài đặt</h2>
        <div className="setting-wrap-all">
            <div className="setting-option-wrap">
                <h3 className="setting-option-heading">Tuỳ chọn</h3>
                <h4 className="setting-option-title">Thông báo</h4>
                <div className="setting-option-btn">
                    <label className="setting-option-notification">On</label>
                    <div className="setting-option-circle"></div>
                </div>
                <h4 className="setting-option-title">Gửi mã OTP</h4>
                <div className="setting-option-btn">
                    <label className="setting-option-notification">On</label>
                    <div className="setting-option-circle"></div>
                </div>
                <button className="setting-option-save">Lưu cài đặt</button>
                <div className="setting-option-line"></div>
            </div>
            <div className="setting-info-wrap">
                <h3 className="setting-info-title">Tài khoản</h3>
                <div className="setting-info-description">
                    <div className="setting-info-description-wrap">
                        <label className="setting-info-label">Họ tên khách hàng</label>
                        <input type="text" className="setting-info-input" value={account.name}
                        onChange={event => handleUseName(event)}></input>
                    </div>
                    <div className="setting-info-description-wrap">
                        <label className="setting-info-label">số điện thoại</label>
                        <input type="text" className="setting-info-input" value={account.phoneNumber}
                        onChange={event => handlePhoneNumber(event)}></input>
                    </div>
                    <div className="setting-info-description-wrap">
                        <label className="setting-info-label">Mật khẩu ở hiện tại</label>
                        <input type="password" className="setting-info-input"
                        onChange={event=> handlePasswordCurrent(event)}></input>
                    </div>
                    <div className="setting-info-description-wrap">
                        <label className="setting-info-label">Mật khẩu mới</label>
                        <input type="password" className="setting-info-input"
                        onChange={event => handleNewPassword(event)}></input>
                    </div>
                    <div className="setting-info-description-wrap">
                        <label className="setting-info-label">Nhập lại mật khẩu</label>
                        <input type="password" className="setting-info-input"
                        onChange={event => handleNewPasswordAgain(event)}></input>
                    </div>
                </div>
                <button type="button" className="setting-info-btn"
                onClick={handleBtn}>Lưu thông tin</button>
            </div>
        </div>
    </div>
    )
}
export default Setting;