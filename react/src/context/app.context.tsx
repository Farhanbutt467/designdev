"use client";

import { createContext, useCallback, useContext, useReducer } from "react";

type Action =
  | { type: "setMode"; value: string }
  | { type: "setDirection"; value: string }
  | { type: "setLayout"; value: string }
  | { type: "setSwitcherDir"; value: string }
  | { type: "setStopScrollTop"; value: boolean };

const initialState = {
  mode: "",
  direction: "ltr",
  layout: "",
  switcherDir: "right",
  stopScrollTop: false,
};

const reducer = (
  state: typeof initialState,
  action: Action
): typeof initialState => {
  switch (action.type) {
    case "setMode":
      return { ...state, mode: action.value };
    case "setDirection":
      return { ...state, direction: action.value };
    case "setLayout":
      return { ...state, layout: action.value };
    case "setSwitcherDir":
      return { ...state, switcherDir: action.value };
    case "setStopScrollTop":
      return { ...state, stopScrollTop: action.value };
    default:
      throw new Error();
  }
};

const useMainContext = (state: typeof initialState) => {
  const [mainState, dispatch] = useReducer(reducer, state);

  const setMode = useCallback((data: string) => {
    dispatch({
      type: "setMode",
      value: data,
    });
  }, []);

  const setDirection = useCallback((data: string) => {
    dispatch({
      type: "setDirection",
      value: data,
    });

    document.documentElement.dir = data == "rtl" ? "rtl" : "ltr";
  }, []);

  const setLayout = useCallback((data: string) => {
    dispatch({
      type: "setLayout",
      value: data,
    });

    if (data == "box") {
      (document.body as HTMLBodyElement).classList.add("box-layout");
    } else {
      if (
        document.body &&
        (document.body as HTMLBodyElement).classList.contains("box-layout")
      ) {
        (document.body as HTMLBodyElement).classList.remove("box-layout");
      }
    }
  }, []);

  const setSwitcherDir = useCallback((data: string) => {
    dispatch({
      type: "setSwitcherDir",
      value: data,
    });
  }, []);

  const setStopScrollTop = useCallback((data: boolean) => {
    dispatch({
      type: "setStopScrollTop",
      value: data,
    });
  }, []);

  return {
    mainState,
    setMode,
    setDirection,
    setLayout,
    setSwitcherDir,
    setStopScrollTop,
  };
};

type useMainContextType = ReturnType<typeof useMainContext>;

export const AppContext = createContext<useMainContextType>({
  mainState: initialState,
  setMode: () => {},
  setDirection: () => {},
  setLayout: () => {},
  setSwitcherDir: () => {},
  setStopScrollTop: () => {},
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AppContext.Provider value={useMainContext(initialState)}>
      {children}
    </AppContext.Provider>
  );
};

type UseModeType = {
  mode: string;
  setMode: (data: string) => void;
};

export const useMode = (): UseModeType => {
  const {
    mainState: { mode },
    setMode,
  } = useContext(AppContext);
  return { mode, setMode };
};

type UseDirectionType = {
  direction: string;
  setDirection: (data: string) => void;
};

export const useDirection = (): UseDirectionType => {
  const {
    mainState: { direction },
    setDirection,
  } = useContext(AppContext);
  return { direction, setDirection };
};

type UseLayoutType = {
  layout: string;
  setLayout: (data: string) => void;
};

export const useLayout = (): UseLayoutType => {
  const {
    mainState: { layout },
    setLayout,
  } = useContext(AppContext);
  return { layout, setLayout };
};

type UseSwitcherDirType = {
  switcherDir: string;
  setSwitcherDir: (data: string) => void;
};

export const useSwitcherDir = (): UseSwitcherDirType => {
  const {
    mainState: { switcherDir },
    setSwitcherDir,
  } = useContext(AppContext);
  return { switcherDir, setSwitcherDir };
};

type UseStopScrollTopType = {
  stopScrollTop: boolean;
  setStopScrollTop: (data: boolean) => void;
};

export const useStopScrollTop = (): UseStopScrollTopType => {
  const {
    mainState: { stopScrollTop },
    setStopScrollTop,
  } = useContext(AppContext);
  return { stopScrollTop, setStopScrollTop };
};
