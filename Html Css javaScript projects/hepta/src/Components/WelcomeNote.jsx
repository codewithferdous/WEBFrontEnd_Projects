import React from "react";
import { Link } from "react-router-dom";
import image from "../Styling/Welcome.jpg";
import "../Styling/WelcomeNote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function WelcomeNote() {
  return (
    <div className="welcome">
      <img src={image} alt="welcome" className="welcome-image" />
      <div className="welcome-content">
        <h1 className="wel-heading">Welcome To Our Website</h1>
        <p className="wel-data">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
          <br />
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <Link to="#" className="wel-link">
          <pre>
          Watch the Video <FontAwesomeIcon icon={faPlay} className="play-icon" />
          </pre> </Link>
      </div>
    </div>
  );
}

export default WelcomeNote;
