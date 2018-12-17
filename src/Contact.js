import React from "react";
import Nav from "./Nav";
import "./Contact.css";
import "./media600.css";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="text-contact-container">
          <div className="text-contact">
            <br />
            <div className="align" id="align">
              Contact us!
            </div>
            <br />
          </div>
        </div>
        <div className="contact-center">
          <label>Office phone: </label>
          <a href="tel:+1-818-982-7376">818-982-7376</a>
          <div>fax: 818-982-2118</div>
          <div>Address: 7361 Laurel Canyon Blvd North Hollywood CA 91605</div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="credit-container">
          <div className="credit-photo">
            Background Photo from{" "}
            <a href="https://pngtree.com/freebackground/business-people-using-mobile-phones-definition-pictures_372268.html">
              pngtree.com
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
