import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";
import Button from "@mui/material/Button";

import styles from "./stylesText.module.css";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
  const [open, set] = useState(true);
  return (
    <div className={styles.container} onClick={() => set((state) => !state)}>
      <Trail open={open}>
        <Typography variant="h1" color="white">
          Hola!
        </Typography>
        <Typography variant="h1" color="white">
          soy Jorge
        </Typography>
        {/* <span></span> */}
        <Typography variant="h2" color="white">
          desarrollador web
        </Typography>
        {/* <span style={{ marginBottom: 10 }}>Hola, soy Jorge</span> */}
        {/* <span>desarrollador web</span> */}
        {/* <span>Jorge</span> */}
        {/* <span>Sit</span> */}

        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="secondary">
            Descargar CV
          </Button>
          <Button variant="outlined">ver github</Button>
        </Stack>
      </Trail>
    </div>
  );
}
