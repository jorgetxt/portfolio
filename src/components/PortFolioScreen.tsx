import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from "./OptionsParticlesLetter";
import "pathseg";
import Head from "next/head";

// import Grid from "@mui/material/Grid";

const PortfolioScreen = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    options;
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container, "container");
    },
    []
  );

  if (!typeof window) {
    require("pathseg");
  }

  return (
    <>
      <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/pathseg@1.2.0/pathseg.min.js"
          defer
        />
        <script
          src="https://cdn.jsdelivr.net/npm/tsparticles@1.18.3/dist/tsparticles.min.js"
          defer
        />
      </Head>
      <Particles
        // style={{ zIndex: -1 }}
        // id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          detectRetina: false,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 40,
                duration: 2,
                opacity: 8,
                size: 6,
                speed: 3,
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              slow: {
                active: false,
                radius: 0,
                factor: 1,
              },
            },
          },
          particles: {
            color: {
              value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"],
            },
            lineLinked: {
              blink: false,
              color: "random",
              consent: false,
              distance: 40,
              enable: true,
              opacity: 0.8,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: false,
                area: 2000,
              },
              limit: 0,
              value: 200,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.3,
                speed: 2,
                sync: false,
              },
              random: false,
              value: 0.8,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: {
                height: 800,
                replaceColor: true,
                src: "https://particles.js.org/images/github.svg",
                width: 800,
              },
              polygon: {
                sides: 5,
              },
              stroke: {
                color: "#000000",
                width: 0,
              },
              type: "circle",
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false,
              },
              random: true,
              value: 1,
            },
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "rgba(255,255,255,0.2)",
              lineWidth: 0.5,
            },
            enable: true,
            move: {
              radius: 5,
            },
            position: {
              x: 30,
              y: 10,
            },
            inline: {
              arrangement: "equidistant",
            },
            scale: 10,
            type: "inline",
            url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
          },
          background: {
            color: "#000000",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </>
  );
};

export default PortfolioScreen;
