import React from "react";

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
      className={`bg-binge flex justify-center items-center sm:p-4 md:p-4 lg:p-4 rounded-md
      uppercase text-grey-ultralight text-xs sm:text-base md:text-lg sm:tracking-wider leading-4.5
       cursor-pointer transition-all duration-400 ${className}`}
      role={"Button"}
      onClick={()=> onClick()}
    >
      <span className={`inline align-text-top h-[15px] md:h-4`}>
        {children}
      </span>
    </div>
  );
}
