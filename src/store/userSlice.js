import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({  
  name : 'user', 
  initialState : {name: 'kim', age: 20},
  reducers: {
    changeName(state){  
      // return {name: 'park', age: 20}
      state.name = 'lee'
    },
    changeAge(state, action){
      state.age += action.payload
    }
  }
});

export let {changeName, changeAge} = user.actions; 
export default user;