import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/fetchDataActions";
import DisplayWeather from "./DisplayWeather";

class Search extends Component {
  state = {
    city: "",
  };

  handleChange = e => {
    this.setState({
      city: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchData(this.state.city);
  };

  render() {
    const { city } = this.state;
    const { isLoaded } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={city}
            name="city"
            id="city"
          />
          <button>Search</button>
        </form>
        {isLoaded && <DisplayWeather />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoaded:state.weather.isLoaded
});

export default connect(
  mapStateToProps,
  { fetchData }
)(Search);
