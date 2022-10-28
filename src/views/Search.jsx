import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Card, Sliders } from "../components/Sliders";
import Cross from "../assets/cross.svg";
import { useSearch } from "../utils/useSearch";

function Search() {
  console.warn("SEARCH");
  const [focus, setFocus] = useState(false);
  const [valToSearch, setValToSearch] = useState("");

  function handleChange(e) {
    setValToSearch(e.target.value);
  }

  return (
    <Layout
    //onClick={()=>setFocus(false)}
    >
      <div
        className={`fixed top-18 h-25 w-screen bg-grey-dark z-20 overflow-hidden`}
      >
        <div
          className={`absolute h-56 w-screen bg-gradient-to-t from-grey-light/25 via-grey-light/15 transition-all duration-500 ${
            focus ? "-top-25" : "top-0"
          }`}
        />
        <input
          type="text"
          onFocus={(e) => {
            e.preventDefault();
            setFocus(true);
          }}
          placeholder="Titre, personnage ou genre"
          className={`absolute top-0 h-25 w-full px-[3.5vw] bg-transparent
                           text-5xl font-bold leading-loose text-white opacity-50 focus:opacity-80 transition-all duration-500
                           focus:outline-none
                           `}
          onChange={(e) => handleChange(e)}
          value={valToSearch}
        />
        <div
          className={`absolute right-[3.5vw] top-6 animate-appear z-30 ${
            valToSearch || "animate-disappear"
          }`}
        >
          <button
            className={`h-12 w-12 text-white ${
              focus ? "opacity-80" : "opacity-50"
            } transition-all duration-500 `}
            onClick={() => {
              setValToSearch("");
            }}
            role="clear"
            aria-hidden={valToSearch === ""}
            aria-label="Effacer le champ de recherche"
          >
            <svg
              stroke="none"
              fill="currentcolor"
              version="1.1"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.9 16.239l8.833-9.085c.255-.266.629-.404 1.01-.404.248 0 .491.056.706.175.641.338.817 1.121.301 1.649l-9.081 9.342 9.08 9.312c.517.53.343 1.311-.313 1.657-.546.287-1.276.2-1.7-.231l-8.835-9.062-8.838 9.064c-.421.428-1.152.516-1.699.229-.655-.346-.829-1.127-.312-1.657l9.08-9.312-9.08-9.341c-.516-.529-.34-1.312.313-1.657.202-.112.445-.168.693-.168.382 0 .755.138 1.007.4l8.836 9.089z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`py-43 px-[3.5vw] flex flex-wrap h-full mx-auto`}
        onClick={() => setFocus(false)}
      >
        {valToSearch.length > 1 ? (
          <Results valToSearch={valToSearch} />
        ) : (
          <>liste des catégories</>
        )}
      </div>
    </Layout>
  );
}

export default React.memo(Search);

function Results({ valToSearch }) {
  const { data, searching } = useSearch({
    endPointName: "Search",
    valToSearch: valToSearch,
  });

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  return data ? (
    <>
      {data.results?.map((res, index) => {
        return (
          <div key={index}>
            <Card movie={res} />
          </div>
        );
      })}
    </>
  ) : (
    <>NO RESULT</>
  );
}
