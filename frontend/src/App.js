
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route, Routes} from "react-router-dom"
import Signin from './components/Signin';
import Footer from './components/Footer';
function App() {
  return (
    <div className="bg-[#efe9ff] min-h-screen w-full">
     
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/' />
      <Route element={<Signin/>} path='/signin' />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
