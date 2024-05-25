import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
// import Home from './pages/Home'; // Assume Home component for the interface
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import AdminView from './Components/Admin/AdminView';
import EmployeeView from './Components/Employee/EmployeeView';

const App = () => {
  return (
    <div className="App">
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminView />} />
        <Route path="/employee" element={<EmployeeView />} />
    </Routes>
    <ToastContainer />
  </div>
  );
};

export default App;
