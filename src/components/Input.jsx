import React from 'react';

export default function Input({className, children, ...props}) {
    
    return (
        <input className={`bg-grey-dark flex justify-center items-center sm:p-4 md:p-4 lg:p-4 rounded-md
      text-grey-light text-xs sm:text-base md:text-lg sm:tracking-wider leading-4.5
       cursor-pointer transition-all duration-400 ${className}`}/>
    )
}