import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/HomeComponent";
import Login from "./components/Login/LoginComponent";
import Register from "./components/Register/RegisterComponent";
import Logout from "./components/Logout/LogoutComponent";
import Form from "./components/Form/FormComponent";

const firebase = require("firebase");

class App extends Component {
  state = {
    user: null
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) return;
      else {
        this.setState({ user: user.email });
      }
    });
  };
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home isLogged={this.state.user} />}
            />
            <Route path="/rejestracja" component={Register} />
            <Route path="/logowanie" component={Login} />
            <Route path="/wylogowano" component={Logout} />
            <Route path="/oddaj-rzeczy" component={Form} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
