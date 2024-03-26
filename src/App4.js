import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import {useState} from 'react';
import './App.css';
import bg from './img/bg.png';
import data from './data';
import img1 from './img/shoes1.jpg';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './pages/Detail';

function App() {
  let [shoes, setShoes] = useState(data);
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
          </>
        }/>

        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버 페이지</div>}/>
          <Route path='location' element={<div>위치 페이지</div>}/>
        </Route>

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문 시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일 기념 쿠폰 받기</div>}></Route>
        </Route>

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
