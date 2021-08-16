import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <img
        src="https://vending.com/wp-content/uploads/2021/04/MarketOne-SeriesSnack6W-scaled.jpg"
        alt="Vending Machine"
      />
      <div className="VendingMachine-list">
        <ul>
          <li><Link to="/snickers"></Link></li>
          <li><Link to="/sprite"></Link></li>
          <li><Link to="/cheetos"></Link></li>
        </ul>
      </div>
    </div>
  );
}

export default VendingMachine;