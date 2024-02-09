"use client";

import React, { useRef, useEffect, useState } from "react";

interface CanvasProps {
  width: number;
  height: number;
}

const Canvas: React.FC<CanvasProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      if (context) {
        contextRef.current = context;
        context.fillStyle = "rgba(255, 255, 255, 0)"; // Transparent background
        context.fillRect(0, 0, width, height);
        context.strokeStyle = "#000"; // Black color for drawing
        context.lineCap = "round";
        context.lineWidth = 2;
      }
    }
  }, [width, height]);

  const startDrawing = (e: React.MouseEvent) => {
    if (contextRef.current) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setIsDrawing(true);
    }
  };

  const draw = (e: React.MouseEvent) => {
    if (isDrawing && contextRef.current) {
      contextRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      contextRef.current.stroke();
    }
  };

  const stopDrawing = () => {
    if (contextRef.current) {
      contextRef.current.closePath();
      setIsDrawing(false);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
    />
  );
};

export default Canvas;
