import React from "react";
// import PopCorn from "../assets/images/popcorn.svg";
import NavBar from "../components/NavBar";
import BingeHeader from "../components/BingeHeader";
import {Sliders} from "../components/Sliders";
import CategoryBar from "../components/CategoryBar";
import Button from "../components/Button";



function Home({logout}) {
  return (
    <div>
      <NavBar />
      <BingeHeader />
      {/* <div className="bg-gray-900 h-screen flex justify-between">
        <Button
          className={`w-40 h-28 bg-gray-700 text-center mx-2 hover:bg-gray-500`}
        >
          Action
        </Button>
        <Button
          className={`w-40 h-28 bg-gray-700 text-center mx-2 hover:bg-gray-500`}
        >
          Aventure
        </Button>
        <Button
          className={`w-40 h-28 bg-gray-700 text-center mx-2 hover:bg-gray-500`}
        >
          Science fiction
        </Button>
        <Button
          className={`w-40 h-28 bg-gray-700 text-center mx-2 hover:bg-gray-500`}
        >
          Western
        </Button>
      </div> */}
      <CategoryBar />
      <Sliders />
      <Sliders />
      <h1 className={`text-white text-4xl text-center`}>BingeWatch</h1>
        <div onClick={()=>{logout()}}>VERSION TEST : Cliquer pour déconnecter</div>
    </div>
  );
}
export default Home;
