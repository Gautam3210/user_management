import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/store";

export const Card = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClickUser = (user) => {
    dispatch(addUser(user));
    navigate(`/userInfo/${user.id}`);
  };

  return (
    <div className="user-card" onClick={() => handleOnClickUser(user)}>
      <img src={user.avatar} alt={user.first_name} className="user-img" />

      <div className="user-details">
        <h2 className="user-name">
          {user.first_name} {user.last_name}
        </h2>

        <p className="user-email">{user.email}</p>
      </div>
    </div>
  );
};
