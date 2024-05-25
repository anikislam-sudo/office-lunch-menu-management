import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
// import Home from './pages/Home'; // Assume Home component for the interface
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className="App">
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
    <ToastContainer />
  </div>
  );
};

export default App;
