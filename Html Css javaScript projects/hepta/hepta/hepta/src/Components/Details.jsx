import React from "react";
import airplane from "../../src/Styling/Airplane.svg";
import balloon from "../../src/Styling/Balloon.svg";
import beach from "../../src/Styling/Beach.svg";
import "../../src/Styling/Details.css";
import food from "../../src/Styling/food.svg";
import mountain from "../../src/Styling/Mountain.svg";
import travel from "../../src/Styling/Travel.svg";

// Card Component
function Card({ imgSrc, heading, description }) {
  return (
    <div className="card">
      <img className="card-img" src={imgSrc} height={100} width={100} alt={heading} />
      <h1 className="card-heading">{heading}</h1>
      <p className="card-para">{description}</p>
    </div>
  );
}

// Details Component
function Details() {
  return (
    <div className="details">
      <div className="experience">
        <h1 className="exp-heading">Experience Once In Your Lifetime</h1>
        <p className="exp-para">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
      <div className="card-details">
        <Card
          imgSrc={food}
          heading="Good Foods"
          description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        <Card
          imgSrc={travel}
          heading="Travel Anywhere"
          description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        <Card
          imgSrc={airplane}
          heading="Airplane"
          description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
      </div>
      <div className="card2">
        <Card
          imgSrc={beach}
          heading="Beach Resort"
          description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        <Card
          imgSrc={mountain}
          heading="Mountain Climbing"
          description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        <Card
          imgSrc={balloon}
          heading="Hot Air Balloon"
          description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
      </div>
    </div>
  );
}

export default Details;
