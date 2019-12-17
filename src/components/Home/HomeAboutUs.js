import React, { Component } from "react";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";

class HomeAboutUs extends Component {
  state = {};
  render() {
    return (
      <div id="aboutUs" className="aboutContainer">
        <div className="about">
          <div className="aboutContent">
            <p className="aboutTitle">O nas</p>
            <img src={Decoration} alt="decor" />
            <p className="aboutDescription">
              Nori grape silver beet broccoli kombu beet greens fava bean potato
              quandong celery. Bunya nuts black-eyed pea prairie turnip leek
              lentil turnip greens parsnip.
            </p>

            <img className="aboutSignature" src={Signature} alt="signature" />
          </div>
        </div>
        <div className="aboutPeople"></div>
      </div>
    );
  }
}

export default HomeAboutUs;
