import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/NavigationComponent";
import Decoration from "../../assets/Decoration.svg";

class HomeHeader extends Component {
  state = {};
  render() {
    return (
      <section className="homeHeader">
        <div className="heroImg"></div>
        <div className="navContainer">
          <Navigation isLogged={this.props.isLogged} />
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
            <div className="buttonContainer">
              <button>
                <Link className="link" to="/logowanie">
                  ODDAJ <br /> RZECZY{" "}
                </Link>
              </button>
              <button>
                <Link className="link" to="/logowanie">
                  ZORGANIZUJ <br /> ZBIÓRKĘ{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeHeader;
