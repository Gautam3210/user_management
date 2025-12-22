import React from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { addUser } from '../store/store';

export const Card = ({user}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClickUser = (user) =>{

    dispatch(addUser(user))

    navigate(`/userInfo/${user.id}`)
  }
  return (
    
    <div className="user-card" onClick={()=> handleOnClickUser(user)}>
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
