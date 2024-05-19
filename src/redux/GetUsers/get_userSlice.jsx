import { createSlice, configureStore } from '@reduxjs/toolkit'

const get_userSlice=createSlice({
    name: 'getUsers',
  initialState: {
    isLoading:false,
    value: []
  },
  reducers: {
    showLoading:(state)=>{
        state.isLoading=true;
    },
    getUsers:(state,actions)=>{
        state.value=actions.payload;
        state.isLoading=false
    }
  }
})

export const { getUsers,showLoading } = get_userSlice.actions
export default get_userSlice.reducer