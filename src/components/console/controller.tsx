"use client";

import { useEffect } from "react";
import { useCanvasContext } from "./console-context";

export const Controller = () => {
  const { consoleState, setConsoleState } = useCanvasContext();

  // add event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "w":
          setConsoleState((prevState) => ({
            ...prevState,
            playerY: prevState.playerY > prevState.displayPosition.y ? prevState.playerY - 1 : prevState.playerY,
          }));
          break;
        case "a":
          setConsoleState((prevState) => ({
            ...prevState,
            playerX: prevState.playerX > prevState.displayPosition.x ? prevState.playerX - 1 : prevState.playerX,
          }));
          break;
        case "s":
          setConsoleState((prevState) => ({
            ...prevState,
            playerY: prevState.playerY < prevState.displayPosition.y + prevState.displayPosition.height ? prevState.playerY + 1 : prevState.playerY,
          }));
          break;
        case "d":
          setConsoleState((prevState) => ({
            ...prevState,
            playerX: prevState.playerX < prevState.displayPosition.x + prevState.displayPosition.width ? prevState.playerX + 1 : prevState.playerX,
          }));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setConsoleState]);
  
  return (
    <div className="w-full h-full flex items-center">
      <div className="w-full h-full br-console flex-cc text-zinc-300">
        <div className="relative w-1/2 aspect-square flex-cc">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 console-btn-sm">
            <span>W</span>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 console-btn-sm">
            <span>A</span>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 console-btn-sm">
            <span>D</span>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 console-btn-sm">
            <span>S</span>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full flex-cc">
        <div className="w-32 h-12 flex items-center justify-between">
          <div
            onClick={() => {
              setConsoleState((prevState) => ({
                ...prevState,
                playerX: prevState.playerX - 1,
              }));
            }}
            className="w-14 h-14 rounded-full border br-console text-zinc-600 flex items-center justify-center"
          >
            <span>K</span>
          </div>
          <div className="w-14 h-14 rounded-full border br-console text-zinc-600 flex items-center justify-center">
            <span>L</span>
          </div>
        </div>
      </div>
    </div>
  );
};
