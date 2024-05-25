
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddMenuOption = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/menu', data);
      toast.success('Menu option added');
    } catch (error) {
      toast.error('Failed to add menu option');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Menu Option</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control mb-4">
          <label className="label">Date</label>
          <input
            className="input input-bordered"
            type="date"
            {...register('date', { required: true })}
          />
          {errors.date && <p className="text-red-500">Date is required</p>}
        </div>
        <div className="form-control mb-4">
          <label className="label">Option</label>
          <input
            className="input input-bordered"
            {...register('option', { required: true })}
          />
          {errors.option && <p className="text-red-500">Option is required</p>}
        </div>
        <button type="submit" className="btn btn-primary">Add Menu Option</button>
      </form>
    </div>
  );
};

export default AddMenuOption;
