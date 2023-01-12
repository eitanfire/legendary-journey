import React from 'react';
import { Container, Navbar, NavbarBrand } from "reactstrap";
import vaporwaveTrees from "./app/assets/img/vaporwaveTrees.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={vaporwaveTrees} alt="Teach League Logo" />
          </NavbarBrand>
        </Container>
      </Navbar>
      Hello World!
    </div>
  );
}

export default App;
