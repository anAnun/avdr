import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import Contact from "./Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="background-image-app" />
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/info"}
              component={Info}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/contact"}
              component={Contact}
            />
            <Route component={() => <div>404 Not found </div>} />
          </Switch>
        </HashRouter>
      </React.Fragment>
    );
  }
}

// {process.env.PUBLIC_URL}

export default App;
