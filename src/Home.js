import React from "react";
import Nav from "./Nav";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="home-screen" />
        <div className="pic-block" />
        <div className="bottom-block">
          <div className="description">hello Dave</div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
