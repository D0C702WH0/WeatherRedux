import React, { Component } from "react";
import { fetchData } from "../actions/fetchDataActions";
import { connect } from "react-redux";

class DisplayWeather extends Component {
  render() {
    const { weatherInfo, iconUrl } = this.props;
    return (
      <div>
        <h1>
          {weatherInfo.name}({weatherInfo.sys.country})
        </h1>
        <p>{weatherInfo.weather[0].description}</p>
        <img src={iconUrl} alt="weather icon" />
        <p>{Math.ceil(weatherInfo.main.temp)}°</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weatherInfo: state.weather.weatherInfo,
  iconUrl: state.weather.iconUrl
});

export default connect(
  mapStateToProps,
  { fetchData }
)(DisplayWeather);
