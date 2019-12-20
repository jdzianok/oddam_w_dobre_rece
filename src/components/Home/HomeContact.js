import React, { Component } from "react";
import Decoration from "../../assets/Decoration.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";

class HomeContact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    nameError: false,
    emailError: false,
    messageError: false,
    messageSend: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleNameValidation = () => {
    const nameValidation = this.state.name.split(" ").length === 1;
    this.setState({ nameError: !nameValidation });
  };

  handleEmailValidation = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidation = re.test(String(this.state.email).toLowerCase());
    this.setState({ emailError: !emailValidation });
  };

  handleMessageValidation = () => {
    const messageValidation = this.state.message.length >= 120;
    this.setState({ messageError: !messageValidation });
  };

  send = () => {
    const { name, email, message } = this.state;
    const contactObj = {
      name,
      email,
      message
    };
    const url = "https://fer-api.coderslab.pl/v1/portfolio/contact";
    console.log(contactObj, this.state);
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactObj)
    })
      .then(response => {
        if (response.ok || response.status === 200) {
          this.setState({ messageSend: true });
          return console.log(response.json(), this.state);
        } else {
          throw new Error("Something is no yes");
        }
      })
      .catch(err => console.log("ups" + err));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { nameError, emailError, messageError } = this.state;

    if (!nameError && !emailError && !messageError) {
      this.send();
    }
    this.setState({
      name: "",
      email: "",
      message: "",
      nameError: false,
      emailError: false,
      messageError: false
    });
  };

  render() {
    return (
      <div id="formContact" className="contactContainer">
        <div className="contactBackground"></div>
        <div className="contactFormContainer">
          <div className="contactFormContent">
            <div className="contactHeader">
              <p>Skontaktuj się z nami</p>
              <img src={Decoration} alt="decor" />
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="formNameMail">
                <div className="formName">
                  <label>Wpisz swoje imię</label>
                  <input
                    type="text"
                    placeholder="Krzysztof"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    onBlur={() => this.handleNameValidation()}
                  />
                  {this.state.nameError && (
                    <p style={{ color: "red" }}>
                      Podane imię jest nieprawidłowe
                    </p>
                  )}
                </div>
                <div className="formMail">
                  <label>Wpisz swój email</label>
                  <input
                    type="email"
                    placeholder="abc@xyz.pl"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    onBlur={() => this.handleEmailValidation()}
                  />
                  {this.state.emailError && (
                    <p style={{ color: "red" }}>
                      Podany email jest nieprawidłowy
                    </p>
                  )}
                </div>
              </div>
              <div className="formTextarea">
                <label>Wpisz swoją wiadomość</label>
                <textarea
                  placeholder="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostrud exercitation.'"
                  name="message"
                  rows="2"
                  value={this.state.message}
                  onChange={this.handleChange}
                  onBlur={() => this.handleMessageValidation()}
                ></textarea>
                {this.state.messageError && (
                  <p style={{ color: "red" }}>
                    Wiadomość musi mieć conajmniej 120 znaków
                  </p>
                )}
              </div>
              <div className="formSubmit">
                <button className="formSubmitBtn" type="submit" value="Wyślij">
                  Wyślij
                </button>
              </div>
            </form>
          </div>
        </div>
        <footer>
          <div>
            <p>Copyright by Coders Lab</p>
          </div>
          <div className="mediaIcons">
            <img src={Facebook} alt="FacebookLogo" />
            <img src={Instagram} alt="InstagramLogo" />
          </div>
        </footer>
      </div>
    );
  }
}

export default HomeContact;
