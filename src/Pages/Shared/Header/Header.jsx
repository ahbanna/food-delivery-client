import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
   const [navbar, setNavbar] = useState(false);
   const changeBackground = () => {
     if (window.scrollY >= 80) {
       setNavbar(true);
     } else {
       setNavbar(false);
     }
   };
   window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "mynav active" : "mynav"}>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <NavLink to="/">
            <Image className="site-logo" src={logo} alt="Food Delivery" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavLink to="/">Restaurents</NavLink>
              <NavLink to="/">Recipe</NavLink>
              <NavLink to="/">About</NavLink>
              <NavDropdown title="Pages" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pages 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Pages 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Pages 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavLink to="/login" className="login-btn">
                Login
              </NavLink>
              <NavLink to="/signup" className="signup-btn">
                Sign Up
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
