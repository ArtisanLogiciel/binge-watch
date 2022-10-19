import React from 'react';
import NavBar from "./NavBar";

export default function Layout({children}) {
    
    return (
        <div className={`relative bg-dark-navy`}>
            <div className={`fixed top-0 left-0 w-screen h-screen bg-no-repeat bg-main bg-center bg-cover`}/>
            <div className={`fixed top-0 z-50 w-full`}>
                <NavBar />
            </div>
            <div className={`absolute mt-24 left-0 w-screen`}>
                {children}
            </div>
        </div>
    )
}