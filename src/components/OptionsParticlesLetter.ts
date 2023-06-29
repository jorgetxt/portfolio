import type { ISourceOptions, SizeMode } from "tsparticles-engine";
// import { polygonPathName, loadPolygonPath } from "react-tsparticles/";

import nextSVG from "../../public/next.svg";

if (typeof window) {
  require("pathseg");
}

const options: ISourceOptions = {
  pauseOnBlur: false,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
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
    },
  },
  particles: {
    color: {
      value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"],
    },
    links: {
      color: "random",
      distance: 40,
      enable: true,
      opacity: 0.8,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      speed: 1,
    },
    number: {
      value: 200,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 2,
        sync: false,
      },
      value: { min: 0.3, max: 0.8 },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 1,
    },
  },

  // polygon: {
  //   draw: {
  //     enable: true,
  //     lineColor: "rgba(255,255,255,0.2)",
  //     lineWidth: 1,
  //   },
  //   enable: true,
  //   move: {
  //     radius: 5,
  //   },
  //   position: {
  //     x: 30,
  //     y: 10,
  //   },
  //   inline: {
  //     arrangement: "equidistant",
  //   },
  //   scale: 1,
  //   type: "inline",
  //   data: {
  //     path: "https://particles.js.org/images/google.svg",
  //     // url: nextSVG,
  //   },
  //   // url: "https://particles.js.org/images/google.svg",
  //   // url: "./public/sliders/next.svg",
  //   // url: nextSVG,
  // },

  polygon: {
    move: {
      radius: 10,
    },
    inline: {
      arrangement: "equidistant",
    },
    scale: 1,
    type: "inline",
    position: {
      x: 20,
      y: 40,
    },
    data: {
      path: "M129.6,200.8c0,62.6-26.5,78.4-80.2,105c6.9,4.6,16.2,10.1,32,17.6c41.4-19.6,81.4-45.3,81.4-113.8V65.1h-33.2V200.8z M98.1,65.1H0v28.7h65v91.9c0,42-2.5,45.9-57.1,70.5c3.8,9.6,9.3,19,16.5,27.5c61.7-27.5,73.7-41.7,73.7-89.3V65.1z",
      size: {
        width: 162.7,
        height: 323.3,
      },
    },
  },
  background: {
    color: "#000000",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

export default options;
