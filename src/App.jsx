import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Card from "./components/Card";
import Carts from "./components/Carts";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/cart" element={<Carts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
