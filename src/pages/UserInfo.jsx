import React from "react";
import "./UserInfo.css";

const UserInfo = ({ user }) => {
    
  return (
    <div className="profile-card">
      <img src={user.image} alt={user.firstName} className="profile-img" />

      <h2 className="profile-name">
        {user.firstName} {user.lastName}
      </h2>

      <p className="profile-email">{user.email}</p>
      <p className="profile-phone">{user.phone}</p>

      <div className="info-row">
        <span><strong>Username:</strong> {user.username}</span>
        <span><strong>Gender:</strong> {user.gender}</span>
      </div>

      <div className="info-row">
        <span><strong>Age:</strong> {user.age}</span>
        <span><strong>DOB:</strong> {user.birthDate}</span>
      </div>

      <div className="info-row">
        <span><strong>Blood Group:</strong> {user.bloodGroup}</span>
        <span><strong>Eye Color:</strong> {user.eyeColor}</span>
      </div>

      <div className="info-row">
        <span><strong>Height:</strong> {user.height} cm</span>
        <span><strong>Weight:</strong> {user.weight} kg</span>
      </div>

      <div className="hair-box">
        <p><strong>Hair Color:</strong> {user.hair.color}</p>
        <p><strong>Hair Type:</strong> {user.hair.type}</p>
      </div>
    </div>
  );
};

export default UserInfo;
