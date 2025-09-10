import React from "react";
import ReactStars from "react-rating-stars-component";
import boat from "../../src/Styling/boat.webp";
import chair from "../../src/Styling/chair.webp";
import climbing from "../../src/Styling/climbing.webp";
import "../../src/Styling/Destination.css";
import juices from "../../src/Styling/juices.webp";

function Destination() {
  const rating = 3.5;

  return (
    <div className="destinaton">
      <div className="destination-data">
        <h1 className="destination-heading">Top destination</h1>
        <p className="destination-para">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>
      </div>
      <div className="dest-card-details">
        <div className="dest-card">
          <img className="des-card-img" src={juices} height={200} width={200} alt="Food & Vines" />
          <h1 className="dest-card-heading">Food & Vines</h1>
          <div className="rating-stars">
            <ReactStars
              count={5}
              value={rating}
              size={25}
              isHalf={true}
              edit={false}
              activeColor="#009688"
              color="#6C757D"
            />
          </div>
        </div>
        <div className="dest-card">
          <img className="des-card-img" src={boat} height={200} width={200} alt="Resort & Spa" />
          <h1 className="dest-card-heading">Resort & Spa</h1>
          <div className="rating-stars">
            <ReactStars
              count={5}
              value={rating}
              size={25}
              isHalf={true}
              edit={false}
              activeColor="#009688"
              color="#6C757D"
            />
          </div>
        </div>
        <div className="dest-card">
          <img className="des-card-img" src={chair} height={200} width={200} alt="Hotel Rooms" />
          <h1 className="dest-card-heading">Hotel Rooms</h1>
          <div className="rating-stars">
            <ReactStars
              count={5}
              value={rating}
              size={25}
              isHalf={true}
              edit={false}
              activeColor="#009688"
              color="#6C757D"
            />
          </div>
        </div>
        <div className="dest-card">
          <img className="des-card-img" src={climbing} height={200} width={200} alt="Mountain Climbing" />
          <h1 className="dest-card-heading">Mountain Climbing</h1>
          <div className="rating-stars">
            <ReactStars
              count={5}
              value={rating}
              size={25}
              isHalf={true}
              edit={false}
              activeColor="#009688"
              color="#6C757D"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
