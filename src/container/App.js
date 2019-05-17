import React, { Component } from "react";
import { Row, Col } from "antd";
import "./App.css";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row className="titleRow">
          <Col span={24}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 8, offset: 8 }} xs={{ span: 22, offset: 1 }}>
            <SearchBar />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
