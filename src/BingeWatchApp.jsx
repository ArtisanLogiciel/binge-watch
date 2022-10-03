import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Home from "./components/BingeHome";
import Error404 from "./components/Error404";
import LogPage from "./components/BingeLogPage";

function BingeWatchApp() {
  // INTERNAL STATES
  const [logged, setLogged] = useState(false);

  // if not logged
  // if (!logged) return <LogPage setLogged={setLogged} />;

  // if logged :
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logged" element={<LogPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default BingeWatchApp;
