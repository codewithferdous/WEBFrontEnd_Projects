import React from 'react';
import { Link } from 'react-router-dom';
import 'F:/Project/codecrux/src/Styling/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} CodeCrux. All rights reserved.</p>
                <div className="footer-links">
                    <Link to="/AboutUs">About Us</Link>
                    <Link to="/ContactUs">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
