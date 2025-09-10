import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from 'F:/Project/codecrux/src/Components/AboutUs.jsx';
import Compiler from 'F:/Project/codecrux/src/Components/Compiler';
import ContactUs from 'F:/Project/codecrux/src/Components/ContactUs.jsx';
import HomePage from 'F:/Project/codecrux/src/Components/HomePage.jsx';
import InitialCom from 'F:/Project/codecrux/src/Components/InitialCom.jsx';
import QuestionsPage from 'F:/Project/codecrux/src/Components/Questionspage.jsx';
import SignIn from 'F:/Project/codecrux/src/Components/SignIn.js';
import SignUp from 'F:/Project/codecrux/src/Components/SignUp.js';
import TopicPage from 'F:/Project/codecrux/src/Components/TopicPage.jsx';

ReactDOM.render(
  <Router>
  <Routes>
  <Route path='/' element= {<InitialCom />} />
  <Route path='/SignIn' element={<SignIn />} />
  <Route path='/SignUp' element={<SignUp />} />
  <Route path="/ContactUs" element={<ContactUs />} />
  <Route path="/AboutUs" element={<AboutUs />} />
  <Route path="/QuestionsPage" element={<QuestionsPage />} />
  <Route path="/HomePage" element={<HomePage />} />
  <Route path="/TopicPage" element={<TopicPage />} />
  <Route path='/Compiler' element={<Compiler />} />
  </Routes>
  </Router>
  ,
  document.getElementById('root')
);
 
