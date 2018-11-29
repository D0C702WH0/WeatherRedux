import { combineReducers } from 'redux';
import fetchReducer from './myReducer';


export default combineReducers({
  weatherInfo: fetchReducer,
  //Add here other state names for each reducer
});
