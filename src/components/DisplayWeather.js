import React, { Component } from "react";
import { fetchData } from "../actions/fetchDataActions";
import { connect } from "react-redux";

class DisplayWeather extends Component {
  render() {
    const { weatherInfo } = this.props;
    return (
      <div>
        <h1>{weatherInfo.name}</h1>
        <p>{weatherInfo.weather[0].description}</p>
        <p>{weatherInfo.main.temp}°</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weatherInfo: state.weather.weatherInfo
});

export default connect(
  mapStateToProps,
  { fetchData }
)(DisplayWeather);
