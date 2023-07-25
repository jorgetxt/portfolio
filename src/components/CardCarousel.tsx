import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Image, { StaticImageData } from "next/image";

import Styles from "./CardCarousel.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "react-i18next";

interface Props {
  image: StaticImageData | string;
  title: string;
  description: string;
  url?: string;
}

function Card({ image, title, description, url }: Props) {
  const { t } = useTranslation();

  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1)" : "scale(0.9)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <Image src={image} alt="Developer" height={200} width={200} />

      <h2>{t(title)}</h2>
      <p>{t(description)}</p>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => url && window.open(url, "_blank")}
          >
            {t("button1_card")}{" "}
          </Button>
        </Grid>
        {false && (
          <Grid item>
            <Button variant="outlined" color="secondary">
              {t("button2_card")}
            </Button>
          </Grid>
        )}
      </Grid>
    </animated.div>
  );
}

export default Card;
