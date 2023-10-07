import "./App.css";

//Routing
import { Route, Routes } from "react-router-dom";

//headroom
import Headroom from "react-headroom";
// Pages
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <div className="bg-[#efe9ff] min-h-screen w-full ">
      <Headroom>
        <Navbar />
      </Headroom>
      <br />
      <HeroSection/>
      <Carousel/>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Login />} path="/login" />
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>

      <Footer />
    </div>
  );
}
