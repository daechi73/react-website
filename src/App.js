import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/react-website" exact element={<Home />} />
          <Route path="/react-website/products" exact element={<Products />} />
          <Route path="/react-website/services" exact element={<Services />} />
          <Route path="/react-website/sign-Up" exact element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
