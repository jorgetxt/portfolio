import React, { useState, useEffect } from "react";
import { useTrail, a } from "@react-spring/web";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

import styles from "./stylesText.module.css";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";

const Trail: React.FC<{
  open: boolean;
  children: React.ReactNode;
}> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function App() {
  const { t } = useTranslation();

  // const [open, set] = useState(true);

  const [isVisible, setIsVisible] = useState(true);
  // const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
    //eslint-disable-next-line
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // setHeight(winScroll);

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div
      className={styles.container}
      // onClick={() => setIsVisible((state) => !state)}
    >
      <Trail open={isVisible}>
        <Typography variant="h1" color="white">
          {t("title1_slider")}
        </Typography>
        <Typography variant="h1" color="white">
          {t("title2_slider")}
        </Typography>
        {/* <span></span> */}
        <Typography variant="h2" color="white">
          {/* desarrollador web */}
          {t("title3_slider")}
        </Typography>
        {/* <span style={{ marginBottom: 10 }}>Hola, soy Jorge</span> */}
        {/* <span>desarrollador web</span> */}
        {/* <span>Jorge</span> */}
        {/* <span>Sit</span> */}

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<DownloadIcon />}
          >
            {t("downloadCV_button_slider")}
          </Button>
          <Button
            variant="outlined"
            onClick={() => window.open("https://github.com/jorgetxt", "_blank")}
            endIcon={<GitHubIcon />}
          >
            {t("github_button_slider")}
          </Button>
        </Stack>
      </Trail>
    </div>
  );
}
