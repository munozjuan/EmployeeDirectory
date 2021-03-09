import React from "react";
import Jumbotron from "./components/Jumbotron";
import API from "./utils/API";
import Table from "./components/Table";
import Search from "./components/Search";

class App extends React.Component {
  state = {
    results: [],
    search: ""
  };

  componentDidMount() {
    this.searchEmployees();
  }

  refreshPage() {
    window.location.reload(false);
  }

  searchEmployees = () => {
    API.search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const newResult = this.state.results.filter(
      (result) =>
        result.location.country.toLowerCase() ===
        this.state.search.toLowerCase() ||
        result.name.first.toLowerCase() ===
        this.state.search.toLocaleLowerCase()
    );
    if (this.state.search !== "") {
      this.setState({ results: newResult, search: "" });
    }
  };
  
  sortColumn = (event) => {
    event.preventDefault();
    console.log(this.state.results)
    const sortedResult = this.state.results.sort(function (a, b) {
      let firstComp = '';
      let secondComp = '';
      switch (event.target.name) {
        case "first":
          firstComp = a.name.first
          secondComp = b.name.first
          break;
        case "last":
          firstComp = a.name.last
          secondComp = b.name.last
          break;
        case "email":
          firstComp = a.email
          secondComp = b.email
          break;
        case "location":
          firstComp = a.location.country
          secondComp = b.location.country
          break;
        default:
          break;
      }
      
      if (firstComp < secondComp) {
        return -1;
      }
      if (firstComp > secondComp) {
        return 1;
      }
      return 0;
    });

    this.setState({ results: sortedResult });
  };

  render() {
    return (
      <div className="container">
        <Jumbotron/>

        <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          refreshPage={this.refreshPage}
        />
        <Table
          results={this.state.results}
          sortColumn={this.sortColumn}
        />
      </div>
    );
  }
}
export default App;
