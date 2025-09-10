import React from 'react';
import { Link } from 'react-router-dom';
import 'F:/Project/codecrux/src/App.css';
import logo from 'F:/Project/codecrux/src/Components/2.webp';
import Footer from 'F:/Project/codecrux/src/Components/Footer1';
import HomePageHeader from 'F:/Project/codecrux/src/Components/HomePageHeader';
import 'F:/Project/codecrux/src/Styling/SignIn.css';
function SignIn() {
  return (
    <div className='outer'>
      <HomePageHeader/>
    <div className='inner'>
    <div className='logol'>
        <img src={logo}alt="logo"  width='80px'/>
        <h1>CodeCrux</h1>
        </div>
      <input type="email" placeholder='Enter user name' /><br />
      <input type="password" placeholder='Enter password' /><br />
     <input type='password'placeholder='Enter Confirm Password' />
     <input type="email" placeholder='Enter E-mail address' /><br />
     <Link to='/HomePage'className="button">Sign Up</Link>
      <p>Have an account ? <Link to='/SignIn' className='signUpLink'>Sign In</Link>
      </p> 
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
