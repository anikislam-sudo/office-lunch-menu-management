
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewEmployeeChoices = () => {
  const [choices, setChoices] = useState([]);
 
  useEffect(() => {
    const fetchChoices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menu'); 
        setChoices(response.data);
      } catch (error) {
        console.error('Failed to fetch choices', error);
      }
    };

    fetchChoices();
  }, []);
console.log(choices);
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Employee Choices</h2>
      <div className="grid grid-cols-3 gap-4">
        {choices.map((choice) => (
          <div key={choice.id} className="border p-4 rounded">
            <img src={choice.imageUrl} alt={choice.option} className="w-full h-32 object-cover mb-4" />
            <p className="font-bold">{choice.option}</p>
            <p>{choice.username}</p>
            <p>{choice.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewEmployeeChoices;
