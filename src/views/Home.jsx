import React from "react";
// import PopCorn from "../assets/images/popcorn.svg";
import BingeNavBar from "../components/BingeNavBar";
import BingeHeader from "../components/BingeHeader";

function Home() {
  return (
    <div>
      <BingeNavBar />
      <BingeHeader />
      <div className="bg-gray-900 h-screen">
        {/* <img src={PopCorn} alt="logo" className="mx-auto" /> */}
        <h1 className={`text-white text-4xl text-center`}>BingeWatch</h1>
      </div>
    </div>
  );
}
export default Home;
