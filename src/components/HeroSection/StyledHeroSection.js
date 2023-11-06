import styled from "styled-components";
import hero from "../../images/hero.png";

export const StyledHeroSection = styled.section`
  height: 100vh;

  .hero-content {
    width: 100%;
    text-align: center;
    height: 90vh;
    background-image: linear-gradient(to bottom, #00000063 92%, #00000000),
      url(${hero});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;

    .logo {
      margin-top: 10rem;
    }
  }

  .intro {
    width: 60%;
    margin: 0 auto;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Noto Sans", sans-serif;
  }

  @media screen and (max-width: 720px) {
    .hero-content .logo {
      margin-top: 5rem;
      margin-bottom: 2rem;
    }

    .intro {
      width: 80%;
      font-size: 1rem;
    }
  }
`;
