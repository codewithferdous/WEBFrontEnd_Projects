import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'F:/Project/codecrux/src/Components/2.webp';
import 'F:/Project/codecrux/src/Styling/InitialComCss.css';
function HomePageHeader() {
  return (
    <header className='landing-header'>
        <div className="logo">
            <img src={logo}alt="logo" />
            <h2>CodeCrux</h2>
        </div>
        <div>
            <Link className='headerLinks' to='/SignUp'>Sign Up</Link>
            <Link className='headerLinks' to='/SignIn'>Sign in</Link>
        </div>
         </header>
  );
}

export default HomePageHeader;
