import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./UserCard.css";
import { useDispatch } from "react-redux";
import { deleteUser, getUser } from "../JS/actions/users";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    let result = window.confirm("are you sure to delete this ?");
    if (result) {
      dispatch(deleteUser(user._id));
    }
  };
  console.log(user);
  return (
    <div className="container">
      <div className="card">
        <div className="card-head">
          <img
            className="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhhklLpQnJpmdcRWm07dxiiIp22D9ZaFlhzNF5S7EMPxEinocq&usqp=CAU"
            alt="Username"
          />
        </div>
        <div className="card-body">
          <div>
            <span className="Student-name">
              {user.lastName} <b>{user.firstName || ""}</b>
              <span className="badge">PRO</span>
            </span>
            <span className="username">@{user.email}</span>
          </div>
          <div className="student-infos">
            <span className="Student-description">
              <p>{user.phone}</p>
            </span>
          </div>
          <div className="btn-card">
            <Link to={`/editUser/${user._id}`}>
              <EditIcon onClick={() => dispatch(getUser(user._id))} />
            </Link>
            <DeleteIcon onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
