import React, { Component } from "react";
import logo from "../src/images/logo.png";
import "./App.css";
import MainContainer from "./components/MainContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Weather Redux</h1>
          <p>An api based web app using React Redux</p>
        </header>
        <MainContainer />
      </div>
    );
  }
}

export default App;
