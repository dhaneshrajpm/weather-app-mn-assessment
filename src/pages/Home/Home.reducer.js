const initialState = {
  weatherData: {},
  loading: false
}

const weatherReducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_WEATHER_DATA:
      state.weatherData = data;
      return state;
    case SET_LOADER:
      state.loading = data;
      return state
    default:
      return state
  }
}

export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
export const SET_LOADER = 'SET_LOADER';

export default weatherReducer;
