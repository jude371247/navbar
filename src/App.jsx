import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import LandingPage from "./Components/LandingPage/LandingPage";
import Shop from "./Components/Shop/Shop";
import SlidingProducts from "./Components/SlidingProducts/SlidingProducts";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <> <Home /> 
      <Hero />
      <Card />
      <SlidingProducts />
      <Footer />
       </> } />
        <Route path="/shop" element={  <> <Shop />
            <LandingPage />
             <Card/>
             <Footer />
            </> } />
    </Routes>
    </Router>
  );
};

export default App;
