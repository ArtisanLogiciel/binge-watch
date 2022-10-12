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
        <div className={`fixed top-0 z-50 w-full h-[60px] lg:h-[70px] flex justify-between items-center transition-colors
                 ${makeItVisible ? 'bg-dark-navy duration-300' : 'bg-transparent duration-700'}`}>
    
            <div className={`flex-1`}>
                <div className={`${makeItVisible ? 'opacity-1 duration-300' : 'opacity-0 duration-700'} ${hidden ? 'hidden' : 'block'}`}>
                    <LogoLink/>
                </div>
            </div>
            
            <div className={`flex space-x-2 mr-4 md:space-x-4 md:mr-10`}>
                <Button className={`leading-2 py-3 px-3 sm:py-3 sm:px-3 ${makeItVisible ? 'opacity-1 duration-300' : 'opacity-0 duration-700'}
                 ${hidden ? 'hidden' : 'block' }`}
                >
                    s'inscrire
                </Button>
                <Link to={'/login'}>
                    <Button className={`leading-2 sm:p-4 md:px-5 bg-black/75 border hover:bg-white hover:text-black `}
                            onClick={null}
                >
                        s'identifier
                    </Button>
                </Link>
            </div>
        </div>
    )
}