import * as types from "./types";

export const updateEmail = (data) => {
  return {
    type: types.UPDATE_EMAIL,
    payload: data,
  };
};
export const updateId = (data) => {
  return {
    type: types.UPDATE_ID,
    payload: data,
  };
};

export const updateData = (data) => {
  return {
    type: types.UPDATE_DATA,
    payload: data,
  };
};

export const updateCurrentData = (data) => {
  return {
    type: types.UPDATE_CURRENT_DATA,
    payload: data,
  };
};
