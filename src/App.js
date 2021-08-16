import React from "react";

import NavBar from "./NavBar";
import Cheetos from "./Cheetos";
import Snickers from "./Snickers";
import Sprite from "./Sprite";
import VendingMachine from "./VendingMachine";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{textAlign:"center"}}>
      <BrowserRouter>
        <NavBar />
        <Route exact path="/cheetos">
          <Cheetos />
        </Route>
        <Route exact path="/snickers">
          <Snickers />
        </Route>
        <Route exact path="/sprite">
          <Sprite />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
