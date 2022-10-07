import React from "react";
// import PopCorn from "../assets/images/popcorn.svg";
import BingeNavBar from "../components/BingeNavBar";
import BingeHeader from "../components/BingeHeader";
import Button from "../components/Button";

function Home() {
  return (
    <div>
      <BingeNavBar />
      <BingeHeader />
      <div className="bg-gray-900 h-screen flex justify-between">
        {/* <img src={PopCorn} alt="logo" className="mx-auto" /> */}
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
      </div>
      <h1 className={`text-white text-4xl text-center`}>BingeWatch</h1>
    </div>
  );
}
export default Home;
