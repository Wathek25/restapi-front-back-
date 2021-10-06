import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../Components/UserCard";
import { getAllUsers } from "../JS/actions/users";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const UsersList = () => {
  const users = useSelector((state) => state.userReducer.users);
  const isLoad = useSelector((state) => state.userReducer.isLoad);
  const isError = useSelector((state) => state.userReducer.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      {isLoad ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : isError ? (
        <h4>Can not get the data</h4>
      ) : !users.length ? (
        <h4>There is no user to show</h4>
      ) : (
        <div className="UserList">
          {users.map((el) => (
            <UserCard user={el} key={el._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersList;
