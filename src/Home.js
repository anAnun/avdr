import React from "react";
import Nav from "./Nav";
import "./Home.css";
import map from "./images/avdr.jpg";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="background-image-app" />

        <div className="pic-block" />
        <div>
          Located in the heard of North Hollywood right by the 170 freeway!
        </div>
        <div className="map-container">
          <a href="https://goo.gl/maps/4aKR7c1yQQu" target="_blank">
            <img src={map} />
          </a>
        </div>
        <div className="bottom-block">
          <br />
          <br />
          <br />
          <br />
          <div className="description">
            Welcome to All Valley Dealer Recovery, providing over 20 years of
            service repossessing units for financial institutions, varying from
            motorcycles, automobiles, water crafts and Recreational vehicles.
          </div>
          <br />
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
