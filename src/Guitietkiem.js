import "./css/Guitietkiem.css";
function Guitietkiem() {
  return (
    <div className="guitietkiem">
      <h2 className="guitietkiem__title">Tài Khoản</h2>
      <div className="taikhoan__wrap">
        <div className="taikhoannguon__wrap">
          <h4 className="taikhoannguon__title">Tài khoản nguồn</h4>
          <h2 className="taikhoannguon__stk">123.456.789</h2>
        </div>
        <div className="taikhoannguon__wrap">
          <h4 className="taikhoannguon__title">Số dư khả dụng</h4>
          <h2 className="taikhoannguon__stk">$123.456.789</h2>
        </div>
      </div>
      <h2 className="taikhoan__info">Thông tin tiết kiệm</h2>
      <div className="wrap__info">
        <div className="taikhoan__info-wrap">
          <div className="taikhoan-input__wrap">
            <div className="taikhoan-wrap">
              <label className="taikhoan-label taikhoan-label1">Kỳ hạn</label>
              <select className="taikhoan-giahan taikhoan-giahan1">
                <option value="3 tháng">3 tháng</option>
                <option value="6 tháng">6 tháng</option>
                <option value="9 tháng">9 tháng</option>
                <option value="12 tháng">12 tháng</option>
              </select>
              <div className="taikhoan-line1"></div>
            </div>
            <div className="taikhoan-wrap">
              <label className="taikhoan-label taikhoan-label2">Hình thức gia hạn</label>
              <input
                className="taikhoan-input taikhoan-input2"
                type="select"
                placeholder="Chọn hình thức gia hạn"
              ></input>
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
              ></input>
              <div className="taikhoan-line3"></div>
            </div>
            <div className="taikhoan-wrap">
              <label className="taikhoan-label taikhoan-label4">Loại tiền gửi</label>
              <input
                className="taikhoan-input taikhoan-input4"
                type="select"
                placeholder="Tiền gửi trực tuyến"
              ></input>
              <div className="taikhoan-line4"></div>
            </div>
          </div>
          <button className="taikhoan-btn">Tiếp tục</button>
        </div>
      </div>
    </div>
  );
}

export default Guitietkiem;
