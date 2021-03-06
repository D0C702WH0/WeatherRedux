import { FETCH_DATA } from "./types";
import axios from "axios";

export const fetchData = (cityValue, countryValue) => dispatch => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const city = cityValue;
  const country = countryValue;
  if (city && country) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}&lang=fr`;

    axios
      .get(url)
      .then(res =>
        dispatch({
          type: FETCH_DATA,
          weatherInfo: res.data,
          isLoaded: true,
          iconUrl: `https://openweathermap.org/img/w/${res.data.weather[0].icon}.png`
        })
      )
      .catch(error => {
        if (error.toString().includes(404)) {
          alert(
            `${city.toUpperCase()} ${country.toUpperCase()} n'est pas une ville connue de la base de données`
          );
        }
      });
  }
  else {
    alert("Veuillez indiquer une ville (ex: London) et un pays (ex: UK)")
  }
};
