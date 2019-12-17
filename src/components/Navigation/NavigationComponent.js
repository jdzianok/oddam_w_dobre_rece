import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink } from "react-router-dom";

const options = {
  activeClass: "active",
  duration: 700,
  spy: true,
  smooth: true,
  offset: -20
};

class NavigationComponent extends Component {
  state = {};

  render() {
    const { isLogged } = this.props.state.state;
    return (
      <div className="menu">
        <div className="topMenu">
          <button
            className={isLogged ? "menuBtn loggedBtn" : "menuBtn logginBtn"}
          >
            {isLogged ? "Oddaj Rzeczy" : "Zaloguj"}
          </button>
          <button
            className={isLogged ? "menuBtn logoutBtn" : "menuBtn registerBtn"}
          >
            {isLogged ? "Wyloguj" : "Załóż konto"}
          </button>
        </div>
        <nav className="bottomMenu">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Start
              </NavLink>
            </li>
            <li>
              <ScrollLink to="simpleSteps" {...options}>
                O co chodzi?
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="aboutUs" {...options}>
                O nas
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="whoWeHelp" {...options}>
                Fundacja i organizacje
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="formContact" {...options}>
                Kontakt
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavigationComponent;
