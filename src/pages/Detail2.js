import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  let {id} = useParams();
  let prodId = props.shoes.find(function(data){
    return data.id == id;
  })

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${prodId.id + 1}.jpg`} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{prodId.title}</h4>
            <p>{prodId.content}</p>
            <p>{prodId.price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Detail;