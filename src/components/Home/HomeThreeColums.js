import React, { Component } from "react";

class HomeThreeColumns extends Component {
  state = {};
  render() {
    return (
      <div className="threeColContainer">
        <div className="threeColBox">
          <p className="threeColNumber">10</p>
          <p className="threeColTitle">oddanych worków</p>
          <p className="threeColSubtitle">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="threeColBox">
          <p className="threeColNumber">5</p>
          <p className="threeColTitle">wspartych organizacji</p>
          <p className="threeColSubtitle">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
        <div className="threeColBox">
          <p className="threeColNumber">7</p>
          <p className="threeColTitle">zorganizowanych zbiórek</p>
          <p className="threeColSubtitle">
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </p>
        </div>
      </div>
    );
  }
}

export default HomeThreeColumns;
