import React, { Component } from "react";
import { Input } from "antd";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };
  render() {
    return (
      <Input.Search
        className="searchBar"
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
      />
    );
  }
}

export default SearchBar;
