import React from "react";
import logo from "../../images/shinchan-logo.webp";

import { StyledHeroSection } from "./StyledHeroSection";

function HeroSection() {
  return (
    <StyledHeroSection>
      <div className="hero-content">
        <img src={logo} alt="Shinchan logo" width="200" className="logo" />
        <p className="intro">
          Shinchan is the titular character of the popular Japanese manga and
          anime series "Crayon Shinchan." He's a cheeky, five-year-old boy with
          a mischievous streak and a knack for getting into hilarious
          situations. With his distinctive red overalls and playful spirit,
          Shinchan's adventures are a delightful blend of comedy and
          heartwarming moments that have captivated audiences of all ages.
        </p>
      </div>
    </StyledHeroSection>
  );
}

export default HeroSection;
