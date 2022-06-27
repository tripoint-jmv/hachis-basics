import React, { useEffect, useRef } from "react";

const Canvas = ({ draw, height, width }) => {
  const canvasRef = useRef();

  useEffect(() => {
    if (canvasRef.current) {
      const canvasContext = canvasRef.current.getContext("2d");
      draw(canvasContext);
    }
  }, [draw]);

  return <canvas ref={canvasRef} height={height} width={width} />;
};

export default Canvas;
