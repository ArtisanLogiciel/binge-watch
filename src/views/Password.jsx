import React, {useEffect, useState} from 'react';
import {Link, Navigate} from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import LogoLink from "../components/LogoLink";

export default function Password({props}) {
    useEffect(()=> {window.scrollTo(0, 0)}, [])
    
    // test mode
    const [nOfTry, setNofTry] = useState(0)
    const [connected, setConnected] = useState(false)
    
    function handleContinue() {
        // check on password
        
        // simultae success after 2 tries
        setNofTry(nOfTry + 1)
        if (nOfTry > 2 ) {
            localStorage.setItem("token", 'token')
            setConnected(true)
        }
    }
    
    
    
    return (
        connected  ? <Navigate to='/home' replace={true} /> :
            
            <div className={`bg-grey-medium text-grey`}>
                <TopBar />
                <div className={`flex justify-center text-left`}>
                    <div className={`flex flex-col w-96 h-screen -mb-64 py-8`}>
                        <h3 className={`font-Avenir-Bold text-2xl leading-tight select-none`}>Entrez votre mot de passe</h3>
                        <div className={`w-96 my-8`}>
                            <Input className={`w-full h-14 mb-6 text-15 sm:text-15 md:text-15 lg:text-15`}/>
                            <Button className={`h-12 text-grey-ultralight font-Avenir-Bold text-15 sm:text-15 md:text-15 lg:text-15`}
                                    onClick={() => { handleContinue() }}>
                                continuer
                            </Button>
                        </div>
                        <p className={`my-2 text-15 whitespace-pre-wrap`}>Nouveau sur Binge Watch ? <Link
                            to='/signup' className={`text-grey-light`}>S'inscrire</Link></p>
                    </div>
                </div>
            </div>
    )
}


const TopBar = () => { return (
    <div className={`flex items-center h-13 md:h-18 w-full border-b border-b-grey/20`}>
        <LogoLink/>
    </div>
)}