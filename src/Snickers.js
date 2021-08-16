import React from "react";
import { Link } from "react-router-dom";

function Snickers() {
  return (
    <div>
      <h1>SNICKERS</h1>
      <img
        src="https://st.depositphotos.com/2121815/4176/i/600/depositphotos_41764645-stock-photo-snickers-chocolate-bar-isolated-on.jpg"
        alt="Snickers Bar"
      />
      <br></br>
      <button>
        <Link to="/">Back to vending machine</Link>
      </button>
    </div>
  );
}

export default Snickers;
