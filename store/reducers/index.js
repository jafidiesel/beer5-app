import { combineReducers } from "redux";
// import { userReducer } from "./user/user-reducer";

const allReducers = combineReducers({
  // user: userReducer,
});

const reducers = (state, action) => {
  return allReducers(state, action);
};

export default reducers;
