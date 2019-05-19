import React, { Component } from "react";
import { Table } from "antd";

class ResultTable extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Id", dataIndex: "id", key: "id" },
      { title: "NameType", dataIndex: "nametype", key: "nametype" },
      { title: "RecClass", dataIndex: "recclass", key: "recclass" },
      { title: "Mass (g)", dataIndex: "mass", key: "mass" },
      { title: "Fall", dataIndex: "fall", key: "fall" },
      { title: "Year", dataIndex: "year", key: "year" },
      { title: "Latitude", dataIndex: "geolocation.latitude", key: "latitude" },
      {
        title: "Longitude",
        dataIndex: "geolocation.longitude",
        key: "longitude"
      }
    ];
  }

  render() {
    return (
      <Table
        className="resultsTable"
        columns={this.columns}
        dataSource={this.props.searchResults}
        rowKey={row => row.id}
      />
    );
  }
}

export default ResultTable;