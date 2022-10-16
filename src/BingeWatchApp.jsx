import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Error404 from "./views/Error404";
import { auth } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import Password from "./views/Password";
import Footer from "./components/Footer";



function BingeWatchApp() {
  // USE CONTEXT
  // place réservée pour les useContext
  
  // INTERNAL STATES
  const [logged, setLogged] = useState(false); // sera remplacé par un état du AppContextProvider
  
  useEffect(()=> {
    const token = localStorage.getItem("token") // sera remplacé par un état du AppContextProvider
    if (token) {setLogged(true)}
  }, [])
  
  
  
  function logout() {
    localStorage.clear()
    setTimeout(function() {document.location.reload()},0);
  }
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}  />
          <Route path="/login" element={<Login />} />
          <Route path="/login/password" element={<Password />} />
          <Route path="/home" element={<Home logout={logout} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default BingeWatchApp;
