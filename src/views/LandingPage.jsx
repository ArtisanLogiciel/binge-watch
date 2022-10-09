import React, {useCallback, useEffect, useState} from "react";
import Button from "../components/Button";
import HiddenBar from "../components/HiddenBar";
import Input from "../components/Input";


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

    
    function now() {
        let h = new Date;
        if (h.getHours() > 23) { return "cette nuit"}
        if (h.getHours() > 18) { return "ce soir"}
        if (h.getHours() > 12) { return "cet après-midi"}
        if (h.getHours() > 5) { return "ce matin"}
        return "maintenant"
    }
    
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
    
    
        <div className={`absolute -left-[200px]`}>
            <div className={`absolute bg-landing bg-cover bg-no-repeat top-0 -z-20 w-[120vw] h-[120vh] left-[10vw] -top-[10vh]`}
                // use screen sizes to position and adapt background image
                //style={{height: windowHeight, width: windowWidth}}
                
                // changement d'image LG / XS
            />
        </div>
        
        <section className={`flex justify-center lg:justify-start mt-0 lg:mt-[70px] px-[5.6vw] z-10`}>
            <div className={`flex flex-col justify-center lg:justify-start md:w-37.5 lg:w-1/2 pt-[40vw] lg:pt-0 space-y-4`}>
                <div className={`mx-auto lg:ml-0 lg:mb-7.5`}>
                    <img src="./src/assets/images/popcorn.png" alt="Logo Binge Watch" className={`h-36 lg:h-40`}/>
                </div>
                <p className={`text-center lg:text-left`}>
                    <h1 className={`text-2xl md:text-3xl lg:text-4xl font-Avenir font-bold leading-tight mb-2`}>
                        Where you want, when you want !
                    </h1>
                </p>
                <p className={`text-silver text-center text-lg lg:text-left lg:text-xl tracking-wide`}>
                    Entrez votre adresse email pour profiter de toutes les fonctionnalités.
                </p>
                <div className={`relative`}>
                    <Input className={`h-12 text-base w-full md:w-7/12 mb-4 md:mb-0 md:rounded-r-none`}/>
                    <Button className={`h-12 text-base w-full md:w-5/12 relative md:-top-12 mr-0 ml-auto md:rounded-l-none md:-mb-10`}>
                        continuer
                    </Button>
                </div>
                <p className={`text-silver text-center text-lg lg:text-left lg:text-xl tracking-wide`}>
                    Profitez gratuitement du service Binge Watch pour trouver le film ou la série qui vous plaira de regarder {now()}.
                </p>
            </div>
        </section>

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
