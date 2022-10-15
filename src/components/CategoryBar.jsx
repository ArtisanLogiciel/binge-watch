import React from "react";
import { Link } from "react-router-dom";

function CategoryBar({ props }) {
  return (
      <div className="flex justify-center align-center space-x-15 mx-7 my-20 px-20">
        <CategoryBarCard titled={"THRILLER"}></CategoryBarCard>
        <CategoryBarCard titled={"ADVENTURE"}></CategoryBarCard>
        <CategoryBarCard titled={"S-F"}></CategoryBarCard>
        <CategoryBarCard titled={"HORROR"}></CategoryBarCard>
        <CategoryBarCard titled={"ANIME"}></CategoryBarCard>
      </div>
  )
}

function CategoryBarCard({ titled }) {
  return (
    <>
      <Link>
        <div className="bg-gray-800 shadow-card border-2 border-gray-700 rounded-xl cursor-pointer text-center overflow-hidden w-52 py-9 hover:scale-110 duration-500">
          {titled}
        </div>
      </Link>
    </>
  );
}

export default CategoryBar;
