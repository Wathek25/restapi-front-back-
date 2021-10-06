import {
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_LOAD,
  GET_ALL_USERS,
  GET_USER,
} from "../constants/users";

const initialState = {
  users: [],
  isLoad: false,
  isError: false,
  user: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS_LOAD:
      return { ...state, isLoad: true };
    case GET_ALL_USERS:
      return { ...state, users: payload.users, isLoad: false, isError: false };
    case GET_USER:
      return { ...state, user: payload.user, isLoad: false, isError: false };
    case GET_ALL_USERS_FAIL:
      return { ...state, isLoad: false, isError: true };
    default:
      return state;
  }
};

export default userReducer;
