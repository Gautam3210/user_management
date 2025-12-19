import React from 'react'
import "./Card.css"

export const Card = ({user}) => {
  return (
    
    <div className="user-card">
      <img src={user.image} alt={user.firstName} className="user-img" />

      <div className="user-details">
        <h2 className="user-name">
          {user.firstName} {user.lastName}
        </h2>
        <p className="user-email">{user.email}</p>
        <p className="user-phone">{user.phone}</p>

        <div className="user-extra">
          <span className="badge">{user.gender}</span>
          <span className="badge">Age: {user.age}</span>
          <span className="badge">Username: {user.username}</span>
        </div>
      </div>
    </div>
  )
}
