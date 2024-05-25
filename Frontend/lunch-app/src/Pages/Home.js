// src/pages/Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [users, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  console.log(users);
  
  if (!users) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {users.map((user) => (
        <div key={user.id}>
          <h1 className="text-3xl font-bold mb-4">Welcome, {user.username}</h1>
          {user.role === "admin" ? navigate("/admin")  :  navigate("/employee")}
        </div>
      ))}
    </div>
  );
};





export default Home;
