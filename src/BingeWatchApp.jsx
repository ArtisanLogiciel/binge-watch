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
import LogPage from "./views/LogPage";

function BingeWatchApp() {
  // INTERNAL STATES
  const [logged, setLogged] = useState(false);

  // if not logged
  if (!logged) {
      return <LogPage setLogged={setLogged}/>
  };

  // if logged :
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default BingeWatchApp;
