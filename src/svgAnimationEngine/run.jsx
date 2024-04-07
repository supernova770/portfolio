import { React, useEffect, useRef } from "react";
import _ from "lodash";

let height = window.innerHeight,
  width = window.innerWidth;

export const ParticleAnimation = () => {
  const partRef = useRef(null);

  useEffect(() => {
    //useRef to prevent problems with React.
    let svg = partRef.current;
  
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

    let colors = ["#f9f3bd", "#034ff4", "#050f1e"];
    class Particle {
      constructor() {
        this.r = _.random(1, 5);
        this.d = this.r * 2;
        this.x = _.random(this.r, width - this.d);
        this.y = _.random(this.r, height - this.d);
        this.col = colors[_.random(0, 3)];
        this.mass = 10 * this.r;

        this.el = createSvgNode("circle", {
          cx: this.x,
          cy: this.y,
          r: this.r,
          fill: this.col,
        });

        this.vX = _.random(-10, 10) / 15;
        this.vY = _.random(-10, 10) / 15;
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
      draw() {
        this.el.setAttribute("cx", this.x);
        this.el.setAttribute("cy", this.y);
      }
    }

    // create particles
    let particles = [];
    let maxParts = 25;

    if (width < 350) {
      maxParts = 10;
    }

    function createParticles() {
      for (let i = 0; i < maxParts; i++) {
        particles.push(new Particle());
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
