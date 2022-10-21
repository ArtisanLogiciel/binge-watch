import React, {useEffect, useState} from 'react';
import Button from "./Button";
import LogoLink from "./LogoLink";
import {Link} from "react-router-dom";


export default function HiddenBar({makeItVisible}) {
    const [hidden, setHidden] = useState(false)
    
    useEffect(()=> {
        if (!makeItVisible) {setTimeout(()=>{setHidden(true)}, 500); return}
        setHidden(false)
    }, [makeItVisible])
    
    
    
    return (
        <div className={`fixed top-0 z-50 w-full h-[60px] sm:h-[70px] flex justify-between items-center transition-colors
                 ${makeItVisible ? 'bg-dark-navy duration-300' : 'bg-transparent duration-700'}`}>
    
            <div className={`flex-1`}>
                <div className={`${makeItVisible ? 'opacity-1 duration-300' : 'opacity-0 duration-700'} ${hidden ? 'hidden' : 'block'}`}>
                    <LogoLink/>
                </div>
            </div>
            
            <div className={`flex space-x-2 mr-4 md:space-x-4 md:mr-10`}>
    
                <div className={`${makeItVisible ? 'opacity-1 duration-300' : 'opacity-0 duration-700'}`}>
                    <Button className={`leading-2 py-2.5 px-3 sm:py-4 sm:px-5 border border-binge ${hidden ? 'hidden' : 'block'}`}>
                        s'inscrire
                    </Button>
                </div>
                <Link to={'/login'}>
                    <Button className={`leading-2 py-2.5 px-3 sm:py-4 sm:px-5 bg-black/75 border hover:bg-white hover:text-black `}
                            onClick={null}
                >
                        s'identifier
                    </Button>
                </Link>
            </div>
        </div>
    )
}