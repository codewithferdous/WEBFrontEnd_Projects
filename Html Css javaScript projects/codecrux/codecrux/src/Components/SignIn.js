import React from 'react';
import { Link } from 'react-router-dom';
import 'F:/Project/codecrux/src/App.css';
import logo from 'F:/Project/codecrux/src/Components/2.webp';
import HomePageHeader from 'F:/Project/codecrux/src/Components/HomePageHeader';
import 'F:/Project/codecrux/src/Styling/SignIn.css';
function SignIn() {
  const date = new Date().getFullYear();
  return (
    <div>
    <HomePageHeader />
    <div className='outer'>
      <div className='inner'>
        <div className='logol'>
        <img src={logo}alt="logo"  width='80px'/>
        <h1>CodeCrux</h1>
        </div>
        <input type="email" placeholder='Enter user name' /><br />
        <input type="password" placeholder='Enter password' /><br />
        
        <Link to='/HomePage'className="button">Sign In</Link>
        <p id='linkSi'> You don't have Account ? <Link to='/SignUp' className='signUpLink'>Sign Up</Link></p>
      </div><footer className="mt-4">
        <p>© {date} CodeCrux. All Rights Reserved. Privacy Policy | Terms of Service</p>
      </footer>
    </div>
    </div>
    
  );
}

export default SignIn;

