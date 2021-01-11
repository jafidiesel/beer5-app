import types from "../../actions/exampleActions/types";

const NOT_LOADED = "NOT_LOADED";

export const clientList = (
    state = {
        data: [],
        status: NOT_LOADED,
        error: "",
    },
    action
) => {
    const { payload: { data, error } = {} } = action;
    switch (action.type) {
        case types.FETCH_CLIENT_LIST_REQUEST:
            return {
                ...state,
                status: FETCH_STATUS.LOADING,
                error: null,
            };
        case types.FETCH_CLIENT_LIST_SUCCESS:
            return {
                ...state,
                data: data,
                status: FETCH_STATUS.LOADED,
            };
        case types.FETCH_CLIENT_LIST_FAILURE:
            return {
                ...state,
                status: FETCH_STATUS.FAILED,
                error,
            };

        default:
            return state;
    }
};