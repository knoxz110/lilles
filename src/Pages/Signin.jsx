import React, { useState } from 'react'
import img from '../assets/signin.png'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Users from '../Components/UtilityUsers'

const Signin = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [passwordType, setPasswordType] = useState('password')
  const navigate = useNavigate()

  const togglePassword = e => {
    e.preventDefault()
    setPasswordType(prev => prev === 'password' ? 'text' : 'password')
  }

  const handleChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
   
    
    // e.preventDefault()
    

    const authenticatedUser = Users.find(
      user => user.email === loginData.email && user.password === loginData.password
    )

    if (authenticatedUser) {
      toast.success('Login Successful')
      
      // ✅This saves the user email in sessionStorage so it can be used elsewhere
      sessionStorage.setItem('isLoggedIn', 'true')
      sessionStorage.setItem('loggedInUserEmail', authenticatedUser.email)
      navigate('/hero')
      window.location.reload()
    } else {
      toast.error('Wrong email or password')
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <ToastContainer />

      {/* Left image */}
      <div className="relative w-full md:w-1/2 h-96 md:h-auto">
        <div className="absolute inset-0 bg-white/30 z-10" />
        <img
          src={img}
          alt="Sign in"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
          <h1 className="text-3xl font-bold mb-6">Welcome Back!</h1>

          <div className="relative">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              placeholder="Your Email address"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            />
          </div>

          <div className="relative">
            <input
              type={passwordType}
              name="password"
              onChange={handleChange}
              required
              placeholder="Your Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            />
            {passwordType === 'password' ? (
              <AiFillEye
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                onClick={togglePassword}
              />
            ) : (
              <AiFillEyeInvisible
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                onClick={togglePassword}
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 py-2 rounded hover:bg-yellow-600 transition"
          >
            LOGIN
          </button>

          <div className="flex justify-between text-sm">
            <Link to="/signup" className="underline">Create an account</Link>
            <Link to="/forgot" className="underline">Forgot Password?</Link>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            <strong>Try any of the users in your UtilityUsers.js file</strong>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signin
