import {configureStore, createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers:{
        addUser:(state, action)=>{

            return action.payload;
           
        }
    }

})


const store = configureStore({
    reducer:{
        user: userSlice.reducer
    }
})

export const {addUser} = userSlice.actions
export default store


