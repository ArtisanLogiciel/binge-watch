import React from 'react';
import Button from "./Button";
import LogoLink from "./LogoLink";


export default function HiddenBar({makeItVisible}) {
    
    return (
        <div className={`fixed top-0 z-50 w-full h-[70px] flex justify-between items-center transition-colors
                 ${makeItVisible ? 'bg-black duration-300' : 'bg-transparent duration-700'}`}>
            
            <div className={`${makeItVisible ? 'opacity-1 duration-300' : 'opacity-0 duration-700'}`}>
                <LogoLink />
            </div>
            
            <div className={`flex space-x-2 mr-4 md:space-x-4 md:mr-10`}>
                <Button className={`leading-2 py-3 px-3 sm:py-3 sm:px-3 ${makeItVisible ? 'opacity-1 duration-300' : 'opacity-0 duration-700'}`}>
                    s'inscrire
                </Button>
                <Button
                    className={`leading-2 py-3 px-3 sm:py-3 sm:px-3
                    bg-black/75 border hover:bg-white hover:text-black `}
                >
                    s'identifier
                </Button>
            </div>
        </div>
    )
}