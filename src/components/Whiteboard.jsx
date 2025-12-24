// src/components/Whiteboard.jsx
import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const sessionId = useRef(uuidv4());
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 800;
    canvas.height = 400;

    const handleMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const event = {
        type: "mousemove",
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        userId,
        sessionId: sessionId.current,
      };
      console.log("MOVE:", event);
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const event = {
        type: "click",
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        userId,
        sessionId: sessionId.current,
      };
      console.log("CLICK:", event);
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("click", handleClick);

    return () => {
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="card">
      <h2>Whiteboard</h2>
      <canvas className="board" ref={canvasRef} />
    </div>
  );
};

export default Whiteboard;
