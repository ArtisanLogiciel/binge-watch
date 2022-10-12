import React, {useEffect, useState} from "react";

/**
 * Default style :
 * bg-binge p-4 rounded-md uppercase cursor-pointer transition-all duration-400
 * Style can be overridden or extended
 *
 * @param onClick
 * @param className
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export default function Button({ onClick, className, children }) {
  
  return (
    <div
      className={`flex justify-center items-center p-2
      rounded bg-binge cursor-pointer transition-all duration-400 select-none
      uppercase text-grey-ultralight text-xs sm:text-base md:text-lg sm:tracking-wider leading-4.5
      ${className}`}
      role={"Button"} onClick={onClick}
    >
      <span className={`inline align-text-top`}>
         {/*h-[15px] md:h-4*/}
        {children}
      </span>
    </div>
  );
}
