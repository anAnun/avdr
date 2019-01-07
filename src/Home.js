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
        <div className="text-block">
          <div className="center">
            Located in the heart of North Hollywood right by the 170 freeway!
          </div>
        </div>
        {/* <div className="map-block">
          <div className="map-container"> */}
        {/* <div className="map-tag-container"> */}
        <a
          href="https://goo.gl/maps/4aKR7c1yQQu"
          target="_blank"
          className="map-a-tag"
          rel="noopener noreferrer"
        >
          <img src={map} className="map-block" alt="" />
        </a>
        {/* </div> */}
        {/* </a> */}
        <div className="bottom-block">
          <br />
          <br />
          <div className="description">
            Welcome to All Valley Dealer Recovery, providing over 20 years of
            service repossessing units for financial institutions, varying from
            motorcycles, automobiles, water crafts and Recreational vehicles.
          </div>
          {/* All Valley Dealer Recovery inc.
        get email
        facility photos: pics of yard
        coverage area: list of cities with zipcodes */}
          <br />
          <br />
          <div>State License number: RA1822</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
