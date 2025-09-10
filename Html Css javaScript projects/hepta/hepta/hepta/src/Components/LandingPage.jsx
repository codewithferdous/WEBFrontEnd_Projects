import React from "react";
import Header from "../Components/Header";
import WelcomeNote from "../Components/WelcomeNote";
import "../Styling/LandingPage.css";
import BlogPost from "./BlogPost";
import Customers from "./Customers";
import Destination from "./Destination";
import Details from "./Details";
import Footer from "./Footer";
import ImageChange from "./ImageChange";
import AnimatedSection from "../Components/AnimatedSection";
import { motion } from "framer-motion";
function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <AnimatedSection
        headingText="Travel & Tours"
        paragraphText="A free template by"
        linkText="Colorlib"
        linkTo="/"
        buttonText="VISIT COLORLIB"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <WelcomeNote />
      </motion.div>
      <Details />
      <ImageChange headingText="International Tour Management." description="
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean."/>
      <BlogPost />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <Customers />
      </motion.div>
      <Destination />
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

export default LandingPage;
