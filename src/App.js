import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Boton from './component/Boton';

function App() {
  return (
    <div className="App">
      
        <Navbar />
        <div className="container_center box">
          Estudiante de ingnieria informatica. Busco ampliar mi experiencia y conocimientos de programación, formando parte de un equipo de trabajo del cual aprender y contribuir.
        </div>
        <Boton />
      
     </div>
  );
}

export default App;
