import React, { Component } from "react";
import Home from "./Home";
import Info from "./Info";
import Contact from "./Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </HashRouter>
      </React.Fragment>
    );
  }
}

export default App;
