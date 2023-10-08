import React from "react";
import defaultImg from "../images/room-1.jpeg";

const Hero = ({ img }) => {
  const heroStyle = {
    minHeight: "60vh",
    background: `url(${img ? img : defaultImg})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <header style={heroStyle}></header>;
};

export default Hero;
