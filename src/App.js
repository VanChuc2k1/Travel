import React from 'react';
import Navbar from './elements/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './elements/pages/Home';
import Services from './elements/pages/Services';
import Products from './elements/pages/Products';
import SignUp from './elements/pages/SignUp';

function App() {
    return (
        <>
          <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
            </Routes>
          </Router>
        </>
    );
}

export default App;
