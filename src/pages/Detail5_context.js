import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Nav} from 'react-bootstrap';

// Context
import {Context1} from './../App.js';

function Detail(props){

  // Context
  let {재고, shoes} = useContext(Context1); // 보관함 해체해줌

  let { id } = useParams();
  let product = props.shoes.find(function(x){
    return x.id == id
  });

  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);

  useEffect(()=>{
    let a = setTimeout( ()=>{  setAlert(false)}, 2000);
    return ()=>{
      // use Effect 동작 전에 실행되는 코드
      clearTimeout(a);
    }
  });
  
  return (
    <div className="container">
      {     
        alert == true
        ? <div className="alert alert-warning">
            2초이내 구매시 할인
          </div>
        : null
      }

      {/* context */}
      {재고[0]}
    
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

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* props이용 */}
      {/* <TabContent shoes={props.shoes} tab={tab}/> */}

      {/* Context Api 이용 */}
      <TabContent tab={tab}/>
  </div>  
  )
};


function TabContent({tab, shoes}){
  let [fade, setFade] = useState('');
  let {재고} = useContext(Context1); // 보관함 해체해줌

  useEffect(()=>{
    let a = setTimeout(()=>{setFade('end')}, 100)
    
    return()=>{
      clearTimeout(a);
      setFade(''); 
    }
  }, [tab]);

  // props 이용
  // return (
  //   <div className={`start ${fade}`}>
  //     {[<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
  //   </div>
  // )

  // Context Api 이용
  return (
    <div className={`start ${fade}`}>
      {[<div>{재고[0]}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  )
}

export default Detail

