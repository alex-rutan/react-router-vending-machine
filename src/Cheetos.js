import React from "react";
import { Link } from "react-router-dom";

function Cheetos() {
  return (
    <div>
      <h1>CHEETOS</h1>
      <img
        src="https://www.cnet.com/a/img/NsbMTQKC8LKL3CyHXULJMr-KPaA=/940x0/2019/08/27/7362af32-9a5e-46bc-bdca-1f2437512475/cheetos.jpg"
        alt="Can of Sprite"
        style={{ width: "400px", height: "400px" }}
      />
      <br></br>
      <button>
        <Link to="/">Back to vending machine</Link>
      </button>
    </div>
  );
}

export default Cheetos;
