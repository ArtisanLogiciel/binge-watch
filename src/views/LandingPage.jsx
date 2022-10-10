import React, {useCallback, useEffect, useState} from "react";
import Button from "../components/Button";
import HiddenBar from "../components/HiddenBar";
import Input from "../components/Input";
import GoDown from "../components/GoDown";


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
    <div className={`text-silver bg-dark`}>
        
        <HiddenBar makeItVisible={scrollY > 0.8*windowHeight} />
    
    
        <div className={`absolute w-screen h-screen top-0 mt-0 z-0`}>
            <div className={`absolute lg:hidden bg-landing
            bg-contain bg-top bg-no-repeat top-0 w-[100vw] h-[100vh]`}
            />
            <div className={`absolute hidden lg:block bg-landing-lg
            bg-cover bg-right-bottom bg-no-repeat w-[100vw] h-[100vh]`}
            />
        </div>
        
        <section className={`relative flex flex-col justify-center items-center lg:items-start mt-0 h-screen px-[5.6vw] z-50`}>
            
            <div className={`flex flex-col justify-center lg:justify-start md:w-37.5 lg:w-1/2 pt-[30vw] md:pt-[40vw] lg:pt-0 space-y-4`}>
                <div className={`mx-auto lg:ml-0 lg:mb-7.5`}>
                    <img src="./src/assets/images/popcorn.png" alt="Logo Binge Watch" className={`h-36 lg:h-40`}/>
                </div>
                <p className={`text-center lg:text-left`}>
                    <h1 className={`text-2xl md:text-3xl lg:text-5xl font-Avenir font-bold leading-tight mb-2`}>
                        Where you want, when you want !
                    </h1>
                </p>
                <p className={`text-center text-lg lg:text-left lg:text-xl tracking-wide`}>
                    Entrez votre adresse email pour profiter de toutes les fonctionnalités.
                </p>
                <div className={`relative`}>
                    <Input className={`h-12 text-base w-full md:w-7/12 mb-4 md:mb-0 md:rounded-r-none`}/>
                    <Button className={`h-12 text-base w-full md:w-5/12 relative md:-top-12 mr-0 ml-auto md:rounded-l-none md:-mb-10`}>
                        continuer
                    </Button>
                </div>
                <p className={`text-center text-lg lg:text-left lg:text-xl tracking-wide`}>
                    Profitez gratuitement du service Binge Watch pour trouver le film ou la série qui vous plaira de regarder {now()}.
                </p>
            </div>
            <div className={`justify-self-center self-center lg:self-start mb-10 mt-auto`}>
                <GoDown offset={window.innerWidth < 768 ? 50 : 0}/>
            </div>
            
        </section>
    
        <section className={`relative flex flex-col md:flex-row justify-center items-center lg:justify-start mt-0 h-screen px-[5.6vw] z-10 `}>
            <div className={`md:flex-1 lg:mr-8`}>
                <img src="./src/assets/images/landing-sect2.png" alt="aperçu Binge Watch"/>
            </div>
            
            <div className={`flex-1 flex flex-col justify-center lg:justify-start md:w-37.5 lg:w-1/2 pt-0 lg:pt-0 space-y-4`}>
                <p className={`text-center lg:text-left`}>
                    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-Avenir font-bold leading-tight mb-2`}>
                        Notez, commentez et gardez vos séries et films favoris
                    </h2>
                </p>
                <p className={`text-left lg:text-xl tracking-wide`}>
                    <ul className={`ml-8 list-disc`}>
                        <li className={`mb-2 md:mb-3 lg:mb-4`}>Accédez rapidement aux films et série dans les catégories principales</li>
                        <li className={`mb-2 md:mb-3 lg:mb-4`}>Trouver votre divertissement idéal grâce à la recherche avancée</li>
                        <li className={`mb-2 md:mb-3 lg:mb-4`}>Notez et commentez pour aider les autres utilisateurs</li>
                        <li className={`mb-2 md:mb-3 lg:mb-4`}>Enregistrez vos favoris pour les voir et les revoir</li>
                    </ul>
                </p>
            </div>
        </section>
    
        <section className={`px-[5.6vw] py-[10vw] h-36 flex justify-center`}>
            <Button className={`w-80 h-12 text-base`}>
                s'inscrire
            </Button>
        </section>
    
        
        <section className={`px-[5.6vw] py-[10vw]`}>
            <p className={`w-full text-center mb-6`}>
                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight`}>
                    Accessible sur vos appareils préférés
                </h2>
            </p>
            <div className={`flex flex-col md:flex-row justify-center text-center`}>
                <div className={`flex justify-center`}>
                    <div className={`flex-1 px-2`}>
                        <img src="./src/assets/images/img_tv.png" alt="TV"/>
                        <h3 className={`py-6 font-bold text-lg md:text-xl lg:text-2xl`}>Télévisions</h3>
                        <ul className={`text-base md:text-lg lg:text-xl`}>
                            <li>Amazon Fire TV</li>
                            <li>Appareils Android TV</li>
                            <li>Apple TV</li>
                            <li>Chromecast</li>
                            <li>TV LG</li>
                            <li>Roku</li>
                            <li>Samsung</li>
                        </ul>
                    </div>
                    <div className={`flex-1 px-2`}>
                        <img src="./src/assets/images/img_desktop.png" alt=""/>
                        <h3 className={`py-6 font-bold text-lg md:text-xl lg:text-2xl`}>Ordinateurs</h3>
                        <ul className={`text-base md:text-lg lg:text-xl`}>
                            <li>Chrome OS</li>
                            <li>MacOS</li>
                            <li>PC Windows</li>
                            <li>Linux</li>
                        </ul>
                    </div>
                </div>
                <div className={`flex justify-center`}>
                    <div className={`flex-1 px-2`}>
                        <img src="./src/assets/images/img_mobile.png" alt=""/>
                        <h3 className={`py-6 font-bold text-lg md:text-xl lg:text-2xl`}>Mobiles et tablettes</h3>
                        <ul className={`text-base md:text-lg lg:text-xl`}>
                            <li>Tablettes Amazon Fire</li>
                            <li>Mobiles et tablettes Android</li>
                            <li>iPhone & iPad</li>
                        </ul>
                    </div>
                    <div className={`flex-1 px-2`}>
                        <img src="./src/assets/images/img_game.png" alt=""/>
                        <h3 className={`py-6 font-bold text-lg md:text-xl lg:text-2xl`}>Consoles de jeux</h3>
                        <ul className={`text-base md:text-lg lg:text-xl`}>
                            <li>PS4</li>
                            <li>PS5</li>
                            <li>Xbox One</li>
                            <li>Xbox Series X</li>
                            <li>Xbox Series S</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
