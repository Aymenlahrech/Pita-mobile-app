
import { useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import {Routes, Route, useNavigate } from 'react-router-dom';
import { IdentityProvider } from './Components/IdentityContext.jsx';
import Dash from "./Components/AllServices.jsx"
import Login from "./Components/Login.jsx"
import Edit from "./Components/EditProfile.jsx"
import { createContext, useState } from 'react';

function App() {
 
  
  return (
    <div className="App">


      <IdentityProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </IdentityProvider>
    
      </div>
      
)}
export default App