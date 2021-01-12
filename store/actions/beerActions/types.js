import { createActionTypes } from "../../../utils";
// Example Actions

export default {
  ...createActionTypes("BEERS", "FETCH_BEERS_LIST"),
  ...createActionTypes("BEERS", "FETCH_BEER_BY_ID"),

};
