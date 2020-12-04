import React from "react";
import "./App.css";
import Search from "./Search/Search";
import Results from "./Results/Results";

export default class App extends React.Component {
  state = {
    results: [],
    q: "horror",
    printType: "all",
    filter: "",
  };

  updateState = (key, value) => {
    this.setState({ [key]: value });
  };

  search = (e) => {
    e.preventDefault();

    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}&printType=${this.state.printType}`;

    if (this.state.filter !== "") {
      url += `&filter={this.state.filter}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ results: res.items ? res.items : [] }));
  };

  render() {
    return (
      <div className='App'>
        <Search
          {...this.State}
          search={this.search}
          updateState={this.updateState}
        />
        <hr />
        <Results {...this.state} />
      </div>
    );
  }
}
