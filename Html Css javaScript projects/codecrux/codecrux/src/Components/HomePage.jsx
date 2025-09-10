import React from 'react';
  
import AlwaysRemember from 'F:/Project/codecrux/src/Components/AlwaysRemember';
import Course from 'F:/Project/codecrux/src/Components/Course';
import Footer from 'F:/Project/codecrux/src/Components/Footer';
import Header from 'F:/Project/codecrux/src/Components/Header';
import language from 'F:/Project/codecrux/src/Components/Language';
import 'F:/Project/codecrux/src/Styling/HomePage.css';
function CreateCourse(language){
    return <Course name={language.name} data={language.data}/>
}
function HomePage(){
    return(
        <div>
            <Header />
<AlwaysRemember/>
<h1 className='option'>Language You can Learn</h1>
{language.map(CreateCourse)}
<Footer/>
        </div>
    );
}
export default HomePage;