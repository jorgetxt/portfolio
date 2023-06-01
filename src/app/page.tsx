"use client";

import Header from "./Header";
import Slider1 from "./Slider1";
import ImageSl1 from "../../public/sliders/developer_slide1.jpg";
import Card from "./Card";

import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item xs={12} style={{ overflow: "hidden" }}>
          <Slider1 />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
        minHeight="60vh"
        padding={2}
      >
        <Grid item>
          <Card
            image="sliders/developer_slide1.jpg"
            alt="test"
            description="descripcion"
            title="Titulo"
          />
        </Grid>
        <Grid item>
          <Card
            image="sliders/developer_slide1.jpg"
            alt="test"
            description="descripcion"
            title="Titulo"
          />
        </Grid>
        <Grid item>
          <Card
            image="sliders/developer_slide1.jpg"
            alt="test"
            description="descripcion"
            title="Titulo"
          />
        </Grid>
      </Grid>
    </>
  );
}
