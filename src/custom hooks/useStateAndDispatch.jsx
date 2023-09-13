import { useReducer } from "react";

const initialState = {
  favorites: [],
  currentHymnNumber: "157",
};

const reducer = (state, action) => {
  const hymnNumber = action.payload.hymnNumber;
  switch (action.type) {
    case "changeCurrent":
      return { ...state, currentHymnNumber: hymnNumber };
    case "add":
      return { ...state, favorites: [...favorites, hymnNumber] };
    case "remove":
      return {
        ...state,
        favorites: favorites.filter((hymn) => hymn !== hymnNumber),
      };
    default:
      return { ...state };
  }
};

const useStateAndDispatch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

export default useStateAndDispatch;
