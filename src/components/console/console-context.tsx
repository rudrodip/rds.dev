"use client";
import { createContext, useContext, useState } from "react";

type ConsoleStateType = {
  on: boolean;
  sound: boolean;
  music: boolean;
  playerX: number;
  playerY: number;
  displayPosition: {
    x: number,
    y: number,
    width: number,
    height: number,
  }
};

const CanvasContext = createContext<{
  consoleState: ConsoleStateType;
  setConsoleState: React.Dispatch<React.SetStateAction<ConsoleStateType>>;
}>({
  consoleState: {
    on: false,
    sound: true,
    music: true,
    playerX: 0,
    playerY: 0,
    displayPosition: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }
  },
  setConsoleState: () => {},
});

export const useCanvasContext = () => useContext(CanvasContext);

export const CanvasProvider = ({ children }: { children: React.ReactNode }) => {
  const [consoleState, setConsoleState] = useState<ConsoleStateType>({
    on: false,
    sound: true,
    music: true,
    playerX: 0,
    playerY: 0,
    displayPosition: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }
  });

  return (
    <CanvasContext.Provider value={{ consoleState, setConsoleState }}>
      {children}
    </CanvasContext.Provider>
  );
};