// src/components/Employee/SelectLunchChoice.js
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

const SelectLunchChoice = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
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
  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/menu', data); // Assuming you have an endpoint to post choice
      toast.success('Choice selected');
    } catch (error) {
      toast.error('Failed to select choice');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Select Lunch Choice</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control mb-4">
          <label className="label">Lunch Item</label>
          <select className="select select-bordered" {...register('option', { required: true })}>
            {menu.map((item) => (
              <option key={item.id} value={item.option}>{item.option}</option>
            ))}
          </select>
          {errors.option && <p className="text-red-500">Lunch Item is required</p>}
        </div>
        <button type="submit" className="btn btn-primary">Select</button>
      </form>
    </div>
  );
};

export default SelectLunchChoice;
