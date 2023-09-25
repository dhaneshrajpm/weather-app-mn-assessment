import { combineReducers, legacy_createStore } from "redux";
import weatherReducer from "../pages/Home/Home.reducer";
import userReducer from "../pages/Login/Login.reducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  user: userReducer
})

export const store = legacy_createStore(rootReducer)