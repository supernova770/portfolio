import { React, useLayoutEffect, useRef } from "react";
import _ from "lodash";

let height = window.innerHeight,
  width = window.innerWidth;

export const ParticleAnimation = () => {
  //useRef to prevent problems with React.
  const partRef = useRef(null);
  
  useLayoutEffect(() => {
    
    let svg = partRef.current,
    colors = ["#f9f3bd", "#034ff4", "#050f1e"];
    const createSvgNode = (n, attributes) => {
      n = document.createElementNS("http://www.w3.org/2000/svg", n);
      for (let a in attributes) {
        n.setAttributeNS(
          null,
          a.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()),
          attributes[a]
        );
      }
      svg.appendChild(n);
      return n;
    };

    class Circle {
      constructor() {
        this.r = _.random(1, 7);
        this.d = this.r * 2;
        this.x = _.random(this.r, width - this.d);
        this.y = _.random(this.r, height - this.d);
        this.col = colors[_.random(0, 3)];
        this.vX = _.random(-10, 10) / 15;
        this.vY = _.random(-10, 10) / 15;
        this.op = Math.random();
        this.el = createSvgNode("circle", {
          cx: this.x,
          cy: this.y,
          r: this.r,
          fill: this.col,
          opacity: this.op
        });
      }

      draw() {
        this.el.setAttribute("cx", this.x);
        this.el.setAttribute("cy", this.y);
      }

      update() {
        this.x += this.vX;
        this.y += this.vY;

        // Outside bounderies
        if (this.x <= this.r || this.x + this.r > width) {
          this.x = this.x <= this.r ? this.r : width - this.r;
          this.vX *= -1;
        }
        if (this.y <= this.r || this.y + this.r > height) {
          this.y = this.y <= this.r ? this.r : height - this.r;
          this.vY *= -1;
        }
        this.draw();
      }
    }

    // create particles
    let particles = [];
    let maxParts = 24;

    if (width < 350) {
      maxParts = 14;
    }

    function createParticles() {
      for (let i = 0; i < maxParts; i++) {
        particles.push(new Circle());
      }
    }

    // animation loop
    const loop = () => {
      for (let i = 0; i < maxParts; i++) {
        particles[i].update();
      }
      window.requestAnimationFrame(loop);
    };

    createParticles();

    //Start movement
    loop();
    
  }, []);

  return (
    <svg
      style={{ position: "absolute" }}
      height={height}
      width={width}
      ref={partRef}
    />
  );
};
