import React, { createContext, useReducer } from "react";

interface levelInterface {
  name: string;
  number: number;
}

interface keyInterface {
  right: boolean;
  left: boolean;
  up: boolean;
  down: boolean;
  lastKey: "left" | "right" | "up" | "down" | "";
}

interface siteInterface {
  basic: boolean;
}

interface StateInterface {
  level: levelInterface;
  key: keyInterface;
  site: siteInterface;
}

type StateAction =
  | {
      type: "changeLevelStatus";
      payload: levelInterface;
    }
  | {
      type: "changeKeyStatus";
      payload: keyInterface;
    }
  | {
      type: "changeSiteStatus";
      payload: siteInterface;
    };

const initialState: StateInterface = {
  level: {
    name: "",
    number: 1,
  },
  key: {
    right: false,
    left: false,
    up: false,
    down: false,
    lastKey: "",
  },
  site: {
    basic: false,
  },
};

export const Context = createContext([
  initialState,
  (action: StateAction) => {},
] as const);

export const Store: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: StateInterface, action: StateAction): StateInterface => {
      switch (action.type) {
        case "changeSiteStatus":
          return { ...state, site: action.payload };
        case "changeKeyStatus":
          return { ...state, key: action.payload };
        case "changeLevelStatus":
          return { ...state, level: action.payload };

        default:
          return state;
      }
    },
    initialState
  );

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
