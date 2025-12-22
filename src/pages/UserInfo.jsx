import React from "react";
import "./UserInfo.css";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const user = useSelector((state) => state.user);

  if (!user) return <h2>No user data found</h2>;

  return (
    <div className="profile-card">
      {/* Image */}
      <img src={user.image} alt={user.firstName} className="profile-img" />

      <h2 className="profile-name">
        {user.firstName} {user.lastName}
      </h2>

      <p className="profile-email">{user.email}</p>
      <p className="profile-phone">{user.phone}</p>

      {/* BASIC DETAILS */}
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

      {/* HAIR */}
      <div className="hair-box">
        <p><strong>Hair Color:</strong> {user?.hair?.color}</p>
        <p><strong>Hair Type:</strong> {user?.hair?.type}</p>
      </div>

      {/* ADDRESS */}
      <div className="section">
        <h3>Address</h3>
        <p>{user?.address?.address}</p>
        <p>{user?.address?.city}, {user?.address?.state} ({user?.address?.stateCode})</p>
        <p>Postal Code: {user?.address?.postalCode}</p>
      </div>

      {/* COMPANY */}
      <div className="section">
        <h3>Company</h3>
        <p><strong>Name:</strong> {user?.company?.name}</p>
        <p><strong>Department:</strong> {user?.company?.department}</p>
        <p><strong>Title:</strong> {user?.company?.title}</p>
        <p><strong>Company Address:</strong> {user?.company?.address?.address}, {user?.company?.address?.city}</p>
      </div>

      {/* BANK */}
      <div className="section">
        <h3>Bank</h3>
        <p><strong>Card No:</strong> {user?.bank?.cardNumber}</p>
        <p><strong>Type:</strong> {user?.bank?.cardType}</p>
        <p><strong>Expiry:</strong> {user?.bank?.cardExpire}</p>
        <p><strong>IBAN:</strong> {user?.bank?.iban}</p>
      </div>

      {/* CRYPTO */}
      <div className="section">
        <h3>Crypto</h3>
        <p><strong>Coin:</strong> {user?.crypto?.coin}</p>
        <p><strong>Wallet:</strong> {user?.crypto?.wallet}</p>
        <p><strong>Network:</strong> {user?.crypto?.network}</p>
      </div>
    </div>
  );
};

export default UserInfo;
