import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Nav} from 'react-bootstrap';

function Detail(props){
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
      <TabContent tab={tab}/>
  </div>  
  )
};


// transition 적용
function TabContent({tab}){
  let [fade, setFade] = useState('');

  useEffect(()=>{
    let a = setTimeout(()=>{setFade('end')}, 100)
    
    return()=>{
      clearTimeout(a);
      setFade(''); 
    }
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  )
}

// function TabContent({tab}){
//   // 방법1
//   if (tab == 0){
//     return <div>내용0</div>
//   } else if (tab == 1){
//     return <div>내용1</div>
//   } else if (tab == 2){
//     return <div>내용2</div>
//   }

//   // 방법2
//   return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]
// }

export default Detail

