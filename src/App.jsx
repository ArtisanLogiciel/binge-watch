import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import Error404 from './views/Error404'
import NavBar from "./components/NavBar";
import {auth} from "../firebase-config"

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth"


function App() {
    
    // test
    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
    
    
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
        {signUp ? <div>
            {JSON.stringify(signUp("email", "pwd"))}
        </div> : null}
    </>
  );
}

export default App;
