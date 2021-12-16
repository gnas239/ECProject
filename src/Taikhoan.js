import "./css/Taikhoan.css"
function Taikhoan() {
    return(
        <div className="Taikhoan-wrap">
            <h2 className="Taikhoan-thanhtoan__title">Tài khoản thanh toán</h2>
            <div className="Taikhoan-current-wrap">
                <div className="Taikhoan-cr-wrap">
                    <h4 className="Taikhoan-current-title">Tài khoản hiện tại</h4>
                    <h3 className="Taikhoan-current-money">1234 4567 7891 1234</h3>
                </div>
                <div className="Taikhoan-cr-wrap">
                    <h4 className="Taikhoan-current-title">Số dư khả dụng</h4>
                    <h3 className="Taikhoan-current-money">$12.345.789</h3>
                </div>
                <div className="Taikhoan-cr-wrap">
                    <h4 className="Taikhoan-current-title">Tên khách hàng</h4>
                    <h3 className="Taikhoan-current-money">Nguyễn Văn A</h3>
                </div>
                
            </div>
            <h2 className="Taikhoan-tietkiem__title">Tài khoản tiết kiệm</h2>
            <div className="Taikhoan-saving-wrap">
                <div className="Taikhoan-save-wrap">
                    <h4 className="Taikhoan-saving-title">Số tiền gửi</h4>
                    <h3 className="Taikhoan-saving-money">10.000.000</h3>
                </div>
                <div className="Taikhoan-save-wrap">
                    <h4 className="Taikhoan-saving-title">Kỳ hạn</h4>
                    <h3 className="Taikhoan-saving-money">3 tháng</h3>
                </div>
                <div className="Taikhoan-save-wrap">
                    <h4 className="Taikhoan-saving-title">Lãi suất</h4>
                    <h3 className="Taikhoan-saving-money">4.8%</h3>
                </div>
                <div className="Taikhoan-save-wrap">
                    <h4 className="Taikhoan-saving-title">Ngày hết kỳ hạn</h4>
                    <h3 className="Taikhoan-saving-money">23/10/2021</h3>
                </div>
                <div className="Taikhoan-save-wrap">
                    <h4 className="Taikhoan-saving-title">Tiền lãi</h4>
                    <h3 className="Taikhoan-saving-money">10.480.000</h3>
                </div>
            </div>
            <button className="Taikhoan-btn">Rút tiền</button>
        </div>
    )
}

export default Taikhoan;