import React from "react";

export default function Button({ onClick, className, children }) {
  return (
    <div
      className={`bg-binge p-4 rounded uppercase ${className}`}
      role={"Button"}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
