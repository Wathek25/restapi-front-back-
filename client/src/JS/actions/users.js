import axios from "axios";
import {
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_LOAD,
  GET_ALL_USERS,
  GET_USER,
} from "../constants/users";

// get all users
export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_LOAD });
  try {
    let result = await axios.get("/api/user");
    console.log(result);

    dispatch({ type: GET_ALL_USERS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
  }
};

// get one user
export const getUser = (id) => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_LOAD });
  try {
    let res = await axios.get(`/api/user/${id}`);
    dispatch({ type: GET_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
  }
};

//add user
export const addUser = (user, history) => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_LOAD });
  try {
    await axios.post("/api/user/", user);
    dispatch(getAllUsers());
    history.push("/users");
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
  }
};

//delete user
export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_LOAD });
  try {
    await axios.delete(`/api/user/${id}`);
    dispatch(getAllUsers());
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
  }
};

//edit user
export const editUser = (id, user, history) => async (dispatch) => {
  try {
    await axios.put(`/api/user/${id}`, user);
    // dispatch(getAllUsers());
    // history.push("/userList");
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
  }
};
