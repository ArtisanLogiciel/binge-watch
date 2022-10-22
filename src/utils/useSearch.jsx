import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const initialState = { data: undefined, searching: true };

export const useSearch = ({ endPointName = "", valToSearch = "" }) => {
  const [state, setState] = useState(initialState);

  let fullUrl =
    import.meta.env.VITE_IMDB_URL +
    endPointName +
    import.meta.env.VITE_IMDB_KEY +
    valToSearch;
  console.log("useSearch :", fullUrl);

  useEffect(() => {
    setState(initialState);

    async function get() {
      if (valToSearch) {
        axios.get(fullUrl).then((response) => {
          //console.log(response.data);
          setState({ data: response.data, searching: false });
        });
      }
    }
    get();
  }, [valToSearch]);

  return state;
};
