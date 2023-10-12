import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Java Fullstack Developer",
          "Azure IoT Fullstack Developer",
          "MERN Stack Developer",
          "AI/ML Enthusiast",
          "Tech Savvy"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
