import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pdp from "./pages/Pdp";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pdp" element={<Pdp />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
