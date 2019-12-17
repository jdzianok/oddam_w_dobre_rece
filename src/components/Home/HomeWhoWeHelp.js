import React, { Component } from "react";
import Decoration from "../../assets/Decoration.svg";

class HomeWhoWeHelp extends Component {
  state = {
    category: "foundations",
    itemsPerPage: 3,
    current: 0,
    foundations: null
  };

  componentDidMount() {
    this.fetchData("foundations");
  }

  get items() {
    const { current, itemsPerPage, foundations } = this.state;
    const index = current * itemsPerPage;
    const offset = index + itemsPerPage;

    if (foundations) {
      return foundations.slice(index, offset);
    }

    return [];
  }

  get pages() {
    const { foundations, itemsPerPage } = this.state;
    if (!foundations) return null;

    const ammount = Math.ceil(foundations.length / itemsPerPage);
    const result = [];
    for (let i = 0; i < ammount; i++) {
      result.push(
        <li
          className={this.state.current === i ? "active" : null}
          key={i}
          onClick={this.changePage(i)}
        >
          {i + 1}
        </li>
      );
    }

    return result.length > 1 ? result : null;
  }

  changePage = current => () => {
    this.setState({
      current
    });
  };

  fetchData = name => {
    fetch(`http://localhost:3000/${name}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          foundations: data,
          current: 0,
          category: name
        })
      )
      .catch(err => {
        console.log(err);
      });
  };

  handleCategory = name => () => {
    this.fetchData(name);
  };

  render() {
    const renderItems = this.items.map(item => {
      return (
        <div className="pagination" key={item.id}>
          <div className="paginationContent">
            <div className="paginationLeft">
              <h4 className="paginationHeader">{item.label}</h4>
              <p className="paginationDescription">{item.items[0].mission}</p>
            </div>
            <div className="paginationRight">
              <p className="paginationTags">{item.items[0].description}</p>
            </div>
          </div>
          {item.id % 3 === 0 ? null : <hr />}
        </div>
      );
    });
    return (
      <div id="whoWeHelp" className="whoHelpContainer">
        <div className="whoHelpContent">
          <p className="whoHelpTitle">Komu pomagamy?</p>
          <img src={Decoration} alt="decor" />
          <div className="whoHelpButtons">
            <button
              className={
                this.state.category === "foundations"
                  ? "helpBtn active"
                  : "helpBtn"
              }
              onClick={this.handleCategory("foundations")}
            >
              Fundacjom
            </button>
            <button
              className={
                this.state.category === "organisations"
                  ? "helpBtn active"
                  : "helpBtn"
              }
              onClick={this.handleCategory("organisations")}
            >
              Organizacjom <br /> pozarządowym
            </button>
            <button
              className={
                this.state.category === "locals" ? "helpBtn active" : "helpBtn"
              }
              onClick={this.handleCategory("locals")}
            >
              Lokalnym <br /> zbiórkom
            </button>
          </div>
          <div className="whoHelpDescriptionContainer">
            <p className="whoHelpDescription">
              W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
              którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu
              pomagają i czego potrzebują.
            </p>
          </div>
        </div>
        <div className="paginationContainer">{renderItems}</div>
        <ul className="pagesNumberContainer">{this.pages}</ul>
      </div>
    );
  }
}

export default HomeWhoWeHelp;
