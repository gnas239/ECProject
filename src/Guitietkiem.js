import { useContext, useState, useEffect } from "react"
import {AccountContext} from "./Login"
import savingApi from "./api/savingApi";
import customerApi from "./api/customerApi";
import "./css/Guitietkiem.css";
function Guitietkiem() {
  const account = useContext(AccountContext)
  const accountNumber = account.accountNumber.slice(0,4) +" "+account.accountNumber.slice(4,8)+" "+account.accountNumber.slice(8,12)+" "+account.accountNumber.slice(12,16)
  const accountBalance = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(account.accountBalance)
  const [depositAmount, setDepositAmount] = useState(0)
  const [period, setPeriod] = useState(0)
  const [interestRate, setInterestRate] = useState(0)
  const [dayEnd, setDayEnd] = useState("")
  useEffect(()=>{
    
  },[account.accountBalance])
  const handlePeriod = (event)=>{
    setPeriod(event.target.value)
    handleInterestRate(event.target.value);
  }
  const handleDepositAmount = (event)=>{
    setDepositAmount(event.target.value)
    handleDayEnd();
  }
  const handleOnclick = ()=>{
    if(accountBalance>=depositAmount )
      if(depositAmount>= 1000000){
        const json = JSON.stringify({"depositAmount":parseInt(depositAmount),
          "period":parseInt(period),
          "interestRate":Number(interestRate),
          "dayEnd":new Date(dayEnd),
          "idaccount":Number(account.idaccount.idaccount)})
        account.accountBalance -= depositAmount
        savingApi.add(json);
        const jsonUpdate = JSON.stringify({
          "name": account.name,
          "accountBalance":Number(account.accountBalance),
          "accountNumber":account.accountNumber,
          "phoneNumber": account.phoneNumber,
          "identityNumber": account.identityNumber,
          "address": account.address,
          "idaccount":Number(account.idaccount.idaccount),
          "idcustomer":Number(account.idcustomer)
        })
        customerApi.update(jsonUpdate)
        setDayEnd("")
        alert("Tạo tài khoản gửi tiết kiệm thành công")
      }else alert("số tiền phải lớn hơn 1.000.000");
      else alert("Số dư tài khoản không đủ")
  }
  const handleInterestRate = (inter)=>{
    switch (inter) {
      case "3":
        setInterestRate(3.4)
        break
      case "6":
        setInterestRate(4.0)
        break
      case "9":
        setInterestRate(5.6)
        break
      case "12":
        setInterestRate(5.6)
        break
      default:
        break
    }
  }
  const handleDayEnd = ()=>{
    const today = new Date();
    today.setMonth(today.getMonth() + parseInt(period))
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    setDayEnd(date)
  }
  
  return (
    <div className="guitietkiem">
      <h2 className="guitietkiem__title">Tài Khoản</h2>
      <div className="taikhoan__wrap">
        <div className="taikhoannguon__wrap">
          <h4 className="taikhoannguon__title">Tài khoản nguồn</h4>
          <h2 className="taikhoannguon__stk">{accountNumber}</h2>
        </div>
        <div className="taikhoannguon__wrap">
          <h4 className="taikhoannguon__title">Số dư khả dụng</h4>
          <h2 className="taikhoannguon__stk">{accountBalance}</h2>
        </div>
      </div>
      <h2 className="taikhoan__info">Thông tin tiết kiệm</h2>
      <div className="wrap__info">
        <div className="taikhoan__info-wrap">
          <div className="taikhoan-input__wrap">
            <div className="taikhoan-wrap">
              <label className="taikhoan-label taikhoan-label1">Kỳ hạn</label>
              <select className="taikhoan-giahan taikhoan-giahan1"
              onChange={event =>{handlePeriod(event)}}>
                <option value="">chọn kỳ hạn</option>
                <option value="3">3 tháng</option>
                <option value="6">6 tháng</option>
                <option value="9">9 tháng</option>
                <option value="12">12 tháng</option>
              </select>
              <div className="taikhoan-line1"></div>
            </div>
            <div className="taikhoan-wrap">
              <label className="taikhoan-label taikhoan-label2">Hình thức gia hạn</label>
              <select className="taikhoan-input taikhoan-input2">
                <option value="">Không tự động gia hạn</option>
              </select>
              <div className="taikhoan-line2"></div>
            </div>
          </div>
          <div className="taikhoan-input__wrap">
            <div className="taikhoan-wrap">
              <label className="taikhoan-label taikhoan-label3">Số tiền gửi</label>
              <input
                className="taikhoan-input taikhoan-input3"
                type="select"
                placeholder="Tối thiểu 1.000.000"
                onChange={(event) => handleDepositAmount(event)}
              ></input>
              <div className="taikhoan-line3"></div>
            </div>
            <div className="taikhoan-wrap">
              <label className="taikhoan-label taikhoan-label4">Loại tiền gửi</label>
              <select className="taikhoan-input taikhoan-input4">
                <option value="">Tiền gửi trực tuyến</option>
              </select>
              <div className="taikhoan-line4"></div>
            </div>
          </div>
          <button className="taikhoan-btn"
          onClick={handleOnclick}>Tiếp tục</button>
        </div>
      </div>
    </div>
  );
}

export default Guitietkiem;
