import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import bg from './img/bg.png';
import data from './data';
import img1 from './img/shoes1.jpg';
import Detail from './pages/Detail';

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
      <Container>
          <Navbar.Brand href="#home">Shop J</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

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
        <Route path='/detail' element={
          <Detail/>
        }/>
      </Routes>

    </div>
  );
}


export default App;

function Card(props){
  return (
    <div className="cont">
      <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} alt="" width='80%' />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}