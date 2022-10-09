import React, {useCallback, useEffect, useState} from "react";
import Button from "../components/Button";
import HiddenBar from "../components/HiddenBar";


export default function LandingPage({ setLogged }) {
    // INTERNAL STATES
    const [scrollY, setScrollY] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    
    
    // watch vertical scroll to show/hide top bar
    const setScroll = useCallback(() => {
         setScrollY(window.scrollY)
    }, []);
    
    useEffect(() => {
        window.addEventListener('scroll', setScroll);
        return () => window.removeEventListener('scroll', setScroll);
    }, [setScrollY, setScroll])
    
    
    // watch screen dimensions
    const sizeX = useCallback(() => {
        setWindowWidth(window.innerWidth)
    }, [])
    const sizeY = useCallback(() => {
        setWindowHeight(window.innerHeight)
    }, [])
    
    useEffect(()=> {
        setWindowHeight(window.innerHeight)
        window.addEventListener('resize', sizeY);
        return () => window.removeEventListener('resize', sizeY);
    }, [setWindowHeight])
    
    useEffect(()=> {
        window.addEventListener('orientationchange', sizeY);
        return () => window.removeEventListener('orientationchange', sizeY);
    }, [setWindowHeight])
    
    useEffect(()=> {
        setWindowWidth(window.innerWidth)
        window.addEventListener('resize', sizeX);
        return () => window.removeEventListener('resize', sizeX);
    }, [setWindowWidth])
    
    useEffect(()=> {
        window.addEventListener('orientationchange', sizeX);
        return () => window.removeEventListener('orientationchange', sizeX);
    }, [setWindowWidth])

    
    
    
    
    /*const [email, setEmail] = useState("exemple@exemple.com");
    const [error, setError] = useState(false);
    
    const handleEmailChange = (e) => {
      // vérifie si l'email contient un @ et un .
      if (e.target.value.includes("@") && e.target.value.includes(".")) {
        setError(false);
      } else {
        setError(true);
      }
      setEmail(e.target.value);
    };*/
  
  
  
  return (
    <div className={`text-white`}>
        
        <HiddenBar makeItVisible={scrollY > 0.8*windowHeight} />
        

      <div className={`absolute bg-landing bg-cover bg-no-repeat top-0`}
           // use screen sizes to position and adapt background image
           style={{height: windowHeight, width: windowWidth}}
      >

      </div>

      <div className={`h-screen pt-36 mt-12 border`}>
        <p>bla bla bla</p>
        <p>bla bla bla</p>
      </div>

      <div className={`h-screen pt-36 mt-12 border`}>
        <p>bla bla bla</p>
        <p>bla bla bla</p>
      </div>
    </div>
  );
}
