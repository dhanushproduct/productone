
import './App.css';

//Routing 
import {Route, Routes} from "react-router-dom"
// Pages
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

+
function App() {
  return (
    <div className="bg-[#efe9ff] min-h-screen w-full">
     
    <Navbar/>
    <Routes>
      <Route element={<Landing/>} path='/' />
      <Route element={<Signup/>} path='/signup' />
      <Route element={<Login/>} path='/login' />
      <Route element={<Dashboard/>} path='/dashboard' />
    </Routes>
    <Footer/>
    </div>
  )
}
