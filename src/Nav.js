import React from "react";
import "./Nav.css";
import "./media600.css";

class Nav extends React.Component {
  state = {
    continue: false,
    headerRemove: false,
    showModal: false,
    switch: "off"
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  };

  resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 70,
      homeHeaderName = document.getElementById("Home-header-name-id"),
      homeHeader = document.getElementById("Home-header-id"),
      headerWrapper = document.getElementById("Home-header-text-id"),
      buttons = document.getElementById("buttons-line-container-id");

    if (distanceY > shrinkOn) {
      homeHeaderName.classList.add("Home-content-name-smaller");
      homeHeaderName.classList.remove("Home-content-name");

      homeHeader.classList.add("Home-header-remove");
      homeHeader.classList.remove("Home-header");

      headerWrapper.classList.add("Home-header-text-remove");
      headerWrapper.classList.remove("Home-header-text");

      buttons.classList.add("buttons-line-container-smaller");
      buttons.classList.remove("buttons-line-container");

      this.setState({ headerRemove: true });
    } else {
      homeHeaderName.classList.remove("Home-content-name-smaller");
      homeHeaderName.classList.add("Home-content-name");

      homeHeader.classList.remove("Home-header-remove");
      homeHeader.classList.add("Home-header");

      headerWrapper.classList.remove("Home-header-text-remove");
      headerWrapper.classList.add("Home-header-text");

      buttons.classList.remove("buttons-line-container-smaller");
      buttons.classList.add("buttons-line-container");
      //   console.log("top");
      this.setState({ headerRemove: false });
    }
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      switch: "off"
    });
  };

  contact = () => {
    this.setState({
      showModal: true,
      switch: "on"
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* {!this.state.headerRemove ? ( */}
        <header className="Home-content-name" id="Home-header-name-id">
          <div className="header-wrapper" id="header-wrapper-id">
            <div className="Home-header" id="Home-header-id">
              <div className="Home-header-text" id="Home-header-text-id">
                ALL VALLEY DEALER RECOVERY
              </div>
            </div>
            <div
              className="buttons-line-container"
              id="buttons-line-container-id"
            >
              <a href="#/home/" rel="noopener noreferrer">
                <button
                  className="Home-nav-buttons-after"
                  id="Home-nav-buttons-after-id"
                >
                  <span>Home</span>
                </button>
              </a>
              <a href="#/contact/" rel="noopener noreferrer">
                <button
                  className="Home-nav-buttons-after"
                  id="Home-nav-buttons-after-id"
                >
                  <span>Contact</span>
                </button>
              </a>
              <a href="#/coverage" rel="noopener noreferrer">
                <button
                  className="Home-nav-buttons-after"
                  id="Home-nav-buttons-after-id"
                >
                  <span>Coverage</span>
                </button>
              </a>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Nav;
