import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import CharactersCard from "../CharactersCard/CharactersCard";
import Footer from "../Footer";
import { StyledHome } from "./StyledHome";

function Home() {
  return (
    <StyledHome>
      <HeroSection />
      <CharactersCard />
      <Footer />
    </StyledHome>
  );
}

export default Home;
