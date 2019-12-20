import React, { Component } from "react";
import { Link } from "react-router-dom";
import Decoration from "../../assets/Decoration.svg";
import Icon1 from "../../assets/Icon-1.svg";
import Icon2 from "../../assets/Icon-2.svg";
import Icon3 from "../../assets/Icon-3.svg";
import Icon4 from "../../assets/Icon-4.svg";

class HomeSimpleSteps extends Component {
  state = {};
  render() {
    return (
      <div id="simpleSteps" className="simpleStepsContainer">
        <div className="simpleHeader">
          <p>Wystarczą 4 proste kroki</p>
          <img src={Decoration} alt="decor" />
        </div>
        <div className="simpleMain">
          <div className="simpleContent">
            <div className="simpleStep">
              <img src={Icon1} alt="shirt" />
              <p className="simpleTitle">Wybierz rzeczy</p>
              <hr />
              <p className="simpleSubtitle">
                ubrania, zabawki,
                <br /> sprzęt i inne
              </p>
            </div>
            <div className="simpleStep">
              <img src={Icon2} alt="bag" />
              <p className="simpleTitle">Spakuj je</p>
              <hr />
              <p className="simpleSubtitle">
                skorzystaj z worków <br />
                na śmieci
              </p>
            </div>
            <div className="simpleStep">
              <img src={Icon3} alt="magnifier" />
              <p className="simpleTitle">
                Zdecyduj komu <br /> chcesz pomóc
              </p>
              <hr />
              <p className="simpleSubtitle">
                wybierz zaufane <br /> miejce
              </p>
            </div>
            <div className="simpleStep">
              <img src={Icon4} alt="arrows" />
              <p className="simpleTitle">Zamów kuriera</p>
              <hr />
              <p className="simpleSubtitle">
                kurier przyjedzie <br /> w dogodnym terminie
              </p>
            </div>
          </div>
        </div>
        <div className="simpleButtonContainer">
          <button className="simpleBtn">
            <Link className="link" to="/logowanie">
              ODDAJ <br /> RZECZY{" "}
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default HomeSimpleSteps;
