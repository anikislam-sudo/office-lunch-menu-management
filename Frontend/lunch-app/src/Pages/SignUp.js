import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/users/signup", data);
      toast.success("Sign up successful");
      navigate("/login");
    } catch (error) {
      toast.error("Sign up failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">Username</label>
            <input
              className="input input-bordered"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="text-red-500">Username is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">Email</label>
            <input
              className="input input-bordered"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </div>
          <div className="form-control">
            <label className="label">Password</label>
            <input
              className="input input-bordered"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500">Password is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">Role</label>
            <select
              className="select select-bordered"
              {...register("role", { required: true })}
            >
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>
            {errors.role && <p className="text-red-500">Role is required</p>}
          </div>
          <button type="submit" className="btn btn-primary w-full mt-3">
            Sign Up
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-yellow-600" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
