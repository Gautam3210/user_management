import React, { use, useEffect, useState } from 'react'
import "./Cards.css";
import { Card } from './card'
import axios from "axios"



export const Cards = () => {
    let [userLists, setUserLists] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            let {data} = await axios.get("https://dummyjson.com/users")
            setUserLists(data.users)
            console.log(data.users)
        }
        fetchData();
    },[])
    
  return (
    <div className="users-grid">
        {userLists.map(user => <Card key={user.id} user={user} />)}   
    </div>
  )
}
