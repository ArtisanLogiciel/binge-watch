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
      <Link>
        <div className={`cursor-pointer shadow-card overflow-hidden flex
        w-[75vw] sm:w-[40vw] lg:w-[28vw] xl:w-[23vw] 2xl:w-[15.5vw]
        min-w-[200px] max-w-[330px] aspect-card
        mx-4.5 my-4.5
        rounded-md hover:scale-110 duration-500`}>
                <img
                className={`object-cover`}
                src="/images/marvel-studios-the-first-10-years-banner.jpg"
                alt="cardImg"
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
