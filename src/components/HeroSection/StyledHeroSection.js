import styled from "styled-components";
import hero from "../../images/hero.png";

export const StyledHeroSection = styled.section`
  height: 90vh;
  background-image: linear-gradient(to bottom, #00000063 92%, #00000000),
    url(${hero});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;

  .hero-content {
    margin: 0 auto;
    padding-top: 10rem;
    width: 60%;
    text-align: center;
  }

  .intro {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Noto Sans", sans-serif;
  }
`;
