import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState} from 'react';
import DarkMode from './DarkMode';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BasicExample() {
  const [navbar,setNavbar]=useState(false);
  const changebackground=() => {
    if (window.scrollY >= 56){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  };
  window.addEventListener('scroll',changebackground);
  return (
    <Navbar  expand="lg" className={navbar ? 'bg-full':'bg-light'} >
      <Container >
        <DarkMode></DarkMode>
        <Navbar.Brand href="#home">RoyalTees</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            
            <Nav.Link href="#anchor-AboutUs">About Us</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Hoodies</Nav.Link>
            <Nav.Link href="#link">Pants</Nav.Link>
            <Nav.Link href="#link">T-shirts</Nav.Link>
            
            <NavDropdown title="Collection" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Summer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Winter
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Autumn</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;