import React, { Component } from "react";
import List from "./List";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "All"
    };
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleType = (e) => {
    this.setState({ type: e.target.value });
  };

  filterItems = (item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(this.state.search.toLowerCase());

    const matchesType =
      this.state.type === "All" || item.type === this.state.type;

    return matchesSearch && matchesType;
  };

  render() {
    const filtered = this.props.items.filter(this.filterItems);

    return (
      <div>
        <h2>Filtered List</h2>

        <input
          type="text"
          placeholder="Search..."
          onChange={this.handleSearch}
        />

        <br /><br />

        <select onChange={this.handleType}>
          <option value="All">All</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
        </select>

        <List items={filtered} />
      </div>
    );
  }
}

export default FilteredList;