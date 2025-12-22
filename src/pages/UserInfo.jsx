import React from "react";
import "./UserInfo.css";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const user = useSelector((state) => state.user);

  if (!user) return <h2>No user data found</h2>;

  return (
    <div className="profile-card">
      {/* Image */}
      <img src={user.avatar} alt={user.first_name} className="profile-img" />

      <h2 className="profile-name">
        {user.first_name} {user.last_name}
      </h2>

      <p className="profile-email">{user.email}</p>

      {/* BASIC */}
      <div className="simple-details">
        <p><strong>User ID:</strong> {user.id}</p>
      </div>
    </div>
  );
};

export default UserInfo;
