import { configureStore } from "@reduxjs/toolkit";

// reducer.js
export const initialState = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
  counter: 22,
  interchange: true,
  isManual: true,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_MANUAL":
      return {
        ...state,
        isManual: !state.isManual,
      };
    case "SET_FROM_LANGUAGE":
      if (state.toLanguage === action.payload) {
        return state;
      }
      return {
        ...state,
        fromLanguage: action.payload,
        result: "",
        loading: true,
      };
    case "SET_TO_LANGUAGE":
      if (state.fromLanguage === action.payload) {
        return state;
      }
      return {
        ...state,
        toLanguage: action.payload,
        result: "",
        loading: true,
      };

    case "SET_FROM_TEXT":
      if (action.payload === "") {
        return {
          ...state,
          loading: false,
          fromText: action.payload,
          result: "",
        };
      }
      return {
        ...state,
        fromText: action.payload,
        // loading: true,
      };
    case "SET_TEXT":
      if (action.payload === null) {
        return {
          ...state,
          loading: false,
        };
      }
      return {
        ...state,
        result: action.payload,
        loading: false,
      };

    case "INTERCHANGE_LANGUAGES":
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
        result: state.fromText,
        fromText: state.result,
        interchange: !state.interchange,
      };
    case "COUNT_DOWN":
      if(state.counter === 0) {
        return state  
      }
      return {
        ...state,
        counter: state.counter - 1,
        loading: false,

      };
    case "RESET_COUNT":
      return {
        ...state,
        counter: 22,
      };

    default:
      return state;
  }
};

const store = configureStore({
  reducer: counterReducer,
});

export default store;
