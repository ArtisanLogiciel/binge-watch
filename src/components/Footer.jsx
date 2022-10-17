import React from "react";

export default function Footer({ props }) {
  // la couleur du bg doit changer, elle est dark-navy sur /home et dark-violet sur le reste du site

  return (
    <footer
      className={`bg-dark-violet text-grey flex flex-col justify-center items-center w-full h-full pt-4 mt-0`}
    >
      <div className="bg-logo w-18 h-11 bg-no-repeat bg-transparent bg-contain mb-2.5 cursor-pointer"></div>
      <div className="flex flex-wrap justify-center my-0 mx-auto ">
        <button className="mt-3 mb-2 mx-1.5 px-1.5 text-xs leading-6 tracking-xs cursor-pointer">
          Règles de Respect de la Vie Privée
        </button>
        <button className="mt-3 mb-2 mx-1.5 px-1.5 text-xs leading-6 tracking-xs cursor-pointer">
          Modalités relatives aux cookies
        </button>
        <button className="mt-3 mb-2 mx-1.5 px-1.5 text-xs leading-6 tracking-xs cursor-pointer">
          Droits Données dans l'UE et au R-U
        </button>
        <button className="mt-3 mb-2 mx-1.5 px-1.5 text-xs leading-6 tracking-xs cursor-pointer">
          A propos de BingeWatch
        </button>
        <button className="mt-3 mb-2 mx-1.5 px-1.5 text-xs leading-6 tracking-xs cursor-pointer">
          Conditions générales d'abonnement
        </button>
        <button className="mt-3 mb-2 mx-1.5 px-1.5 text-xs leading-6 tracking-xs cursor-pointer">
          Aide
        </button>
        <button className="mt-3 mb-2 mx-1.5 px-1.5 text-xs leading-6 tracking-xs cursor-pointer">
          Appareils compatibles
        </button>
        <button className="mt-3 mb-2 mx-1.5 px-1.5 text-xs leading-6 tracking-xs cursor-pointer">
          Qui sommes-nous
        </button>
        <button className="mt-3 mb-2 mx-1.5 px-1.5 text-xs leading-6 tracking-xs cursor-pointer">
          Publicités ciblées par centre d'intérêt
        </button>
        <button className="mt-3 mb-2 mx-1.5 px-1.5 text-xs leading-6 tracking-xs cursor-pointer">
          Gérer vos préférences
        </button>
      </div>
      <div className="mt-3 mb-2 mx-1.5 px-1.5 text-xs leading-6 tracking-xs cursor-pointer">
        © BingeWatch. Tous droits réservés
      </div>
    </footer>
  );
}
