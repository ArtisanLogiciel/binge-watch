import React, {useCallback, useEffect, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import Button from "../components/Button";
import HiddenBar from "../components/HiddenBar";
import Input from "../components/Input";
import GoDown from "../components/GoDown";
import Details from "../components/Details";


export default function LandingPage() {
    // USE CONTEXT
    // simulation de la vérification du token
    const [connected, setConnected] = useState(false)
    useEffect(()=> {if (localStorage.getItem('token')) {
        setConnected(true)
        //setTimeout(function() {document.location.reload()},0);
    }}, [])
    
    
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
    
    
    // go to top at render
    useEffect(()=> {window.scrollTo(0, 0)}, [])
    
    
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
      connected ? <Navigate to={'/home'} replace={true} /> :
      
    <div className={`text-grey bg-dark-navy`}>
        
        <HiddenBar makeItVisible={scrollY > 0.8*windowHeight} />
    
    
        <div className={`absolute w-screen h-screen top-0 mt-0 z-0`}>
            <div className={`absolute lg:hidden bg-landing
            bg-contain bg-top bg-no-repeat top-0 w-[100vw] h-[100vh]`}
            />
            <div className={`absolute hidden lg:block bg-landing-lg
            bg-cover bg-center bg-no-repeat w-[100vw] h-[100vh]`}
            />
        </div>
        
        <section className={`relative flex flex-col justify-center items-center lg:items-start mt-0 h-screen px-[5.6vw] z-40`}>
            
            <div className={`flex-1 flex flex-col justify-center md:w-37.5 lg:w-1/2 pt-[30vw] md:pt-[40vw] lg:pt-0 space-y-4`}>
                <div className={`mx-auto lg:ml-0 lg:mb-7.5`}>
                    <img src="/images/BingeLogo.png" alt="Logo Binge Watch" className={`h-36 lg:h-40`}/>
                </div>
                <h1 className={`block text-center lg:text-left text-2xl md:text-3xl lg:text-5xl font-Avenir font-bold leading-tight mb-2`}>
                        Where you want, when you want !
                </h1>
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
            
            <div className={`justify-self-center self-center lg:self-start mb-10 mt-auto z-0`}>
                <GoDown offset={window.innerWidth < 768 ? 50 : 0}/>
            </div>
            
        </section>
    
        <section className={`relative flex flex-col md:flex-row justify-center items-center lg:justify-start mt-0 h-screen px-[5.6vw] py-[10vw] z-10 `}>
            
            <div className={`flex-1 md:mr-4 lg:mr-8 w-full h-full md:w-1/2 md:h-full bg-preview bg-contain bg-center bg-no-repeat`} />
            
            <div className={`flex-1 flex flex-col justify-center lg:justify-start md:w-37.5 lg:w-1/2 pt-0 lg:pt-0 space-y-4`}>
                <p className={`text-center md:text-left`}>
                    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2`}>
                        Notez, commentez et gardez vos séries et films favoris
                    </h2>
                </p>
                <p className={`text-left md:text-lg lg:text-xl tracking-wide`}>
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
            <Button className={`w-80 h-12 text-base text-grey-light`}>
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
                        <img src="/images/img_tv.png" alt="TV"/>
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
                        <img src="/images/img_desktop.png" alt=""/>
                        <h3 className={`py-6 font-bold text-lg md:text-xl lg:text-2xl`}>Ordinateurs</h3>
                        <ul className={`text-base md:text-lg lg:text-xl`}>
                            <li>Chrome OS</li>
                            <li>MacOS</li>
                            <li>PC Windows</li>
                            <li>Linux</li>
                        </ul>
                    </div>
                </div>
                <div className={`flex justify-center pt-8 md:pt-0`}>
                    <div className={`flex-1 px-2`}>
                        <img src="/images/img_mobile.png" alt=""/>
                        <h3 className={`py-6 font-bold text-lg md:text-xl lg:text-2xl`}>Mobiles et tablettes</h3>
                        <ul className={`text-base md:text-lg lg:text-xl`}>
                            <li>Tablettes Amazon Fire</li>
                            <li>Mobiles et tablettes Android</li>
                            <li>iPhone & iPad</li>
                        </ul>
                    </div>
                    <div className={`flex-1 px-2`} title="toto les bon tuyo">
                        <img src="/images/img_game.png" alt=""/>
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
        
        
        <section className={`px-[5.6vw] py-[10vw]`}>
            <p className={`w-full text-center mb-6`}>
                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight`}>
                    Questions fréquentes
                </h2>
            </p>
            <div className={`flex flex-col justify-center text-left md:text-lg lg:text-xl`}>
                <div className={`w-full p-2`}>
                    <Details summary="Qu'est-ce que Binge Watch ?">
                        <p>
                            Binge Watch vous donne accès à la plus grosses base de données sur les films, les séries, les dessins-animés et les mangas.
                        </p>
                    </Details>
                </div>
                <div className={`w-full p-2`}>
                    <Details summary="Que vais-je trouver sur Binge Watch ?">
                        <p className={`mb-2`}>
                            Binge Watch récolte pour vous toutes les données disponibles sur la base IMDb et les trie par catégorie :
                        </p>
                        <ul className={`ml-8 mb-2 list-disc`}>
                            <li>Aventure</li>
                            <li>Science-Fiction</li>
                            <li>Comédie</li>
                            <li>Horreur</li>
                            <li>Dessins-Animés</li>
                            <li>Western</li>
                            <li>Romance</li>
                        </ul>
                        <span>et bien d'autes !</span>
                    </Details>
                </div>
                <div className={`w-full p-2`}>
                    <Details summary="Quel est le prix de Binge Watch ?">
                        <p className={`mb-2`}>Les services de Binge Watch sont à <strong className={`text-grey-ultralight`}>0€ par mois à vie</strong>.</p>
                        <p className={`mb-2`}>Tout est gratuit, mais il faudra vous inscrire pour pouvoir utiliser les services personnalisés de Binge Watch :</p>
                        <ul className={`ml-8 mt-2 list-disc`}>
                            <li>Noter et commenter les films, les séries et tout ce que vous trouverez sur Binge Watch</li>
                            <li>Enregistrer vos favoris pour les regarder plus tard</li>
                            <li>Recevoir des propositions de divertissements personnalisées selon vos notes</li>
                        </ul>
                    </Details>
                </div>
                <div className={`w-full p-2`}>
                    <Details summary="L'inscription à Binge Watch est-elle définitive ?">
                        <p className={`mb-2`}>Vous pouvez vous désinscrire de Binge Watch quand vous le voulez. Pour vous désinscrire suivez ces 5 étapes :</p>
                        <ul className={`ml-8 mt-2 mb-2 list-decimal`}>
                            <li>Identifiez-vous sur BingeWatch</li>
                            <li>Sélectionnez "Compte" dans le menu utilisateur</li>
                            <li>Sélectionnez "Se désinscrire"</li>
                            <li>Modifiez si vous le souhaitez l'option "Conserver mes notes et commentaires"</li>
                            <li>Sélectionnez "Confirmer"</li>
                        </ul>
                        <p className={`mb-2`}>Vos données personnelles seront supprimées. Si vous avez choisi de conserver vos notes et commentaires elles seront rendu anonymes.</p>
                        <p>Les notes et commentaires anonymes seront conservés 6 mois.</p>
                    </Details>
                </div>
            </div>
        </section>
    </div>
  );
}
