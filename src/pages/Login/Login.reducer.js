const initialState = {
  userData: {},
  logged: false
}

const userReducer = (state = initialState, action) => {
  const { type, payload, data } = action;
  switch (type) {
    case SET_USER:
      state.userData = data;
      state.logged = payload;
      return state;
    default:
      return state
  }
}


export const SET_USER = 'SET_USER';

export default userReducer;

