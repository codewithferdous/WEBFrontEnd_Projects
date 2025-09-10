import { motion } from "framer-motion";
import React from "react";
import "../Styling/AboutUs.css"; // Remove if not used in About
import "../Styling/Hotel.css"; // Consider removing this if not used in About
import '../Styling/Rooms.css'; // Ensure this import
import AnimatedSection from "./AnimatedSection";
import Customers from "./Customers";
import Details from "./Details";
import Footer from "./Footer";
import Header from "./Header";
import ImageChange from "./ImageChange";
import Room from "./Room";

function About() {
    const img1 = require('../Styling/image1.webp'); // Adjust path as needed
    const img2 = require('../Styling/Welcome.jpg');

    return (
        <div>
        <div className="aboutUs-page">
            
            <Header />
            <AnimatedSection
                headingText="About Us"
                paragraphText="A free template by"
                linkText="Colorlib"
                linkTo="/"
                buttonText="Share it"
            />
            </div>
            <div className="rooms">
                <Room
                    name="Welcome Travel & Tours"
                    details="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia."
                    pic={img1}
                    reverse={false} // Image on the left
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <Details />
            </motion.div>
            <ImageChange
                headingText="Hotel Gallery"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed."
            />
            <Customers />
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

export default About;