import * as types from "../actions/types";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  list: [],
  currentId: "",
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case types.UPDATE_ID:
      return {
        ...state,
        currentId: action.payload,
      };
    case types.UPDATE_DATA:
      return {
        ...state,
        list: action.payload,
      };
    case types.UPDATE_CURRENT_DATA:
      return {
        ...state,
        currentData: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
