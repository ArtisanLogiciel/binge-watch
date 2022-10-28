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
        /*axios.get(fullUrl)
                    .then(response => {
                        //console.log(response.data);
                        setState({data: response.data, searching: false});
                    })*/

        // pour les tests
        console.log("FETCH", fullUrl);
        setState({
          data: [
            { id: "123", title: "hey", image: null },
            { id: "456", title: "ho", image: null },
            { id: "789", title: "toto", image: null },
          ],
          searching: false,
        });
      }
    }
    get();
  }, [valToSearch]);

  return state;
};
