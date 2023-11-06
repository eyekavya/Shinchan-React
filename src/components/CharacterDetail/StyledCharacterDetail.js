import styled from "styled-components";

export const StyledCharacterDetail = styled.section`
  .flex-details {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    div,
    p,
    h4 {
      width: 70%;
      text-align: left;
    }

    p {
      line-height: 1.5;
    }
  }

  .headImage img {
    width: 100%;
    height: auto;
  }

  .character-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    width: 70%;
    margin: 4rem auto;
  }

  .details {
    font-family: "Noto Sans", sans-serif;
  }

  .name {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2rem;

    h3 {
      color: transparent;
      background: linear-gradient(
        to right,
        rgba(0, 136, 204, 1) 25%,
        rgba(0, 94, 204, 1) 75%
      );
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0;
    }

    img {
      width: 70%;
    }
  }

  .description p {
    text-align: center;
    line-height: 2;
    color: #111;
    letter-spacing: 0.2px;
  }

  .photo-mobile {
    display: none;
  }

  .photo-desktop img {
    width: 100%;
    height: auto;
  }

  h4 {
    align-items: start;
  }

  @media screen and (max-width: 720px) {
    .headImage {
      overflow: hidden;
      img {
        width: unset;
        height: 150px;
      }
    }

    .flex-details {
      flex-wrap: wrap;
      margin: 0 1rem;
      div,
      p,
      h4 {
        width: 100%;
        text-align: left;
      }
      h4 {
        margin-bottom: 0;
      }
    }

    .character-container {
      flex-direction: column;
      margin-top: 1rem;
    }

    .name h3 {
      font-size: 1.2rem;
    }

    .description p {
      line-height: 1.8;
      letter-spacing: 0px;
      margin: 0 1rem;
    }

    .photo-desktop {
      display: none;
    }
    .photo-mobile {
      display: block;
      /* width: 100%; */
      height: auto;
      margin-bottom: 10rem;
    }
  }
`;
