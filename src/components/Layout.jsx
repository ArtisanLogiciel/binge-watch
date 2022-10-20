import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";


/**
 * Additional classname is used to style the main container that contains children
 *
 * @param children
 * @param classname
 * @returns {JSX.Element}
 * @constructor
 */
export default function Layout({children, classname}) {
    
    return (
        <div className={`relative bg-dark-navy flex flex-col min-h-screen pt-[72px]`}>
            <div className={`fixed top-0 left-0 w-screen h-screen bg-no-repeat bg-main bg-center bg-cover`}/>
            <div className={`fixed top-0 z-50 w-full`}>
                <NavBar />
            </div>
            <main className={`relative left-0 w-screen grow ${classname}`}>
                {children}
            </main>
            <div className={`relative w-screen mt-auto mb-0`}>
                <Footer/>
            </div>
        </div>
    )
}