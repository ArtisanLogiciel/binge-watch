import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/index";
import Error404 from "./views/Error404";
import NavBar from "./components/NavBar";
import { auth } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import LogPage from "./views/LogPage/index";

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
      test CONTINUER
      <NavBar />
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
