import React, { Component } from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColums";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp";
import HomeContact from "./HomeContact";

class HomeComponent extends Component {
  state = {
    isLogged: false
  };
  render() {
    return (
      <div id="start">
        <HomeHeader state={this.state} />
        <HomeThreeColumns />
        <HomeSimpleSteps />
        <HomeAboutUs />
        <HomeWhoWeHelp />
        <HomeContact />
      </div>
    );
  }
}

export default HomeComponent;
