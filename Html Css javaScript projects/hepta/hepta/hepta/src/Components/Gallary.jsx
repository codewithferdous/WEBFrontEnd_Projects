import { motion } from "framer-motion";
import React from "react";
import boat from "../../src/Styling/boat.webp";
import chair from "../../src/Styling/chair.webp";
import juices from "../../src/Styling/juices.webp";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../Styling/Gallary.css";
import AnimatedSection from "./AnimatedSection";
function ShowPic({ link }) {
  return (
    <motion.img
      className="gallery-img"
      src={link}
      alt="Gallery"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  );
}

function Gallary() {
  return (
    <div>
      <div className="Gallary-page">
        <Header />
        <AnimatedSection
          headingText="Gallery"
          paragraphText="A free template by"
          linkText="Colorlib"
          linkTo="/"
          buttonText="VISIT COLORLIB"
        />
      </div>
      <div className="gallery-container">
        <ShowPic link={boat} />
        <ShowPic link={chair} />
        <ShowPic link={juices} />
        <ShowPic link={boat} />
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      > <ShowPic link={juices} />
        <ShowPic link={boat} />
        <ShowPic link={boat} />
      </motion.div>
         <ShowPic link={juices} />
       
        <ShowPic link={juices} />
      
        {/* Add more ShowPic components as needed */}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default Gallary;
