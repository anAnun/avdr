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
            experience repossessing units for financial institutions, varying
            from motorcycles, automobiles, water crafts and Recreational
            vehicles.
          </div>
          <div className="description">
            <ul className="block">
              <li className="block-marg">
                We use top of the line technology to locate and transport
                vehicles to our secured storage facility including 24 hour
                security guards and a high-tech surveillance system.
              </li>
            </ul>
            <ul className="block">
              <li className="block-marg">
                We have sneaker trucks, dollies for 4x4, motor cycles, and all
                wheel drive trucks, 5th wheel truck for trailers, and a flat
                bed.
              </li>
            </ul>
            <ul className="block">
              <li className="block-marg">
                We have key service, and professional locksmiths on hand.
              </li>
            </ul>
            <ul className="block">
              <li className="block-marg">
                We are all licensed by the state of California.
              </li>
            </ul>
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
