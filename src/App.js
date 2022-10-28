import React,{useState} from "react";
import "./style.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Contact from './Pages/Contact'
import Navbar from './Pages/Navbar'


export default function App() {
  const [userName, setUserName] = useState("Duke")

  return (
    <div>
     <Router>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home userName={userName} /> } />
         <Route path="/profile" element={<Profile userName={userName} 
           setUserName={setUserName} />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
     </Router>
    </div>
  );
}
