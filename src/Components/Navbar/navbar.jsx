import React from "react";
import './navbar.css'
import logo from '../img/logo.png'

const Navbar = () => {
    return (
        <div className="navbar" id="navbar2">
            <div className='n-left'>
                <div className='n-name'>Made ❤️ utkarshdev2411</div>

            </div>
            <div className="n-center">
                <div className="n-logo"><img src=
                {logo}></img></div>
            </div>
            <div className="n-right">
                <ul style={{listStyleType:'none'}}>
                 <li>Numner </li>
                 <li>Notification</li>
                 <li>Login</li>
                </ul>

            </div>
        </div>
    )
}
export default Navbar