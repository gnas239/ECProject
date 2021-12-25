import { useContext } from "react"

import {AccountContext} from "./Login"
import './css/HomePage.css'
import iconError from './img/activity-icon-error.png'
import logoChuyentien from './img/chuyentiennoibo.png'
import logoLienNganHang from './img/liennganhang.png'
import logoGuiTien from './img/guitien.png'
import Paypal from "./Paypal"

function HomePage(){
    const account = useContext(AccountContext)
    const accountNumber = account.accountNumber.slice(0,4) +" "+account.accountNumber.slice(4,8)+" "+account.accountNumber.slice(8,12)+" "+account.accountNumber.slice(12,16)
    const accountBalance = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(account.accountBalance)
    
    return(
        <div className="homepage">
            <h2 className="homepage__title">Trang chủ</h2>
            <div className="homepage__wrap">
                <div className="homepage__cart">
                    <h4 className="homepage__cart-title-current">Số dư khả dụng</h4>
                    <h2 className="homepage__cart-money-current" >{accountBalance}</h2>
                    <div className="homepage__cart-money-circle1"></div>
                    <div className="homepage__cart-money-circle2"></div>
                    <h4 className="homepage__cart-id-name">Số tài khoản</h4>
                    <h2 className="homepage__cart-id-current">{accountNumber}</h2>
                    <div className="homepage__cart-money-circle3"></div>
                    <div className="homepage__cart-money-circle4"></div>
                </div>
                <div className="homepage__activity">
                    <h3 className="homepage__activity-title">Hoạt động gần đây</h3>
                    <div className="homepage__activity-wrap">
                        <div className="homepage__activity-icon"><img className="homepage__activity-icon-img" src={iconError}/></div>
                        <div className="homepage__activity-info-wrap">
                            <h4 className="homepage__activity-info-name">{account.name}</h4>
                            <p className="homepage__activity-info-transaction">Chuyển tiền</p>
                        </div>
                        <h3 className="homepage__activity-info-money">2.000.000</h3>
                        <h3 className="homepage__activity-info-date">25 jan, 2021</h3>
                        <h3 className="homepage__activity-info-status">Thành công</h3>
                    </div>
                </div> 
            </div>
            <div className="homepage__footer">
                <div className="homepage-wrap">
                    <img className="homepage-img" src={logoChuyentien}/>
                    <h4 className="homepage-text">Chuyển tiền nội bộ ngân hàng</h4>
                </div>
                <div>
                    <Paypal/>
                    input
                </div>
                <div className="homepage-wrap">
                    <img className="homepage-img" src={logoLienNganHang}/>
                    <h4 className="homepage-text">Chuyển tiền liên ngân hàng</h4>
                </div>
                <div className="homepage-wrap">
                    <img className="homepage-img" src={logoGuiTien}/>
                    <h4 className="homepage-text">Gửi tiền tiết kiệm</h4>
                </div>
            </div>
        </div>
    )
}

export default HomePage;