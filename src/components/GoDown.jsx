import React from 'react';

export default function GoDown({offset}) {
    function godown(e) {
        e.preventDefault()
        window.scrollTo({
            left:0,
            top: parseInt(window.innerHeight, 10)-offset,
            behavior: 'smooth'
    })
        
    }
    
    return (
        <div className={`animate-bounce h-8 w-8 cursor-pointer flex justify-center items-center`} onClick={(e)=> { godown(e) }}>
            <svg className="h-8 w-8 fill-grey" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path d="M36.63,18.37a1.37,1.37,0,0,1,2.15.37,1.7,1.7,0,0,1-.3,2.06L25.4,32.64a1.37,1.37,0,0,1-1.85,0l-13-11.84a1.71,1.71,0,0,1-.29-2.06,1.37,1.37,0,0,1,2.15-.37l12.11,11ZM24.25,31.42a.38.38,0,0,1,.46,0l-.23-.21ZM11.71,19.55s0,.06,0,0Zm25.61,0h0Z"/>
            </svg>
        </div>
    )
}