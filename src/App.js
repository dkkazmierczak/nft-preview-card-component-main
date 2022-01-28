import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import equilibrium from "./images/image-equilibrium.jpg"
import avatar from "./images/image-avatar.png"
import clock from "./images/icon-clock.svg"
import ethereum from "./images/icon-ethereum.svg"
import view from "./images/icon-view.svg"

import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="image-wrapper">
            <img src={equilibrium} alt="equilibrium" className="image" />
            <img
              src={view}
              alt="view-icon"
              className="view-icon"
              id="show-view-icon"
            />
          </div>

          <h1>Equilibrium #3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div className="row">
            <div className="col-6 ETH">
              <img src={ethereum} alt="ethereum" />
              <span className="ETH-text">0.041 ETH</span>
            </div>
            <div className="col-6 clock">
              <img src={clock} alt="clock" />
              <span className="clock-text">3 days left</span>
            </div>
          </div>
          <hr />
          <div className="footer">
            <img src={avatar} alt="avatar" className="avatar" />
            <span className="footer-text">
              Creation of <span className="name">Jules Wyvern</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
