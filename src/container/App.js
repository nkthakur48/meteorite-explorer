import React, { Component } from "react";
import { Row, Col } from "antd";
import "./App.css";
import Header from "../components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row className="titleRow">
          <Col span={24}>
            <Header />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
