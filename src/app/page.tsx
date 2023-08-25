"use client";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";

import Header from "./Header";
import Slider1 from "./Slider1";
// import ImageSl1 from "../../public/sliders/developer_slide1.jpg";
// import Card from "./Card";
import PortfolioScreen from "../components/PortFolioScreen";
import TextSlider from "../components/TextSlider";
import ParallaxImg from "../components/HorizontalParallax";
import CarouselScreen from "../components/CarouselScreen";
import { ThemeContext } from "../components/ThemeContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

export default function Home() {
  const themeContext = React.useContext(ThemeContext);

  const theme = useTheme();
  const isSmallOrLess = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Grid container>
        <Grid item xs={6} style={{ zIndex: 3 }}>
          <Header />
        </Grid>
        <Grid item container xs={12} style={{ zIndex: 2, minHeight: "100vh" }}>
          <Grid item xs={12} md={6} style={{ overflow: "hidden" }}>
            <TextSlider />
          </Grid>
          {isSmallOrLess && (
            <Grid item xs={12} md={6} style={{ overflow: "hidden" }}>
              && <ParallaxImg />
            </Grid>
          )}
        </Grid>

        {/* <Grid item xs={12} style={{ overflow: "hidden", zIndex: 2 }}>
          <Slider1 />
        </Grid> */}
      </Grid>

      <Grid
        container
        // spacing={2}
        // justifyContent="space-evenly"
        alignItems="center"
        minHeight="100vh"
        // padding={2}
      >
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
        <PortfolioScreen />
        <Grid item xs={12}>
          <CarouselScreen />
        </Grid>
      </Grid>
    </>
  );
}
