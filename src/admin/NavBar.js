// import '../css/main.css'

import accountIcon from '../img/account-icon.png'
import AddAccount from './AddAccount'
function NavBar (){
    
    return (
        <div className="navbar">
            <div class="menu-bar">
                <div class="text-home">
                    <h1 class="logo-text">GUITIETKIEM</h1>
                </div>
                <div class="list-menu">
                    <a to="/admin" class="them-acc icon">
                        <img class="img" src={accountIcon}/>
                        <p href="addacc.html" ><h5 class="text">Thêm Tài Khoản</h5></p>
                    </a>
                </div>
            </div>
            <AddAccount></AddAccount>
        </div>
    )
}
export default NavBar;