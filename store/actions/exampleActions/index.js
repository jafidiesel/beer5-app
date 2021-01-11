import types from "./types";

// EJEMPLO DE IMPORTAR SERVICE
// import { fetchContactsList } from "../../services/clientsService";

const fetchContactsListRequest = () => {
  return {
    type: types.FETCH_CONTACT_LIST_REQUEST,
  };
};
const fetchContactsListSuccess = (data) => {
  return {
    type: types.FETCH_CONTACT_LIST_SUCCESS,
    payload: data,
  };
};
const fetchContactsListFailure = (error) => {
  return {
    type: types.FETCH_CONTACT_LIST_FAILURE,
    payload: error,
  };
};
export const fetchContactsList = (companyId) => (dispatch) => {
  dispatch(fetchContactsListRequest());
  return clientsService
    .fetchContactsList(companyId)
    .then((data) => dispatch(fetchContactsListSuccess(data)))
    .catch((error) => dispatch(fetchContactsListFailure(error)));
};
