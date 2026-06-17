import React, { useId, useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const [init, setInit] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [ParticlesComponent, setParticlesComponent] = useState(null);

  const generatedId = useId();

  useEffect(() => {
    const loadParticles = async () => {
      const tsparticlesReact = await import("@tsparticles/react");
      const tsparticlesSlim = await import("@tsparticles/slim");

      const Particles = tsparticlesReact.default;
      const { initParticlesEngine } = tsparticlesReact;
      const { loadSlim } = tsparticlesSlim;

      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });

      setParticlesComponent(() => Particles);
      setInit(true);
    };

    loadParticles();
  }, []);

  const particlesLoaded = async (container) => {
    if (container) {
      setLoaded(true);
    }
  };

  return (
    <div
      className={cn(
        className,
        "transition-opacity duration-1000",
        loaded ? "opacity-100" : "opacity-0"
      )}
    >
      {init && ParticlesComponent && (
        <ParticlesComponent
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "#0d47a1",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },

            fpsLimit: 60,

            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },

            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },

              collisions: {
                absorb: {
                  speed: 2,
                },
                bounce: {
                  horizontal: {
                    value: 1,
                  },
                  vertical: {
                    value: 1,
                  },
                },
                enable: false,
                maxSpeed: 50,
                mode: "bounce",
                overlap: {
                  enable: true,
                  retries: 0,
                },
              },

              color: {
                value: particleColor || "#ffffff",
                animation: {
                  h: {
                    enable: false,
                    speed: 1,
                    sync: true,
                  },
                  s: {
                    enable: false,
                    speed: 1,
                    sync: true,
                  },
                  l: {
                    enable: false,
                    speed: 1,
                    sync: true,
                  },
                },
              },

              move: {
                angle: {
                  value: 90,
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 3000,
                    y: 3000,
                  },
                },
                center: {
                  x: 50,
                  y: 50,
                  mode: "percent",
                  radius: 0,
                },
                decay: 0,
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                  enable: false,
                },
                path: {
                  enable: false,
                },
                outModes: {
                  default: "out",
                },
                speed: {
                  min: 0.1,
                  max: 1,
                },
              },

              number: {
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
                value: particleDensity || 80,
              },

              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: speed || 4,
                  sync: false,
                  startValue: "random",
                },
              },

              shape: {
                type: "circle",
              },

              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 3,
                },
                animation: {
                  enable: false,
                  speed: 5,
                },
              },

              links: {
                enable: false,
                color: {
                  value: "#fff",
                },
                distance: 100,
                opacity: 1,
                width: 1,
              },
            },

            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};