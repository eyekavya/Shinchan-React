import React from "react";
import logo from "../../images/shinchan-logo.webp";

import { StyledHeroSection } from "./StyledHeroSection";

function HeroSection() {
  return (
    <StyledHeroSection>
      <div className="hero-content">
        <img src={logo} alt="Shinchan logo" width="200" className="logo" />
        <p className="intro">
          Shinnosuke Nohara is 5 years old and goes to kindergarten. He goes
          wild everyday with his unique friends in the Kasukabe Defense
          Organization and his little sister, Himawari. His mom, dad, and
          teachers often find themselves caught up in the chaos that Shinchan
          effortlessly creates!
        </p>
      </div>
    </StyledHeroSection>
  );
}

export default HeroSection;
