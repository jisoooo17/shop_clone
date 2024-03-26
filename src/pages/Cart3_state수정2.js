import React from 'react';
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeAge } from '../store/userSlice';

const Cart = () => {
  let state = useSelector((state)=>{ // redux 가져와주는 함수
    return state
  })  // redux store에 있던 state 남음
  // 여기서 state는 store안에 있던 모든 state가 된다

  let dispatch = useDispatch(); // store.js로 요청 보내주는 함수
  console.log(state.cart);

  return (
    <div>
      {state.user.name}의 장바구니 
      <button onClick={()=>{
        dispatch(changeName())
      }}>버튼</button> <br></br>

      {state.user.age}
      <button onClick={()=>{
        dispatch(changeAge(10))
      }}>버튼</button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a, i)=>
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td><button onClick={()=>{
                  // step 3 - changeName() 실행해달라고 store.js에 부탁
                  dispatch(changeName());
                }}>+</button></td>
              </tr>
            )
          }
        </tbody>
      </Table> 
    </div>
  );
};

export default Cart;