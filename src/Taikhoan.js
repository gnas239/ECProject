import { useContext, useEffect } from "react"
// note
import {AccountContext} from "./Login"
import "./css/Taikhoan.css"
import savingApi from './api/savingApi'
import  customerApi from './api/customerApi'
function Taikhoan(saving) {
    
    const account = useContext(AccountContext);
    const accountNumber = account.accountNumber.slice(0,4) +" "+account.accountNumber.slice(4,8)+" "+account.accountNumber.slice(8,12)+" "+account.accountNumber.slice(12,16)
    const accountBalance = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(account.accountBalance);
    const save = saving.saving.saving
    const depositAmount = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(save.depositAmount);
    const interest = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(save.depositAmount + save.depositAmount*(Number(save.interestRate)/100)/12 * Number(save.period));
    useEffect(()=>{

    },[account.accountBalance,save.depositAmount])
    const handleClick = ()=>{
        const today = new Date()
        const dateCurrent = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate())
        const dateEnd = new Date(save.dayEnd)
        dateEnd.setMonth(dateEnd.getMonth()-parseInt(save.period))
        const dayEnd = dateEnd.getFullYear()+'-'+(dateEnd.getMonth()+1)+'-'+(dateEnd.getDate()+1)
        if ((Date.parse(dateCurrent)-Date.parse(save.dayEnd))/(24*3600*1000)>= 0){
            account.accountBalance += save.depositAmount + save.depositAmount*(Number(save.interestRate)/100)/12 * Number(save.period);
            // let surplus = Math.floor(save.depositAmount*(Date.parse(dateCurrent)-Date.parse(save.dayEnd))/(24*3600*1000)*(0.002/365))
            // account.accountBalance += surplus
        }else{
            let surplus = Math.floor(save.depositAmount*((Date.parse(dateCurrent)-Date.parse(dayEnd))/(24*3600*1000))*(0.002/365))
            account.accountBalance += save.depositAmount
            account.accountBalance += surplus
        }
        savingApi.delete(save.idsavings)
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
        save.depositAmount = 0;
    }
    return(
        <div className="Taikhoan-wrap">
            <h2 className="Taikhoan-thanhtoan__title">Tài khoản thanh toán</h2>
            <div className="Taikhoan-current-wrap">
                <div className="Taikhoan-cr-wrap">
                    <h4 className="Taikhoan-current-title">Tài khoản hiện tại</h4>
                    <h3 className="Taikhoan-current-money">{accountNumber}</h3>
                </div>
                <div className="Taikhoan-cr-wrap">
                    <h4 className="Taikhoan-current-title">Số dư khả dụng</h4>
                    <h3 className="Taikhoan-current-money">{accountBalance}</h3>
                </div>
                <div className="Taikhoan-cr-wrap">
                    <h4 className="Taikhoan-current-title">Tên khách hàng</h4>
                    <h3 className="Taikhoan-current-money">{account.name}</h3>
                </div>
                
            </div>
            <h2 className="Taikhoan-tietkiem__title">Tài khoản tiết kiệm</h2>
            {save.depositAmount?<div>
            <div className="Taikhoan-saving-wrap">
                <div className="Taikhoan-save-wrap">
                    <h4 className="Taikhoan-saving-title">Số tiền gửi</h4>
                    <h3 className="Taikhoan-saving-money">{depositAmount}</h3>
                </div>
                <div className="Taikhoan-save-wrap">
                    <h4 className="Taikhoan-saving-title">Kỳ hạn</h4>
                    <h3 className="Taikhoan-saving-money">{`${save.period} tháng`}</h3>
                </div>
                <div className="Taikhoan-save-wrap">
                    <h4 className="Taikhoan-saving-title">Lãi suất</h4>
                    <h3 className="Taikhoan-saving-money">{`${save.interestRate}%`}</h3>
                </div>
                <div className="Taikhoan-save-wrap">
                    <h4 className="Taikhoan-saving-title">Ngày hết kỳ hạn</h4>
                    <h3 className="Taikhoan-saving-money">{save.dayEnd}</h3>
                </div>
                <div className="Taikhoan-save-wrap">
                    <h4 className="Taikhoan-saving-title">Tiền sau lãi</h4>
                    <h3 className="Taikhoan-saving-money">{`${interest}`}</h3>
                </div>
            </div>
            <button className="Taikhoan-btn"
            onClick={handleClick}>Rút tiền</button>
            </div>:<h2 className="no-saving">Bạn chưa mở tài khoản tiết kiệm</h2>}
        </div>
    )
}
export default Taikhoan;