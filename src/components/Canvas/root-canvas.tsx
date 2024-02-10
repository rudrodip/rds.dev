"use client";

import useDimensions from "@src/hooks/use-dimensions";
import { useRef, useEffect, useState } from "react";

export const RootCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { height, width } = useDimensions();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </div>
  );
};
