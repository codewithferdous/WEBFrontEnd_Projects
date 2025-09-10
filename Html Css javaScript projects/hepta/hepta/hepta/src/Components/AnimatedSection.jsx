// src/Components/AnimatedSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AnimatedSection({ headingText, paragraphText, linkText, linkTo, buttonText }) {
  return (
    <div className="animated-section">
      <motion.h1
        className="landing-heading"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {headingText}
      </motion.h1>

      <motion.p
        className="land-content"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {paragraphText}{" "}
        <Link to={linkTo} className="land-link">
          {linkText}
        </Link>
        . Download and share!
      </motion.p>

      <motion.button
        className="land-button"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {buttonText}
      </motion.button>
    </div>
  );
}

export default AnimatedSection;
