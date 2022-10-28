import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "fetching":
      return { status: "fetching", data: null, error: null };
    case "done":
      return { status: "done", data: action.payload, error: null };
    case "fail":
      return { status: "fail", data: null, error: action.error };
    default:
      throw new Error("Action non supportée");
  }
};

function useFetchData(callback) {
  const [state, dispatch] = useReducer(
    reducer,
    {
      data: null,
      error: null,
      status: "idle",
    },
    (a) => a
  );

  useEffect(() => {
    const promise = callback();

    if (!promise) return;

    dispatch({ type: "fetching" });

    promise
      .then((marvel) => dispatch({ type: "done", payload: marvel }))
      .catch((error) => dispatch({ type: "fail", error }));
  }, [callback]);

  return state;
}

export { useFetchData };
