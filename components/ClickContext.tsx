import React, { createContext, useContext, useReducer } from "react";
import { ReactNode } from "react";

type State = {
  count: number;
};

type Action = {
  type: "INCREMENT";
};

type ClickContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const initialState: State = {
  count: 0,
};

const ClickContext = createContext<ClickContextType | undefined>(undefined);

function clickReducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}


type ClickProviderProps = {
  children: ReactNode;
};

export const ClickProvider: React.FC<ClickProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(clickReducer, initialState);

  return (
    <ClickContext.Provider value={{ state, dispatch }}>
      {children}
    </ClickContext.Provider>
  );
};

export const useClickContext = () => {
  const context = useContext(ClickContext);
  if (context === undefined) {
    throw new Error("useClickContext must be used within a ClickProvider");
  }
  return context;
};
