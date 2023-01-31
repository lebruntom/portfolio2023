import React, { createContext, useReducer } from "react";

// export interface pathInterface {
//   depth_level: number
//   siteId: number
// }

interface levelInterface {
  name: string;
  number: number;
}

interface keyInterface {
  right: {
    pressed: boolean;
  };
  left: {
    pressed: boolean;
  };
  up: {
    pressed: boolean;
  };
  down: {
    pressed: boolean;
  };
  lastKey: "left" | "right" | "up" | "down" | "";
}

interface StateInterface {
  level: levelInterface;
  key: keyInterface;
}

type StateAction =
  | {
      type: "changeLevelStatus";
      payload: levelInterface;
    }
  | {
      type: "changeKeyStatus";
      payload: keyInterface;
    };

const initialState: StateInterface = {
  level: {
    name: "Home",
    number: 1,
  },
  key: {
    right: {
      pressed: false,
    },
    left: {
      pressed: false,
    },
    up: {
      pressed: false,
    },
    down: {
      pressed: false,
    },
    lastKey: "",
  },
  // selectedOrganizationId: 0,
  // selectedSite: { path: [] },
};

export const Context = createContext([
  initialState,
  (action: StateAction) => {},
] as const);

export const Store: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: StateInterface, action: StateAction): StateInterface => {
      switch (action.type) {
        // case "changeOrganization":
        //   return {
        //     ...state,
        //     selectedOrganizationId: action.payload,
        //     selectedSite: { path: [] },
        //   }
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
    <Context.Provider value={[state, dispatch]}>
      {" "}
      {/* <- this value is gonna be Global state */}
      {children}
    </Context.Provider>
  );
};
