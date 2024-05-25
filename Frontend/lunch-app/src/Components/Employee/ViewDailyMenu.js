
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewDailyMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/menu"); // Assuming you have an endpoint to fetch today's menu
        setMenu(response.data);
      } catch (error) {
        console.error('Failed to fetch menu', error);
      }
    };

    fetchMenu();
  }, []);
  console.log(menu);
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Today's Menu</h2>
      <div>
        {menu.map((item) => (
          <div key={item.id} className="border p-2 m-2 rounded">
            <p className="font-bold">{item.date}</p>
            <p>{item.option}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDailyMenu;
