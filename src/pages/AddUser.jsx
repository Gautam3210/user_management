import React, { useRef, useState } from "react";
import "./AddUser.css";

export const AddUser = () => {


  let firstNameRef = useRef()
  let lastNameRef = useRef()
  let emailRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Created:", user);
    alert("User Created Successfully!");

    // 👉 reset form if needed
    // setUser({ firstName: "", lastName: "", email: "", avatar: `https://i.pravatar.cc/150?u=${Date.now()}` });
  };

  return (
    <form className="create-user-form" onSubmit={handleSubmit}>
      <h2>Create User</h2>

      <div className="avatar-preview">
        <img src={user.avatar} alt="avatar" />
      </div>

      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          required
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Create User</button>
    </form>
  );
};

