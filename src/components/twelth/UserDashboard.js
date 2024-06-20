import React from "react";
import { useLocation } from "react-router-dom";

function UserDashBoard() {
  let { state } = useLocation();

  return (
    <div className="vh-100 bg-primary text-white d-flex justify-content-center align-items-center">
        <p>
          Welcome ,<span className="text-danger">{state.username}</span>
        </p>
        <p className="lead">{state.email}</p>
    </div>
  );
}

export default UserDashBoard;