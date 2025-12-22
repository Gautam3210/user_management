import React, { use, useEffect, useState } from 'react'
import "./Cards.css";
import { Card } from './card'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { addUsersList } from '../store/store';



export const Cards = () => {
    
  let userLists = useSelector((state)=> state.userList)
  console.log(userLists)

    
    
  return (
    <div className="users-grid">
        {userLists.map(user => <Card key={user.id} user={user} />)}   
    </div>
  )
}
