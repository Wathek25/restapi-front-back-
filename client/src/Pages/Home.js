import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome, To our Users List Home Page</h2>
      <p>
        If You want to check List of available users please check this{" "}
        <Link to="users">link</Link>
      </p>

      <p>
        Or if You want to add new user you can check this{" "}
        <Link to="addUser">link</Link>
      </p>
    </div>
  );
};

export default Home;
