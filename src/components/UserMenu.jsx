import React, {useState} from 'react';
import {Link} from "react-router-dom";


const menuList = [
    {
        path:'/parameters',
        title:"Paramètre de l'application"
    },
    {
        path:'/account',
        title:"Compte"
    },
    {
        path:'/help',
        title:"Aide"
    },
    {
        path:'/',
        title:"Se déconnecter",
        /* sera remplacé par la gestion du context*/
        onClick: ()=>{
            alert('retour accueil')
            localStorage.clear()}
    }
]



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
            {menuList.map((link, index)=> {
                return (
                    <li key={index} className={`animate-line-drop ml-6 text-grey`}>
                        <Link to={link.path}><span onClick={(e)=>{link.onClick(e) || null} }>{link.title}</span></Link>
                    </li>
                )
            })}
        </ul>
    </div>
)}