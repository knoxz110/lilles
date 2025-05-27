import { useState } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import LandingPage from './Pages/LandingPage'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import NavbarSwitcher from './Components/NavbarSwitcher'
import Hero from './Pages/Hero'
import Menu from './Pages/Menu'
import Profile from './Pages/Profile'
import CardDetails from './Components/CardDetails'
import NotificationsPage from './Components/Notifications'
import OrderHistoryPage from './Components/Order-History'
import SupportPage from './Components/Support'
import ReviewPage from './Components/Review'
import EditProfile from './Components/EditProfile'
import UserPage from './Components/UserPage'
import Cart from './Components/Cart'
import Order from './Pages/Order'



function App() {


  return (
    
    <div className="App bg-[#102B2A]">
       <NavbarSwitcher />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cardDetails" element={<CardDetails />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/order-History" element={<OrderHistoryPage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/user-profile" element={<UserPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Order />} />


        {/* <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/reservation" element={<ReservationPage />} /> */}
      </Routes>
      <Footer />
    </div>

  )
}

export default App
