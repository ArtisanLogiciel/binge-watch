import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({children}) {
    
    return (
        <div className={`relative bg-dark-navy flex flex-col min-h-screen`}>
            <div className={`fixed top-0 left-0 w-screen h-screen bg-no-repeat bg-main bg-center bg-cover`}/>
            <div className={`fixed top-0 z-50 w-full`}>
                <NavBar />
            </div>
            <div className={`relative mt-24 left-0 w-screen`}>
                {children}
            </div>
            <div className={`relative w-screen mt-auto mb-0`}>
                <Footer/>
            </div>
        </div>
    )
}