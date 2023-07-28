import React from "react";
import { Row } from 'react-materialize';
import { NavLink } from 'react-router-dom'

const Header = () => (
  <Row>  
      <NavLink to="/">
        <span><b> > Home</b></span>
      </NavLink>
  </Row>
);

export default Header;