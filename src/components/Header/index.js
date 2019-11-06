import React from "react";
import Logo from "../Logo";
import Navbar from "react-bootstrap/Navbar";

const Header = () => (
  <Navbar className="d-flex justify-content-sm-center">
    <Navbar.Brand className="d-flex align-items-end">
      <Logo />
      <div>TodoApp</div>
    </Navbar.Brand>
  </Navbar>
);

export default Header;
