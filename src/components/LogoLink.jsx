import React from 'react';
import {Link} from "react-router-dom";

export default function LogoLink() {
    
    return (
        <Link to="/" >
            <div className={`ml-2 md:ml-4`}>
                <img src="/images/BingeLogo.png" alt="Retour accueil" className={`h-12`}/>
            </div>
        </Link>
    )
}