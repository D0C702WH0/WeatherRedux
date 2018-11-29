import { FETCH_DATA } from "./types";
import axios from "axios";

const apiKey = process.env.API_KEY;
const url = `http://api.openweathermap.org/data/2.5/weather?q=${
  e.target.value
}&units=metric&appid=${apiKey}&lang=fr`;
export const fetchData = () => dispatch => {
  axios.get(url).then(res =>
    dispatch({
      type: FETCH_DATA,
      weatherInfo: res.data
    })
  );
};
