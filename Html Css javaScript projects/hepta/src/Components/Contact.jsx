import { motion } from "framer-motion";
import React from "react";
import AnimatedSection from "../Components/AnimatedSection";
import Header from "../Components/Header";
import "../Styling/Contact.css";
import ContactUsForm from "./ContactUsForm";
import Customers from "./Customers";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <div className="contact-page">
        <Header />
        <AnimatedSection
          headingText="Contact US"
          paragraphText="A free template by"
          linkText="Colorlib"
          linkTo="/"
          buttonText="VISIT COLORLIB"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <ContactUsForm />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <Customers />
      </motion.div>
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

export default Contact;
