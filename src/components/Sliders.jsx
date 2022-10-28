import React from "react";
import { Link } from "react-router-dom";

function Sliders({ data }) {
  return (
    <div className="my-5">
      <h2 className="ml-5">Originals</h2>
      <div className="flex justify-start items-center overflow-hidden mx-2 px-3 py-7">
        <Card></Card>
        <Card></Card>
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
      <Link className={`mx-4.5 my-4.5`} to={`/detail/${movie?.id}`}>
        <div
          className={`cursor-pointer shadow-card overflow-hidden flex
        h-[75vw] sm:h-[40vw] lg:h-[28vw] xl:h-[23vw] 2xl:h-[15.5vw]
        min-h-[200px] max-h-[330px] aspect-card-vertical
        rounded-md hover:scale-100 duration-500`}
        >
          <img
            className={`object-cover ${!movie && "bg-binge/70 w-full"}`}
            src={movie?.image}
            alt={movie?.title || "pas d'image"}
          />
        </div>
      </Link>
      {/* <Link key={movie.id} to={`/${type}/${movie.id}`}>
        <div className="">Hello</div>
      </Link> */}
    </>
  );
}

export { Sliders, Card };
