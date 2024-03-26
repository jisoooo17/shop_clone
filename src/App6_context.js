import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import {createContext, useState} from 'react';
import './App.css';
import bg from './img/bg.png';
import data from './data';
import img1 from './img/shoes1.jpg';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';

// context
export let Context1 = createContext(); // state 보관함

function App() {
  let [shoes, setShoes] = useState(data);  
  let [재고] = useState([10, 11, 12]);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
      <Container>
          <Navbar.Brand href="#home">Shop J</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('./detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className="main-bg" style={{backgroundImage: `url(${bg})`}}></div>
            <div className="container">
              <div className="row">
                {
                  shoes.map((a, i)=>{
                    return (
                      <Card shoes={shoes[i]} i={i}/>
                    )
                  })
                }
              </div>
            </div>

            <button style={{marginBottom: 200}} onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                console.log(result.data);
                let copy = [...shoes, ...result.data];
                setShoes(copy);
              })
              .catch(()=>{
                console.log('실패');
              })

            }}>버튼</button>
          </>
        }/>

        {/* Context */}
        <Route path='/detail/:id' element={
          <Context1.Provider value={{ 재고, shoes }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        }/>

        <Route path='*' element={<div>없는 페이지입니다.</div>}></Route>
      </Routes>

    </div>
  );
}

function Event(){
  return (
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){
  return (
    <div className="cont">
      <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} alt="" width='80%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}
export default App;
