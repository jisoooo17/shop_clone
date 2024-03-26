import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice';

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
});
// console.log(stock.reducer(undefined, {}));

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ], 
  reducers:{
    addCount(state, action){
      // state[action.payload].count++
      let num = state.findIndex(function(data){
        return data.id == action.payload
      })
      state[num].count++;
    },
    addItem(state, action){
      // state.push(action.payload);
      let sameProd = state.findIndex(function(data){
        console.log(data.id)
        return data.id == action.payload.id
      });

      if(sameProd == -1){
        state.push({id: action.payload.id, name: action.payload.title, count: 1});
      } else {
        state[sameProd].count++;
      }
    }
  }
})

export let {addCount, addItem} = cart.actions;

export default configureStore({  // 여기에 등록해야 사용 가능
  reducer: {
    user : user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  }
}) 