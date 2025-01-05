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
      this.lineWidth = this.generateDecimalBetween(1, 4);

      const colorOptions = [
        `rgba(0, 0, 0, ${Math.random().toFixed(2)})`, // Preto
        `rgba(200, 0, 200, ${Math.random().toFixed(2)})`, // Lilás
        `rgba(${Math.floor(this.generateDecimalBetween(200, 255))}, ${Math.floor(
          this.generateDecimalBetween(200, 255)
        )}, ${Math.floor(this.generateDecimalBetween(200, 255))}, ${Math.random().toFixed(2)})`, // Branco com variações
      ];
      this.color = colorOptions[Math.floor(Math.random() * colorOptions.length)];

      this.movementX = this.generateDecimalBetween(-10, 10); // Velocidade horizontal ainda maior
      this.movementY = this.generateDecimalBetween(-10, 10); // Velocidade vertical ainda maior

      this.zigzagPattern = this.createZigzagPattern();
    }

    createZigzagPattern() {
      const segments = Math.floor(this.generateDecimalBetween(5, 10));
      const pattern = [];
      let startX = this.x1;
      let startY = this.y1;
      const deltaX = (this.x2 - this.x1) / segments;
      const deltaY = (this.y2 - this.y1) / segments;

      for (let i = 0; i <= segments; i++) {
        const offsetX = this.generateDecimalBetween(-30, 30);
        const offsetY = this.generateDecimalBetween(-30, 30);
        const point = {
          x: startX + deltaX * i + offsetX,
          y: startY + deltaY * i + offsetY,
        };
        pattern.push(point);
      }
      return pattern;
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
      const numberOfRays = 70;
      for (let i = 0; i < numberOfRays; i++) {
        const ray = new Ray(this.canvas);
        this.rays.push(ray);
      }
    }

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.rays.forEach((ray) => {
        ray.update();
        this.ctx.beginPath();
        this.ctx.moveTo(ray.x1, ray.y1);

        ray.zigzagPattern.forEach((point) => {
          this.ctx.lineTo(point.x, point.y);
        });

        this.ctx.lineTo(ray.x2, ray.y2);
        this.ctx.lineWidth = ray.lineWidth;
        this.ctx.strokeStyle = ray.color;
        this.ctx.stroke();
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
