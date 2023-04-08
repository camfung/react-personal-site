import React, { useRef, useEffect } from "react";
import p5 from "p5";

const Sketch = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    


    const sketch = new p5((p) => {
      let yoff = 0;

      p.setup = () => {
        const canvas = p.createCanvas(400, 400);
        canvas.parent(canvasRef.current);
      };

      p.draw = () => {
        p.background(0, 53,102);

        p.stroke(0);
        p.noFill();
        p.beginShape();

        let xoff = 0;
        for (let x = 0; x < p.width; x++) {
          const y = p.map(p.noise(xoff, yoff), 0, 1, 0, p.height);
          p.vertex(x, y);
          xoff += 0.025;
        }

        yoff += 0.02;

        p.endShape();
      };
    });

    return () => {
      sketch.remove();
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", height: "400px" }} ref={canvasRef}></div>
    </div>
  );
};

export default Sketch;
