import { useCallback, useEffect, useReducer } from "react";

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

const initialState = {
  data: null,
  error: null,
  status: idle,
};

function useFetchData(callback) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, status, error } = state;

  const execute = useCallback((promise) => {
    dispatch({ type: "fetching" });

    promise
      .then((data) => dispatch({ type: "done", payload: data }))
      .catch((error) => dispatch({ type: "fail", error }));
  }, []);

  const setData = useCallback((data) =>
    dispatch({ type: "done", payload: data })
  );

  return { data, status, error, execute, setData };
}

export { useFetchData };
