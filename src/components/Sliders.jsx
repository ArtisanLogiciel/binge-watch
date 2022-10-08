import React from "react";
import { Link } from "react-router-dom";

function Sliders({ data }) {
  return (
    <div className="my-5">
      <h2 className="my-2 ml-5">Originals</h2>
      <div className="flex justify-center align-center overflow-y-hidden space-x-4.5 mx-2 px-3">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        {/* {data.map((movie) => {
          return <Card key={movie.id}></Card>;
        })} */}
      </div>
    </div>
  );
}

function Card({ movie }) {
  // if (!movie) {
  //   return <></>;
  // }
  return (
    <>
      <Link>
        <div className="cursor-pointer overflow-hidden w-full object-contain max-h-25 mr-2.5 rounded-md hover:scale-110 duration-500">
          <img src="src/assets/images/casa-de-papel.jpeg" alt="cardImg" />
        </div>
      </Link>
      {/* <Link key={movie.id} to={`/${type}/${movie.id}`}>
        <div className="">Hello</div>
      </Link> */}
    </>
  )
}

export {Sliders, Card};
