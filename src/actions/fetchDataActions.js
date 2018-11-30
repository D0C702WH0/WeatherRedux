import { FETCH_DATA } from "./types";
import axios from "axios";

export const fetchData = value => dispatch => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const city = value;

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`;
  axios.get(url).then(res =>
    dispatch({
      type: FETCH_DATA,
      weatherInfo: res.data
    })
  );
};
