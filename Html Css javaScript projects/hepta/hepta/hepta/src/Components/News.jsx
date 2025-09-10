import { motion } from "framer-motion";
import React from "react";
import "../../src/Styling/BlogPost.css";
import boat from "../../src/Styling/boat.webp";
import chair from "../../src/Styling/chair.webp";
import juices from "../../src/Styling/juices.webp";
import AnimatedSection from "../Components/AnimatedSection";
import Header from "../Components/Header";
import "../Styling/news.css";
import Footer from "./Footer";
function News() {
    return(
        <div className="newsPage">
        <div className="news-page">
        <Header />
        <AnimatedSection
          headingText="Blog Post"
          paragraphText="A free template by"
          linkText="Colorlib"
          linkTo="/"
          buttonText="VISIT COLORLIB"
        />
</div>
<div className="outer-portion">
        <div className="first-part">
<div>
<div className="bb">
       <div className="blog-cards">
       <div className="bcard">
            <img className="bcard-img" src={juices} height={250} width={250}/>
            <div className="blogdata">
            <h1 className="bcard-heading">45 Best Places To Unwind</h1>
            <p className="bcard-para">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            </div> 
        </div>
        <div className="bcard">
            <img className="bcard-img" src={boat} height={250} width={250}/>
            <div className="blogdata">
            <h1 className="bcard-heading">45 Best Places To Unwind</h1>
            <p className="bcard-para">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            </div>
        </div>
        <div className="bcard">
            <img className="bcard-img" src={chair} height={250} width={250}/>
            <div className="blogdata">
            <h1 className="bcard-heading">45 Best Places To Unwind</h1>
            <p className="bcard-para">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            </div>
        </div>
       </div>
       </div>
</div>
<div>
<div className="bb">
       <div className="blog-cards">
       <div className="bcard">
            <img className="bcard-img" src={juices} height={250} width={250}/>
            <div className="blogdata">
            <h1 className="bcard-heading">45 Best Places To Unwind</h1>
            <p className="bcard-para">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            </div> 
        </div>
        <div className="bcard">
            <img className="bcard-img" src={boat} height={250} width={250}/>
            <div className="blogdata">
            <h1 className="bcard-heading">45 Best Places To Unwind</h1>
            <p className="bcard-para">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            </div>
        </div>
        <div className="bcard">
            <img className="bcard-img" src={chair} height={250} width={250}/>
            <div className="blogdata">
            <h1 className="bcard-heading">45 Best Places To Unwind</h1>
            <p className="bcard-para">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            </div>
        </div>
       </div>
       </div>
</div>
        </div>
     
        </div>  
     
         <div>
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
      
      <Footer />
      </motion.div>
      </div>
        </div>
    );
} export default News;