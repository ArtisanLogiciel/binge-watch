import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export default function LogoLink({disabled}) {
    const [hidden, setHidden] = useState(false)
    
    useEffect(()=> {
        if (disabled) {setTimeout(()=>{setHidden(true)}, 500); return}
        setHidden(false)
    }, [disabled])
    
    
    return (
        <Link to="/" className={`${hidden ? 'hidden' : 'block'}`} >
            <div className={`ml-2 md:ml-4`}>
                <img src="/images/BingeLogo.png" alt="Retour accueil" className={`h-12`}/>
            </div>
        </Link>
    )
}