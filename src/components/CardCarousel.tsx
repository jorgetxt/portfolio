import Button from "@mui/material/Button";
import Image from "next/image";

import Styles from "./CardCarousel.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

interface Props {
  image: string;
}

function Card({ image }: Props) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
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
      <Image src={image} alt="Developer" width={1} height={1} />

      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      <div className={Styles.btnn}>
        <Button variant="contained">test</Button>
        <Button variant="contained">test</Button>
      </div>
    </animated.div>
  );
}

export default Card;
