import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import {useState} from 'react';
import './App.css';
import bg from './img/bg.png';
import data from './data';
import img1 from './img/shoes1.jpg';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';

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

              /*
              // 서버로 데이터 전송하는 POST 요청
              axios.post('url'. {name: 'kim'});

              // 동시에 ajax요청 여러개 할 때
              Promise.all([ axios.get('url1'), axios.get('url2') ])
              .then(()=>{})
              .catch(()=>{})

              원래는 서버와 문자만 주고 받을 수 있음
              따옴표 쳐놓으면 array, object도 주고 받기 가능 -> 이런형식은 json
              json은 문자 취급을 받을 수 있기 때문에 데이터 주고 받기 가능
              axios가 json은 다시 array로 바꿔줌

              fetch()
              .then(결과 => 결과.json)
              .then(data=>{})
              fetch로 데이터를 가져오면 json을 그대로 출력해서 array나 object 변환하는 과정이 필요
              axios는 변환 필요없음

              */
            }}>버튼</button>
          </>
        }/>
        <Route path='/detail/:id' element={<Detail shoes={shoes} />}/>

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
