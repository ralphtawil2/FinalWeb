import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import DarkMode from "./DarkMode";
import PopUpRegisterButton from "./BackdropModal";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavigationBar() {
  const [navbar, setNavbar] = useState(false);
  const changebackground = () => {
    if (window.scrollY >= 56) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changebackground);
  return (
    <Navbar expand="lg" className={navbar ? "bg-full" : "bg-light"}>
      <Container>
        <DarkMode></DarkMode>
        <Navbar.Brand href="/">RoyalTees</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#anchor-AboutUs">About Us</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <PopUpRegisterButton />
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
