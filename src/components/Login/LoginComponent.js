import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Navigation from "../Navigation/NavigationComponent";
import Decoration from "../../assets/Decoration.svg";
const firebase = require("firebase");

class LoginComponent extends Component {
  state = {
    email: null,
    password: null,
    loginError: ""
  };

  userTyping = event => {
    switch (event.target.id) {
      case "login-email-input":
        this.setState({ email: event.target.value });
        break;

      case "login-password-input":
        this.setState({ password: event.target.value });
        break;

      default:
        break;
    }
  };
  submitLogin = e => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          loginError: "Server error"
        });
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <div className="loginRegisterOut">
          <Navigation />
        </div>
        <div className="regLogForm">
          <div>
            <p className="regHeader">Zaloguj się</p>
            <img src={Decoration} alt="decor" />
          </div>
          <form className="regForm" onSubmit={e => this.submitLogin(e)}>
            <div className="formContent">
              <div>
                <label htmlFor="login-email-input">Email</label>
                <input
                  id="login-email-input"
                  type="email"
                  autoFocus
                  autoComplete="email"
                  onChange={this.userTyping}
                />
              </div>
              <div>
                <label htmlFor="login-password-input">Hasło</label>
                <input
                  id="login-password-input"
                  type="password"
                  onChange={this.userTyping}
                />
              </div>
              {this.state.loginError ? <p>{this.state.loginError}</p> : null}
            </div>
            <div className="formSubmit">
              <button>
                <Link className="link" to="/rejestracja">
                  Załóż konto
                </Link>
              </button>
              <button type="submit" className="submitBtn">
                Zaloguj się
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(LoginComponent);
