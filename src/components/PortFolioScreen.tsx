import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles, { ParticlesProps } from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from "./OptionsParticlesLetter";
import Card from "../app/Card";

import Grid from "@mui/material/Grid";

const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  if (typeof window) {
    require("pathseg");
  }
  return (
    <>
      <Particles
        // style={{ zIndex: -1 }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      {/* <Grid item style={{ zIndex: 2 }}>
        <Card
          image="sliders/developer_slide1.jpg"
          alt="test"
          description="descripcion"
          title="Titulo"
        />
      </Grid>
      <Grid item style={{ zIndex: 2 }}>
        <Card
          image="sliders/developer_slide1.jpg"
          alt="test"
          description="descripcion"
          title="Titulo"
        />
      </Grid>
      <Grid item style={{ zIndex: 2 }}>
        <Card
          image="sliders/developer_slide1.jpg"
          alt="test"
          description="descripcion"
          title="Titulo"
        />
      </Grid> */}
    </>
  );
};

export default App;
