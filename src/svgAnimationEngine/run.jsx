import { React, useEffect, useRef } from "react";
import _ from "lodash";

// view dimensions
let height = window.innerHeight,
  width = window.innerWidth;

export const ParticleAnimation = () => {
  const partRef = useRef(null);

  useEffect(() => {
	//useRef to prevent problems with React.
    let svg = partRef.current;
    const setSvgSize = (w, h) => {
      svg.setAttribute("width", width);
      svg.setAttribute("height", height);
    };

    // function to create svg nodes
    const createNode = (n, attrs) => {
      n = document.createElementNS("http://www.w3.org/2000/svg", n);
      for (let a in attrs) {
        n.setAttributeNS(
          null,
          a.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()),
          attrs[a]
        );
      }
      svg.appendChild(n);
      return n;
    };
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
    // particle constructor
	let colors = ["#f9f3bd", "#034ff4", "#050f1e"]

    class Particle {
      constructor() {
        this.r = _.random(1, 5);
        this.d = this.r * 2;
        this.x = _.random(this.r, width - this.d);
        this.y = _.random(this.r, height - this.d);
        this.col = colors[getRandomInt(0, 3)];
        this.mass = 10 * this.r;
        // create el
        this.el = createNode("circle", {
          cx: this.x,
          cy: this.y,
          r: this.r,
          fill: this.col,
        });
        // vector
        this.vx = _.random(-10, 10) / 15;
        this.vy = _.random(-10, 10) / 15;
      }
      get vector() {
        return [this.vx, this.vy];
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        // Outside bounderies
        if (this.x <= this.r || this.x + this.r > width) {
          this.x = this.x <= this.r ? this.r : width - this.r;
          this.vx *= -1;
        }
        if (this.y <= this.r || this.y + this.r > height) {
          this.y = this.y <= this.r ? this.r : height - this.r;
          this.vy *= -1;
        }
        // draw and update the position
        this.draw();
      }
      draw() {
        this.el.setAttribute("cx", this.x);
        this.el.setAttribute("cy", this.y);
        this.collision = false;
      }
    }

    // create particles
    let particles = [];
    let maxParticles = 25;

	if(width < 350) {
		maxParticles = 10
	}

    function createParticles() {
      for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
      }
    }

    // animation loop
    const loop = () => {
      // page resizing
      width = window.innerWidth;
      height = window.innerHeight;
      setSvgSize(width, height);
      // looping through particles and update position
      for (let i = 0; i < maxParticles; i++) {
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
