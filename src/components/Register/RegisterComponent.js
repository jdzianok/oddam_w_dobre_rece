import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/NavigationComponent";
import Decoration from "../../assets/Decoration.svg";
const firebase = require("firebase");

class RegisterComponent extends Component {
  state = {
    email: null,
    password: null,
    passwordConfirmation: null,
    singupError: ""
  };

  formIsValid = () => this.state.password === this.state.passwordConfirmation;

  submitRegister = e => {
    e.preventDefault();
    if (!this.formIsValid()) {
      this.setState({
        registerError: "Passwords do not match!"
      });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(authResponse => {
        const userObj = {
          email: authResponse.user.email
        };

        firebase
          .firestore()
          .collection("users")
          .doc(this.state.email)
          .set(userObj)
          .then(() => {
            this.props.history.push("/");
          })
          .catch(dbError => {
            console.log(dbError);
            this.setState({ registerError: "Faild to add user" });
          });
      })
      .catch(authError => {
        console.log(authError);
        this.setState({ registerError: "Faild to add user" });
      });
  };

  userTyping = (whichInput, event) => {
    switch (whichInput) {
      case "email":
        this.setState({ email: event.target.value });
        break;

      case "password":
        this.setState({ password: event.target.value });
        break;

      case "passwordConfirmation":
        this.setState({ passwordConfirmation: event.target.value });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <>
        <div className="loginRegisterOut">
          <Navigation />
        </div>
        <div className="regLogForm">
          <div>
            <p className="regHeader">Załóż konto</p>
            <img src={Decoration} alt="decor" />
          </div>
          <form className="regForm" onSubmit={e => this.submitRegister(e)}>
            <div className="formContent">
              <div>
                <label htmlFor="register-email-input">Email</label>
                <input
                  id="register-email-input"
                  type="email"
                  autoFocus
                  autoComplete="email"
                  onChange={e => this.userTyping("email", e)}
                />
              </div>
              <div>
                <label htmlFor="register-password-input">Hasło</label>
                <input
                  id="register-password-input"
                  type="password"
                  onChange={e => this.userTyping("password", e)}
                />
              </div>
              <div>
                <label htmlFor="register-password-confirmation-input">
                  Powtórz hasło
                </label>
                <input
                  id="register-password-confirmation-input"
                  type="password"
                  onChange={e => this.userTyping("passwordConfirmation", e)}
                />
              </div>
              {this.state.registerError ? (
                <p>{this.state.registerError}</p>
              ) : null}
            </div>
            <div className="formSubmit">
              <button>
                <Link className="link" to="/logowanie">
                  Zaloguj się
                </Link>
              </button>
              <button
                type="submit"
                onClick={e => this.submitRegister(e)}
                className="submitBtn"
              >
                Załóż konto
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default RegisterComponent;
