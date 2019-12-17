import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/LoginComponent";
import Register from "./components/Register/RegisterComponent";
import Logout from "./components/Logout/LogoutComponent";
import Form from "./components/Form/FormComponent";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
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
