import React, { useEffect, useRef, useState } from "react";

const MovingRays = () => {
  const canvasRef = useRef(null);
  const [isRendered, setIsRendered] = useState(false);

  class Ray {
    constructor(parentNode) {
      this.parentNode = parentNode;
      this.getCanvasSize();
      this.randomize();
    }

    getCanvasSize() {
      this.canvasWidth = this.parentNode.clientWidth;
      this.canvasHeight = this.parentNode.clientHeight;
    }

    generateDecimalBetween(min, max) {
      return Math.random() * (max - min) + min;
    }

    update() {
      this.x1 += this.movementX;
      this.y1 += this.movementY;
      this.x2 += this.movementX;
      this.y2 += this.movementY;

      if (
        this.x1 < 0 ||
        this.y1 < 0 ||
        this.x1 > this.canvasWidth ||
        this.y1 > this.canvasHeight
      ) {
        this.randomize();
      }
    }

    randomize() {
      this.getCanvasSize();
      this.x1 = this.generateDecimalBetween(0, this.canvasWidth);
      this.y1 = this.generateDecimalBetween(0, this.canvasHeight);
      this.x2 = this.generateDecimalBetween(0, this.canvasWidth);
      this.y2 = this.generateDecimalBetween(0, this.canvasHeight);

      this.size = this.generateDecimalBetween(20, 25);

      const grayValue = Math.floor(this.generateDecimalBetween(0, 255));
      this.color = `rgba(${grayValue}, ${grayValue}, ${grayValue}, ${Math.random().toFixed(2)})`;

      this.movementX = this.generateDecimalBetween(-4, 4);
      this.movementY = this.generateDecimalBetween(-4, 4);
    }

    resize() {
      this.getCanvasSize();
      this.randomize();
    }
  }

  class Background {
    constructor(selector) {
      this.canvas = document.getElementById(selector);
      this.ctx = this.canvas.getContext("2d");
      this.dpr = window.devicePixelRatio;
      this.rays = [];
    }

    start() {
      this.resizeCanvas();
      this.generateRays();
      this.animate();
    }

    resizeCanvas() {
      this.canvas.width = this.canvas.parentNode.clientWidth * this.dpr;
      this.canvas.height = this.canvas.parentNode.clientHeight * this.dpr;
      this.canvas.style.width = `${this.canvas.parentNode.clientWidth}px`;
      this.canvas.style.height = `${this.canvas.parentNode.clientHeight}px`;
      this.ctx.scale(this.dpr, this.dpr);

      this.rays.forEach((ray) => ray.resize());
    }

    generateRays() {
      const numberOfRays = 300;
      for (let i = 0; i < numberOfRays; i++) {
        const ray = new Ray(this.canvas);
        this.rays.push(ray);
      }
    }

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.rays.forEach((ray) => {
        ray.update();
        this.ctx.fillStyle = ray.color;

        // Desenhar quadrado com o novo tamanho
        this.ctx.fillRect(ray.x1, ray.y1, ray.size, ray.size);
      });
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  useEffect(() => {
    if (isRendered) {
      const canvas = canvasRef.current;
      const heroParticles = new Background(canvas.id);

      heroParticles.start();

      const handleResize = () => {
        heroParticles.resizeCanvas();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isRendered]);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <canvas
      id="moving-rays"
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    ></canvas>
  );
};

export default MovingRays;