import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props){
  let { id } = useParams();
  let product = props.shoes.find(function(x){
    return x.id == id
  });

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  
  useEffect(()=>{
    let a = setTimeout( ()=>{  setAlert(false)}, 2000);
    console.log(2)
    return ()=>{
      // use Effect 동작 전에 실행되는 코드
      console.log(1);
      clearTimeout(a);
    }
  });
  
  let [value, setValue] = useState('');

  useEffect(()=>{
    if(isNaN(value)== true){
      alert("!!")
    }
  }, [value])

  return (
    <div className="container">
      <input type="text" onChange={(e) => {
        setValue(e.target.value);
      }}/>
      
      {count}
      <button onClick={()=>{setCount(count + 1)}}>버튼</button>
      {     
        alert == true
        ? <div className="alert alert-warning">
            2초이내 구매시 할인
          </div>
        : null
      }

      <br></br>

    
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${product.id +1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
  </div>  
  )
};

export default Detail

