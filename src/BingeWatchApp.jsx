import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Error404 from "./views/Error404";
import NavBar from "./components/BingeNavBar";
import { auth } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import Password from "./views/Password";



function BingeWatchApp() {
  // USE CONTEXT
  // place réservée pour les useContext
  
  // INTERNAL STATES
  const [logged, setLogged] = useState(false); // sera remplacé par un état du AppContextProvider
  
  useEffect(()=> {
    const token = localStorage.getItem("token") // sera remplacé par un état du AppContextProvider
    if (token) {setLogged(true)}
  }, [])
  
  function login() {
    localStorage.setItem("token", 'binge')
    setTimeout(function() {document.location.reload()},0);
  }
  function logout() {
    localStorage.clear()
    setTimeout(function() {document.location.reload()},0);
  }
  
  return (
    <div>
      <BrowserRouter>
          {!logged ?
              <Routes>
                <Route path="/" element={<LandingPage login={login} />}  />
                <Route path="/login" element={<Login />} />
                <Route path="/login/password" element={<Password />} />
                <Route path="*" element={<LandingPage />} />
              </Routes>
              : // if logged
              <Routes>
                <Route path="/" element={<Home logout={logout}/>} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
          }
      </BrowserRouter>
    </div>
  );
}

export default BingeWatchApp;
