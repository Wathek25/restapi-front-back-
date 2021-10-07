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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"
            alt="Username"
          />
        </div>
        <div className="card-body">
          <div>
            <span className="Student-name">
              {user.lastName} <b>{user.firstName}</b>
              {/* <span className="badge">PRO</span> */}
            </span>
            <span className="username">
              <b>Email: </b>
              {user.email}
            </span>
            <span className="username">
              <b>Age: </b>
              {user.age}
            </span>
            <span className="username">
              <b>Phone: </b>
              {user.phone}
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
