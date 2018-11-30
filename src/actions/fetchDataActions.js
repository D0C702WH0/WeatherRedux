import { FETCH_DATA } from "./types";
import axios from "axios";

export const fetchData = value => dispatch => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const city = value;

  if (city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`;

    axios
      .get(url)
      .then(res =>
        dispatch({
          type: FETCH_DATA,
          weatherInfo: res.data,
          isLoaded: true
        })
      )
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }
};
