import React from "react";
import Nav from "./Nav";
import contact from "./images/contact.jpg";
import "./Contact.css";

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
            <div className="align">Contact us!</div>
          </div>
        </div>
        <a href="tel:+1-818-982-7376">Office phone: 818-982-7376</a>
        <div>fax: 818-982-2118</div>
        <div>Address: 7361 Laurel Canyon Blvd North Hollywood CA 91605</div>
        <div className="credit-photo">
          Background Photo from{" "}
          <a href="https://pngtree.com/freebackground/business-people-using-mobile-phones-definition-pictures_372268.html">
            pngtree.com
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
