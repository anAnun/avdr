import React from "react";
import Nav from "./Nav";

class Coverage extends React.Component {
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
        <div>
          We cover Los Angeles County, Ventura County, and Antelope Valley
        </div>
        <div>Los Angeles County</div>
        <ul>Los Angeles 90028 90007</ul>
        <ul> Glendale 91205 91206 91204</ul>
        <ul> Burbank 91502 91505</ul>
        <ul> Pasadena 91666 91069</ul>
        <div>Ventura County</div>
        <ul>City1 90222</ul>
        <ul> City2 89993 93838</ul>
        <div>Antelope Valley</div>
        <ul>Other City 00333</ul>
        <ul> Other city2 69069</ul>
      </React.Fragment>
    );
  }
}

export default Coverage;
