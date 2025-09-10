import React from "react";
import { Link } from "react-router-dom";
import logo from 'F:/Project/codecrux/src/Components/2.webp';
import 'F:/Project/codecrux/src/Styling/InitialComCss.css';
function Header(){
    return(
        <header className="main-header">
        <div className="logo">
            <img src={logo}alt="logo" />
            <h2>CodeCrux</h2>
        </div>
        <div className="otherHeaderCom">
            <Link className="headerLinks" to='/HomePage'>Home Page</Link>
            <Link className="headerLinks" to='/AboutUs'>About Us</Link>
            <Link className="headerLinks"to='/ContactUs'>Contact Us</Link>
            <Link className="headerLinks" to="#">Profile</Link>
        </div>
    </header>
    );
}
export default Header;