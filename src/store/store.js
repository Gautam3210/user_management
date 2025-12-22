import {configureStore, createSlice} from "@reduxjs/toolkit"
import { act } from "react";

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers:{
        addUser:(state, action)=>{
            return action.payload;
           
        }
    }

})

const userListSlice = createSlice({
    name: "user_List",
    initialState: [],
    reducers:{
        addUsersList:(state, action)=>{
            // console.log(action.payload)
            return action.payload;
           
        },

        appendUserList:(state, action)=>{
            console.log(`data : ${action.payload}`)
            state.push(action.payload)
            
        }
    }

})


const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        userList: userListSlice.reducer
    }
})

export const {addUser} = userSlice.actions
export const {addUsersList, appendUserList} = userListSlice.actions
export default store


