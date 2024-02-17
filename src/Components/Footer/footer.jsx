import React from "react";
import './footer.css';
import Logo from "../img/logo.png"
import { Facebook, GitHub, Instagram, Linkedin } from "react-feather";
const Footer = ()=>{
    return(
        <div className="footer">
            <div className="logo"><img src={Logo}></img></div>
           

            <div className="copyright"><span>&copy; 2024 inhub. All Rights reserved.</span></div>
            <div className="social-media">
              <a href="" className="icon"><Linkedin size="28" /></a>

              <a href="" className="icon"><Instagram size="28"/></a>
              <a href="" className="icon"><GitHub size="28" /></a>

            </div>

        </div>
    )
}
export default Footer;
