import React from 'react';
import { Container, Navbar, NavbarBrand } from "reactstrap";
import vaporwaveTrees from "./app/assets/img/vaporwaveTrees.png";
import ClassCard from "./features/classes/ClassCard.js";
import { CLASSES } from "./app/shared/CLASSES";
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
      <ClassCard class={CLASSES[0]}/>
    </div>
  );
}

export default App;
