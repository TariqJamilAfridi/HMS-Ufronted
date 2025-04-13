import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Login from "./pages/Login";
import Footer from "./components/Footer";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching user:", error.response?.data || error.message);
        setIsAuthenticated(false);
        setUser({});
      }
    };
  
    fetchUser();
  }, []);
  
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/appointment' element={<Appointment/>}/>
        <Route path ='/about' element={<AboutUs/>}/>
        <Route path ='/register' element={<Register/>}/>
        <Route path ='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      <ToastContainer position='top-center'/>
    </Router>
    </>
  )
}

export default App
