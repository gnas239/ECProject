import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect,useContext } from "react";
import "./css/App.css";
import HomePage from "./HomePage";
import Guitietkiem from "./Guitietkiem";
import Taikhoan from "./Taikhoan";
import Setting from "./Setting";
import imgHomePage from "./img/side-menu-home-icon.png";
import imgWalletPage from "./img/side-menu-wallet-icon.png";
import imgTietKiemPage from "./img/side-menu-tietkiem-icon.png";
import imgLichSuPage from "./img/side-menu-lichsu-icon.png";
import {AccountContext} from "./Login"
function App(saving) {
  const account = useContext(AccountContext)
  const [isActive, setActive] = useState(true);
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  
  useEffect(()=>{
    
  },[account.accountBalance])
  const handleActive = () => {
    setActive(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
  };
  const handleActive1 = () => {
    setActive(false);
    setActive1(true);
    setActive2(false);
    setActive3(false);
  };
  const handleActive2 = () => {
    setActive(false);
    setActive1(false);
    setActive2(true);
    setActive3(false);
  };
  const handleActive3 = () => {
    setActive(false);
    setActive1(false);
    setActive2(false);
    setActive3(true);
  };
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,300;0,600;0,700;0,900;1,100&display=swap"
        rel="stylesheet"
      ></link>
      <div className="side-menu">
        <h2 className="title-home">GỬITIẾTKIỆM</h2>
        <Link
          to="/"
          className={isActive ? "link-active link" : "link"}
          onClick={handleActive}
        >
          <img src={imgHomePage} className="side-menu__img-home img" alt="" />
          <p className="btn side-menu__btn-home">Trang chủ</p>
        </Link>
        <Link
          to="/Taikhoan"
          className={isActive1 ? "link-active link" : "link"}
          onClick={handleActive1}
        >
          <img
            src={imgWalletPage}
            className="side-menu__img-wallet img"
            alt=""
          />
          <p className="btn side-menu__btn-wallet">Tài khoản</p>
        </Link>
        <Link
          to="/Guitietkiem"
          className={isActive2 ? "link-active link" : "link"}
          onClick={handleActive2}
        >
          <img
            src={imgTietKiemPage}
            className="side-menu__img-tietkiem img"
            alt=""
          />
          <p className="btn side-menu__btn-tietkiem">Gửi tiết kiệm</p>
        </Link>
        <Link
          to="/Setting"
          className={isActive3 ? "link-active link" : "link"}
          onClick={handleActive3}
        >
          <img
            src={imgLichSuPage}
            className="side-menu__img-lichsu img"
            alt=""
          />
          <p className="btn side-menu__btn-lichsu">Cài đặt</p>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Taikhoan" element={<Taikhoan saving={saving} />} />
        <Route path="/Guitietkiem" element={<Guitietkiem />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
