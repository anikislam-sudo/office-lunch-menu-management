// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('/api/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
      } catch (error) {
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.username}</h1>
      {user.role === 'admin' ? <AdminView /> : <EmployeeView />}
    </div>
  );
};

const AdminView = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <AddMenuOption />
      <ViewEmployeeChoices />
    </div>
  );
};

const EmployeeView = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Employee Dashboard</h2>
      <ViewDailyMenu />
      <SelectLunchChoice />
    </div>
  );
};

const AddMenuOption = () => {
  // Implementation for adding menu options
  return <div>Add Menu Option</div>;
};

const ViewEmployeeChoices = () => {
  // Implementation for viewing employee choices
  return <div>View Employee Choices</div>;
};

const ViewDailyMenu = () => {
  // Implementation for viewing daily menu
  return <div>View Daily Menu</div>;
};

const SelectLunchChoice = () => {
  // Implementation for selecting lunch choice
  return <div>Select Lunch Choice</div>;
};

export default Home;
