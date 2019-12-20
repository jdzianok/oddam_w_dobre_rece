import React, { Component } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, Link, withRouter } from "react-router-dom";
const firebase = require("firebase");

const options = {
  activeClass: "active",
  duration: 700,
  spy: true,
  smooth: true,
  offset: -20
};

class NavigationComponent extends Component {
  logout = () => {
    firebase.auth().signOut();
    this.props.history.push("/wylogowano");
  };

  render() {
    const { isLogged } = this.props;
    console.log(isLogged);
    return (
      <div className="menu">
        <div className="topMenu">
          {isLogged ? <p className="user">Witaj {isLogged}!</p> : null}
          <button
            className={isLogged ? "menuBtn loggedBtn" : "menuBtn logginBtn"}
          >
            {isLogged ? (
              <Link className="link" to="/oddaj-rzeczy">
                Oddaj Rzeczy
              </Link>
            ) : (
              <Link className="link" to="/logowanie">
                Zaloguj
              </Link>
            )}
          </button>
          <button
            className={isLogged ? "menuBtn logoutBtn" : "menuBtn registerBtn"}
          >
            {isLogged ? (
              <p className="logOut" onClick={() => this.logout()}>
                Wyloguj
              </p>
            ) : (
              <Link className="link" to="/rejestracja">
                Załóż konto
              </Link>
            )}
          </button>
        </div>
        <nav className="bottomMenu">
          <ul>
            <li>
              <NavLink className="link" to="/" activeClassName="active">
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

export default withRouter(NavigationComponent);
