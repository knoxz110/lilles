import React, { useState } from 'react'
import img from '../assets/signup.png'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [passwordType, setpasswordType] = useState("password");

  const togglePassword = (e) => {
    e.preventDefault();
    setpasswordType(prev => prev === "password" ? "text" : "password")
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem('user', JSON.stringify(form))
    toast.success("Sign Up Successful")
    navigate('/signin')
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <ToastContainer />
      {/* Left Image */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-full">
        <div className="absolute inset-0 bg-white/30 z-10" />
        <img
          src={img}
          alt=""
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center text-center p-6 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6  md:bg-transparent md:text-white text-white"
        >
          <h1 className="text-3xl font-bold mb-4">Welcome to Lilies!</h1>

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              placeholder="Your Full Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              placeholder="Your Email address"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>

          {/* Password with eye icon */}
          <div className="relative">
            <input
              type={passwordType}
              name="password"
              onChange={handleChange}
              required
              placeholder="Your Password"
              className="w-full border border-gray-300 px-4 py-2 rounded-md pr-10 focus:outline-none focus:ring focus:ring-green-500"
            />
            {passwordType === "password" ? (
              <AiFillEye
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl cursor-pointer text-gray-700"
                onClick={togglePassword}
              />
            ) : (
              <AiFillEyeInvisible
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl cursor-pointer text-gray-700"
                onClick={togglePassword}
              />
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#ffd700] hover:bg-[#04070754] text-black hover:text-[#ffd700] font-medium py-2 rounded-md transition-colors duration-300"
          >
            SIGN UP
          </button>

          {/* Link */}
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-green-700 underline">
              LOGIN
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
