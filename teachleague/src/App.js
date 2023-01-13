import React from 'react';
import ClassesList from "./features/classes/ClassesList.js";
// import { CLASSES } from "./app/shared/CLASSES";
import Header from "./components/Header";
import './App.css';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
    <Header />
      <ClassesList 

      />
      <Footer />
    </div>
  );
}

export default App;
