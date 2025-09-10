import React from 'react';
import customer1 from "../../src/Styling/customer1.webp";
import customer2 from "../../src/Styling/customer2.webp";
import customer3 from "../../src/Styling/customer3.webp";
import "../../src/Styling/Customers.css";

function Customers() {
  return (
    <div className="customers">
      <h1 className="customer-heading">Happy Customers</h1>
      <div className="customers-details">
        <div className="customer-data">
          <img className="customer-img" src={customer1} alt="Customer 1" />
          <p className="customer-para">
            “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
          </p>
          <p className="customer-name">
            — Clare Gupta
          </p>
        </div>
        <div className="customer-data">
          <img className="customer-img" src={customer2} alt="Customer 2" />
          <p className="customer-para">
            “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
          </p>
          <p className="customer-name">
            — Rogie Slater
          </p>
        </div>
        <div className="customer-data">
          <img className="customer-img" src={customer3} alt="Customer 3" />
          <p className="customer-para">
            “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
          </p>
          <p className="customer-name">
            — John Doe
          </p>
        </div>
      </div>
    </div>
  );
}

export default Customers;
