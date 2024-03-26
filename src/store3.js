import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({  // useState역할 - state 하나를 slice라고 부름
  name : 'user', // 이름
  initialState : 'kim', // 값

  // redux state 변경
  // step 1 - state 수정해주는 함수 만들기
  reducers: {
    //state 수정해주는 함수
    changeName(state){  // 여기서 매개변수 state는 기존 state가 담겨있음
      return 'john ' + state
    }
  }
});

// step 2 - 만든 함수 export
export let {changeName} = user.actions; // 여기에는 state 변경함수가 남음 

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
});
console.log(stock.reducer(undefined, {}));

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ], 
})

export default configureStore({  // 여기에 등록해야 사용 가능
  reducer: {
    user : user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  }
}) 