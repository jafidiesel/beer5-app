import types from "./types";
import { beerService } from "../../../services/beerService";


const getBeersListRequest = () => {
  return {
    type: types.FETCH_BEERS_LIST_REQUEST,
  };
};
const getBeersListSuccess = (data) => {
  return {
    type: types.FETCH_BEERS_LIST_SUCCESS,
    payload: data,
  };
};
const getBeersListFailure = (error) => {
  return {
    type: types.FETCH_BEERS_LIST_FAILURE,
    payload: error,
  };
};
export const getBeersList = () => (dispatch) => {
  dispatch(getBeersListRequest());
  return beerService
    .getBeers()
    .then((data) => dispatch(getBeersListSuccess(data)))
    .catch((error) => dispatch(getBeersListFailure(error)));
};



const getBeerByIdRequest = () => {
  return {
    type: types.FETCH_BEER_BY_ID_REQUEST,
  }
};
const getBeerByIdSuccess = (data) => {
  return {
    type: types.FETCH_BEER_BY_ID_SUCCESS,
    payload: data,
  };
};
const getBeerByIdFailure = (error) => {
  return {
    type: types.FETCH_BEER_BY_ID_FAILURE,
    payload: error,
  };
};
export const getBeerById = (id) => (dispatch) => {
  dispatch(getBeerByIdRequest());
  return beerService
    .getBeerById(id)
    .then((data) => dispatch(getBeerByIdSuccess(data)))
    .catch((error) => dispatch(getBeerByIdFailure(error)));
};