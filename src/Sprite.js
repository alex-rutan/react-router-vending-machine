import React from "react";
import { Link } from "react-router-dom";

function Sprite() {
  return (
    <div>
      <h1>SPRITE</h1>
      <img
        src="https://www.sprite.com/content/dam/nagbrands/us/sprite/en/products/thirst-for-yours/products/sprite/desktop/base_featurecan.jpg"
        alt="Can of Sprite"
      />
      <br></br>
      <button>
        <Link to="/">Back to vending machine</Link>
      </button>
    </div>
  );
}

export default Sprite;
