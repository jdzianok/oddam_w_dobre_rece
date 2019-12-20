import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/NavigationComponent";
import Decoration from "../../assets/Decoration.svg";

class LogoutComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="loginRegisterOut">
          <Navigation />
        </div>
        <div className="regLogForm">
          <div>
            <p className="regHeader">Wylogowanie nastąpiło pomyślnie!</p>
            <img src={Decoration} alt="decor" />
            <br />
            <button className="logoutBtn">
              <Link className="link" to="/">
                Strona główna
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default LogoutComponent;
