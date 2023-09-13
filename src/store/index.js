import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = {
  favorites: [],
  currentHymnNumber: "1",
  currentItem: "lyrics"
};

const reducer = (state = initialState, action) => {
  const favorites = state.favorites;
  switch (action.type) {
    case "changeItem": return {...state, currentItem: action.payload.item}
    case "changeCurrent":
      return { ...state, currentHymnNumber: action.payload.hymnNumber };
    case "add":
      return { ...state, favorites: [...favorites, action.payload.hymnNumber] };
    case "remove":
      return {
        ...state,
        favorites: favorites.filter(
          (hymn) => hymn !== action.payload.hymnNumber
        ),
      };
    default:
      return { ...state };
  }
};

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
 
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)

  export {store, persistor}
