import styled from "styled-components";

export const StyledFooter = styled.section`
  .container {
    position: relative;
    text-align: center;
    color: #fff;
  }

  .footer {
    width: 100%;
    height: auto;
    margin-top: 4rem;
    position: relative;
    bottom: -4px;
    position: relative;
  }

  .footer-text {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 720px) {
    .footer {
      height: 140px;
      margin-top: 2rem;
    }
  }
`;
