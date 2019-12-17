import React, { Component } from "react";
import Decoration from "../../assets/Decoration.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";

class HomeContact extends Component {
  state = {};
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
            <form>
              <div className="formNameMail">
                <div className="formName">
                  <label>Wpisz swoje imię</label>
                  <input type="text" placeholder="Krzysztof" name="name" />
                </div>
                <div className="formMail">
                  <label>Wpisz swój email</label>
                  <input type="email" placeholder="abc@xyz.pl" name="email" />
                </div>
              </div>
              <div className="formTextarea">
                <label>Wpisz swoją wiadomość</label>
                <textarea
                  placeholder="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostrud exercitation.'"
                  name="message"
                  rows="2"
                ></textarea>
              </div>
              <div className="formSubmit">
                <button className="formSubmitBtn">Wyślij</button>
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
