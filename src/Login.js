import './css/Login.css'
function Login() {
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
                        <input type="text" className="login-input-text" placeholder=" "></input>
                        <label className="login-input-label" >Số điện thoại</label>
                    </div>
                    <div className="login-input-wrap">
                        <input type="password" className="login-input-text" placeholder=" "></input>
                        <label className="login-input-label" >Mật khẩu</label>
                    </div>
                    <button className="login-form-btn">Đăng nhập</button>
                </div>
            </div>
        </div>
    )
}

export default Login;