"use client";

import { useEffect, useRef } from "react";
import { useCanvasContext } from "./console-context"

export const Display = () => {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { consoleState, setConsoleState } = useCanvasContext()

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setConsoleState((prevState) => ({
      ...prevState,
      displayPosition: {
        x: parseFloat(rect.left.toFixed(2)),
        y: parseFloat(rect.top.toFixed(2)),
        width: parseFloat(rect.width.toFixed(2)),
        height: parseFloat(rect.height.toFixed(2)),
      }
    }))
  }, [setConsoleState, ref.current])

  useEffect(() => {
    if (!canvasRef.current) return
    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = "#97C36E"
    ctx.fillRect(0, 0, consoleState.displayPosition.width, consoleState.displayPosition.height)

    const initialPlayerX = consoleState.displayPosition.x + consoleState.displayPosition.width / 2
    const initialPlayerY = consoleState.displayPosition.y + consoleState.displayPosition.height / 2

    ctx.fillStyle = "#fff"
    ctx.fillRect(initialPlayerX, initialPlayerY, 10, 10)
  }, [consoleState.displayPosition])

  return (
    <div className="w-full max-w-2xl mx-auto h-full bg-[#5F6A79] rounded-[6px] flex-cc">
      <div ref={ref} className="relative w-[66%] aspect-square bg-[#97C36E] rounded-[4px] flex-cc">
        <canvas 
          ref={canvasRef} 
          width={consoleState.displayPosition.width * 0.98} 
          height={consoleState.displayPosition.height * 0.98} 
          className="abs-center z-[2]"
        />
      </div>
    </div>
  )
}