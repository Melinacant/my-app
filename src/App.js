import React from "react";
import "./styles.css";

//Componentes
import NavBar from "./components/NavBar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <h1>Sustenta Tienda</h1>
          <p>Lorem ipsum</p>
        </div>
      </div>
    );
  }
}

export default App;