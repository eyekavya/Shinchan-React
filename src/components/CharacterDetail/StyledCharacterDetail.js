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
      line-height: 1;
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

  .photo img {
    width: 100%;
    height: auto;
  }

  h4 {
    align-items: start;
  }
`;
