import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateExperience from './pages/CreateExperience';
import Navbar from './components/Navbar';
import SingleExperience from './pages/SingleExperience';


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-experience" element={<CreateExperience />} />
        <Route path="/experience/:id" element={<SingleExperience />} />
      
      </Routes>
     
    </BrowserRouter>
  )
}

export default App