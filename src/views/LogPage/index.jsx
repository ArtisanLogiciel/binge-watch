import React from 'react';

export default function LogPage({setLogged}) {
    
    return (
        <div className={`bg-black text-white`}>
            <div id={'topLogBar'} className={`fixed top-0 left-0 right-0 h-16 bg-gray-600 flex items-center justify-between`}>
                <div>
                    LOGO
                </div>
                <div className={`flex text-white`}>
                    <button className={`bg-blue-500`}>s'inscrire</button>
                    <button className={`bg-black hover:bg-white hover:text-black`}
                        onClick={()=> setLogged(true)}
                    >s'identifier</button>
                </div>
            </div>
    
            <div id={'invite'} className={`h-screen pt-36 mt-16 border`}>
                <p>bla bla bla</p>
                <p>allé vient du coté obscur on a des cookies</p>
                <input type="text" placeholder={'ton email'}/>
                <p>bla bla bla</p>
            </div>
    
            <div className={`h-screen pt-36 mt-12 border`}>
                <p>bla bla bla</p>
                <p>bla bla bla</p>
            </div>
    
            <div className={`h-screen pt-36 mt-12 border`}>
                <p>bla bla bla</p>
                <p>bla bla bla</p>
            </div>
            
        </div>
    )
}