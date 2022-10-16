import React, {useState} from 'react';

export default function UserMenu({props}) {
    // USE CONTEXT
    
    // internal states
    const [hovered, setHovered] = useState(false)
    
    return (
        <div className={`absolute top-0 right-0 hover:bg-grey-darker`}
             onMouseEnter={()=> setHovered(true)}
             onMouseLeave={()=> setHovered(false)}
        >
            {!hovered ? null : <Menu />}
            <div className={`relative mt-8 pr-8 z-100`}>UserMenu</div>
        </div>
    )
}

const Menu = () => {return (
    <div className={`absolute top-0 right-0 w-56 border border-grey-medium rounded bg-grey-darker`}>
        <ul className={`animate-appear mt-16`}>
            <li className={`animate-line-drop`}>Paramètre de l'application</li>
            <li className={`animate-line-drop`}>compte</li>
            <li className={`animate-line-drop`}>Aide</li>
            <li className={`animate-line-drop`}>Se déconnecter</li>
        </ul>
    </div>
)}