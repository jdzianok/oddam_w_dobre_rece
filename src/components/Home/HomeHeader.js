import React, { Component } from "react";
import Navigation from "../Navigation/NavigationComponent";
import Decoration from "../../assets/Decoration.svg";

class HomeHeader extends Component {
  state = {};
  render() {
    return (
      <section className="homeHeader">
        <div className="heroImg"></div>
        <div className="navContainer">
          <Navigation state={this.props} />
          <div className="homeIntro">
            <div>
              <p>Zacznij pomagać!</p>
            </div>
            <div>
              <p>Oddaj niechciane rzeczy w zaufane ręce</p>
            </div>
            <div>
              <img src={Decoration} alt="decor" />
            </div>
            <div>
              <button>
                ODDAJ
                <br />
                RZECZY
              </button>
              <button>
                ZORGANIZUJ
                <br />
                ZBIÓRKĘ
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeHeader;
