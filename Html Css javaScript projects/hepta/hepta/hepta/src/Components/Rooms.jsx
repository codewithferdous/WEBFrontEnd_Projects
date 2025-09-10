// src/Components/Rooms.jsx
import React from "react";
import '../Styling/Rooms.css'; // Ensure this import

import Room from "./Room";

function Rooms() {
  const img1 = require('../Styling/image1.webp'); // Adjust path as needed
  const img2 = require('../Styling/Welcome.jpg'); // Adjust path as needed
  return (
    <div className="rooms">
      <Room
        name="Family Room"
        details="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia."
        pic={img1}
        reverse={false} // Image on the left
      />
      <Room
        name="Presidential Room"
        details="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia."
        pic={img2}
        reverse={true} // Image on the right
      />
    </div>
  );
}

export default Rooms;