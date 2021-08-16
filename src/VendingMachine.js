import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <div className="VendingMachine-list">
        <p>
          <Link to="/snickers">Snickers </Link>
        </p>
        <p>
          <Link to="/sprite">Sprite </Link>
        </p>
        <p>
          <Link to="/cheetos">Cheetos </Link>
        </p>
      </div>
      <img
        src="https://vending.com/wp-content/uploads/2021/04/MarketOne-SeriesSnack6W-scaled.jpg"
        alt="Vending Machine"
        style={{ width: "50%", height: "50%" }}
      />
    </div>
  );
}

export default VendingMachine;
