import { combineReducers } from "redux";
import { beersReducer } from "./beers/beers-reducer";
import { beerByIdReducer } from "./beers/beer-by-id-reducer";


const allReducers = combineReducers({
  beers: beersReducer,
  beerByIdReducer,
});

const reducers = (state, action) => {
  return allReducers(state, action);
};

export default reducers;
