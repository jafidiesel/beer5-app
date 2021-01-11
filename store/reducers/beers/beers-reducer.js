import types from "../../actions/beerActions/types";

const FETCH_STATUS = {
  NOT_LOADED: "NOT_LOADED",
  LOADING: "LOADING",
  LOADED: "LOADED",
  FAILED: "FAILED",
};

export const beerByIdReducer = (
  state = {
    data: [],
    status: FETCH_STATUS.NOT_LOADED,
    error: "",
  },
  action
) => {
  const { payload: { data, error } = {} } = action;
  switch (action.type) {
    case types.FETCH_BEERS_LIST_REQUEST:
      return {
        ...state,
        status: FETCH_STATUS.LOADING,
        error: null,
      };
    case types.FETCH_BEERS_LIST_SUCCESS:
      return {
        ...state,
        data: data,
        status: FETCH_STATUS.LOADED,
      };
    case types.FETCH_BEERS_LIST_FAILURE:
      return {
        ...state,
        status: FETCH_STATUS.FAILED,
        error,
      };

    default:
      return state;
  }
};
