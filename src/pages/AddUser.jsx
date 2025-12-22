import React, { useRef, useState } from "react";
import "./AddUser.css";
import { useDispatch } from "react-redux";
import { appendUserList } from "../store/store";
import { useNavigate } from "react-router-dom";

export const AddUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  let firstNameRef = useRef()
  let lastNameRef = useRef()
  let emailRef = useRef()
  let imageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()

    const file = imageRef.current.files[0]

    let userObject = {
      id: Date.now(),
      email: emailRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      avatar: URL.createObjectURL(file) 
    }
    console.log(userObject)
    dispatch(appendUserList(userObject))
    // alert("User Created Successfully!");
    navigate('/home')
  };

  return (
    <form className="create-user-form" onSubmit={handleSubmit}>
      <h2>Create User</h2>

      <div className="avatar-preview">
        {/* <img src={user.avatar} alt="avatar" /> */}
      </div>

      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          ref={firstNameRef}
          required
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          ref={lastNameRef}
          required
        />
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          ref={emailRef}
          required
        />
      </div>
      <div className="image-upload">
        <input
        type="file"
        accept="image/*"
        ref={imageRef}
      />
      </div>
      <button type="submit">Create User</button>
    </form>
    
  );
};

