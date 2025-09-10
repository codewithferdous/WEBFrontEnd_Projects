import React from "react";
import Header from "./Header";
import AnimatedSection from "./AnimatedSection";
import "../Styling/Hotel.css";
import Details from "./Details";
import { motion } from "framer-motion";
import Rooms from "./Rooms";
import ImageChange from "./ImageChange";
import BlogPost from "./BlogPost";
import Footer from "./Footer";
function Hotel() {
    return(
        <div className="hotel-page">
        <Header />
        <AnimatedSection
          headingText="Our Hotel"
          paragraphText="A free template by"
          linkText="Colorlib"
          linkTo="/"
          buttonText="Book Room"
        />
         
         <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
      
      <Details />
      </motion.div>
         <Rooms />
     <ImageChange headingText="Hotel Gallery" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed."/>
<BlogPost/>
<motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
      
      <Footer />
      </motion.div>
    
        </div>
    );
}

export default Hotel;