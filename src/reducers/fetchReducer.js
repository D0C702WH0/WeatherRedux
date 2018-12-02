import { FETCH_DATA } from "../actions/types";

const initialState = {
  weatherInfo: [],
  isLoaded: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        weatherInfo: action.weatherInfo,
        isLoaded: action.isLoaded
      };
    default: {
      return state;
    }
  }
}
