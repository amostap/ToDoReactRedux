import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Grid className="App-intro">
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              test
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
