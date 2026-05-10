import React, { useReducer, ReactNode } from "react";
import { AppContext } from "./AppContext";

// State structure define karein
interface AppState {
  theme: "light" | "dark";
}

type Action = { type: "TOGGLE_THEME" };

const initialState: AppState = { theme: "light" };

const themeReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { 
        ...state, 
        theme: state.theme === 'light' ? 'dark' : 'light' 
      };
    default:
      return state;
  }
};

export default function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}