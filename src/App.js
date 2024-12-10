import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <main>
          <Routes> 
           <Route path="/" element={<HomePage />} /> 
          </Routes>
          <Footer/>
        </main>
      </div>
    </Router>
  );
};

export default App;
