import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>   
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
