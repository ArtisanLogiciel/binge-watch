import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export default function LogoLink() {
    
    
    return (
        <Link to="/home" >
            <div className={`ml-2 md:ml-4`} title='Visite avec ou sans inscription'>
                <img src="/images/BingeLogo.png" alt="Visite avec ou sans inscription" className={`h-12`}/>
            </div>
        </Link>
    )
}