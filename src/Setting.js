import "./css/Setting.css";
function Setting(){
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
                        <input type="text" className="setting-info-input" value="Nguyễn Văn A"></input>
                    </div>
                    <div className="setting-info-description-wrap">
                        <label className="setting-info-label">số điện thoại</label>
                        <input type="text" className="setting-info-input" value="0123456789"></input>
                    </div>
                    <div className="setting-info-description-wrap">
                        <label className="setting-info-label">Mật khẩu ở hiện tại</label>
                        <input type="password" className="setting-info-input"></input>
                    </div>
                    <div className="setting-info-description-wrap">
                        <label className="setting-info-label">Mật khẩu mới</label>
                        <input type="password" className="setting-info-input"></input>
                    </div>
                    <div className="setting-info-description-wrap">
                        <label className="setting-info-label">Nhập lại mật khẩu</label>
                        <input type="password" className="setting-info-input"></input>
                    </div>
                </div>
                <button type="button" className="setting-info-btn">Lưu thông tin</button>
            </div>
        </div>
    </div>
    )
}
export default Setting;