import logo from "./logo.svg";
import "./App.css";
import Punto2 from "./app/Punto2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Punto1 from "./app/Punto1";
import Punto3 from "./app/Punto3";
import Punto4 from "./app/Punto4";

import Inicio from "./app/Inicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/punto3" element={<Punto3 />} />
        <Route exact path="/punto2" element={<Punto2 />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/punto1" element={<Punto1 />} />
        <Route path="/punto4" element={<Punto4 />} />
        
      </Routes>
    </Router>
  );
}

export default App;
