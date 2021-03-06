import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import Contact from "./Contact";
import Coverage from "./Coverage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter basename="https://ananun.github.io/avdr">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/coverage" component={Coverage} />
            <Route component={() => <div>404 Not found </div>} />
          </Switch>
        </HashRouter>
      </React.Fragment>
    );
  }
}

//

export default App;
