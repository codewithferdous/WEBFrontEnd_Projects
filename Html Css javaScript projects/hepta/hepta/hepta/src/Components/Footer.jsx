import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "../../src/Styling/Footer.css";
function Footer(){
  return(
    <footer className="footer">
        <div class="foot-panel2">
            <ul>
                <p>Quick Link</p>
                <a>About Us</a>
                <a>Terms & Conditions</a>
                <a>Privacy Policy</a>
                <a>Help</a>
                <a>Rooms</a>
            </ul>
            <ul>
                <p>Support</p>
                <a>Our Location</a>
                <a>The Hosts</a>
                <a>About</a>
                <a>Contact</a>
                <a>Restaurant</a>
            </ul>
            <ul>
                <p>Contact Info</p>
                <h3>Address</h3>
                <span className="footer-contact">COMSATS University Islamabad, Abbottabad Campus</span>
                <h3>Phone</h3>
                <span className="footer-contact">(+92)123456</span>
                <h3>Email</h3>
                <span className="footer-contact">ferdous5021@gmail.com</span>
            </ul>
            <ul>
                <p>Subscribe</p>
                <span className="footer-contact">Subscribe our website</span>
            </ul>
        </div>
        <div class="foot-panel4">
            <div class="copyright">
            Copyright © 2024 All rights reserved | This template is made with  by Colorlib
            </div>
            <div className="social-media-icons">
      <a  className="icon facebook"><FaFacebookF />  </a>
      <a className="icon twitter"><FaTwitter /></a>
      <a  className="icon instagram"><FaInstagram /> </a>
      <a className="icon linkedin"> <FaLinkedinIn /></a>
    </div>
        </div>
    </footer>
  )
}
export default Footer;