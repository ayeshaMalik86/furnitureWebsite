import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import ShopSection from "./pages/Shop";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import ProductDetailPage from "./pages/ProductDetail";
import ContactUs from "./pages/ContactUs"

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <main>
          <Routes> 
           <Route path="/" element={<HomePage />} /> 
           <Route path="/shop" element={<ShopSection />} /> 
           <Route path="/product/:id" element={<ProductDetailPage />} />
           <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer/>
        </main>
      </div>
    </Router>
  );
};

export default App;
