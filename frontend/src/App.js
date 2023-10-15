import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Headroom from "react-headroom";
import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
 

  return (
    <div className="min-h-screen w-full">
      <div>
        <Headroom>
          <Navbar />
        </Headroom>
      </div>
      <br />
      <div className="z-[0]">
        <Routes>
          <Route element={<Landing />} path="/" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Login />} path="/login" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
