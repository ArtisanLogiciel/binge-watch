import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";


const menuList = [
  {
    path: "/parameters",
    title: "Paramètre de l'application",
  },
  {
    path: "/account",
    title: "Compte",
  },
  {
    path: "/help",
    title: "Aide",
  },
  {
    path: "/",
    title: "Se déconnecter",
    /* sera remplacé par la gestion du context*/
    onClick:() => {
      try {
        // alert("retour accueil");
        signOut(auth);
        localStorage.clear();
      } catch {
        alert("Error in disconnecting, please check your connection");
      }
    },
  },
];

export default function UserMenu({ props }) {
  // USE CONTEXT

  // internal states
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`absolute top-0 right-0 hover:bg-grey-darker`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? null : <Menu />}
      <div className={`relative mt-8 pr-8 z-100`}>UserMenu</div>
    </div>
  );
}

const Menu = () => {
  return (
    <div
      className={`absolute top-0 right-0 w-56 border border-grey-medium rounded bg-grey-darker`}
    >
      <ul className={`animate-appear mt-16`}>
        {menuList.map((link, index) => {
          return (
            <li key={index} className={`animate-line-drop ml-6 text-grey`}>
              <Link to={link.path}>
                <span
                  onClick={(e) => {
                    link.title === "Se déconnecter" ? link.onClick(e) : null;
                    // link.onClick(e) || null;
                  }}
                >
                  {link.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
