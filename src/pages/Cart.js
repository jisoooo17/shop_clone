import { React, useState, memo, useMemo } from 'react';
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeAge } from '../store/userSlice';
import {addCount} from '../store';

// 성능 개선 memo - 꼭 필요할 때만 재렌더링
let Child = memo(function(){
  console.log('재렌더링');
  return <div>자식</div>
})

function 함수(){
  return console.log('반복문 10억번 돌린 결과');
}

const Cart = () => {
  // 성능 개선 useMemo - 컴포넌트 렌더링 시 1회만 실행
  useMemo(()=>{return 함수()});

  let state = useSelector((state)=>{ // redux 가져와주는 함수
    return state
  })  // redux store에 있던 state 남음
  // 여기서 state는 store안에 있던 모든 state가 된다

  let dispatch = useDispatch(); // store.js로 요청 보내주는 함수
  let [count, setCount] = useState(0);

  return (
    <div>
      <Child count={count}></Child>
      <button onClick={()=>{setCount(count+1)}}>버튼</button>
      <br></br><br></br>

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
                  dispatch(addCount(state.cart[i].id));
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