import {useState} from 'react';
import {Button, Navbar, Nav, Container} from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png';
import shoes1 from './img/shoes1.jpg';
import data from './data.js';

function App() {

  let [shoes, setShoes] = useState(data);
  console.log(shoes[0].title)

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light" className='nav'>  
        <Container>
          <Navbar.Brand href="#home">Shop J</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' style={{backgroundImage: `url(${bg})`}}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={shoes1} width='80%'/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/img/shoes2.jpg'} width='80%'/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width='80%'/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

