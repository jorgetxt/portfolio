import React, { useRef, useEffect, useState } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import styles from "./stylesParallax.module.css";

interface PageProps {
  offset: number;
  gradient: string;
  onClick: () => void;
}

const Page = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer factor={0.5} offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer factor={0.5} offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      factor={0.5}
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
);

export default function App() {
  const parallax = useRef<IParallax>(null);

  const [isVisible, setIsVisible] = useState(true);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  const scrollDefault = () => {
    if (!!parallax.current && parallax.current?.offset < 2) {
      parallax.current.scrollTo(parallax.current?.offset + 1);
    } else {
      parallax.current?.scrollTo(0);
    }
  };

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

  useEffect(() => {
    const t = setInterval(() => scrollDefault(), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: "#dfdfdf" }}>
      <Parallax
        className={styles.container}
        style={{
          overflow: "hidden",
          width: "50%",
          transition: "visibility 0.5s,opacity 0.5s linear",

          // opacity: "60%",
          ...(!isVisible && {
            visibility: "hidden",
            opacity: "0%",
            // transition: "visibility 1s,opacity 0.5s linear",
          }),
        }}
        ref={parallax}
        pages={3}
        horizontal
      >
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  );
}
