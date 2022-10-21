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
import Search from "./views/Search";
import Account from "./views/Account";
import Help from "./views/Help";
import Parameters from "./views/Parameters";



function BingeWatchApp() {
  // USE CONTEXT
  // place réservée pour les useContext
  
  // INTERNAL STATES
  const [logged, setLogged] = useState(false); // sera remplacé par un état du AppContextProvider
  
  useEffect(()=> {
    const token = localStorage.getItem("token") // sera remplacé par un état du AppContextProvider
    if (token) {setLogged(true)}
  }, [])
  
  
  
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}  />
          <Route path="/login" element={<Login />} />
          <Route path="/login/password" element={<Password />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
  
          <Route path="/parameters" element={<Parameters />} />
          <Route path="/account" element={<Account />} />
          <Route path="/help" element={<Help />} />
          
          
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default BingeWatchApp;
