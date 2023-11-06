import styled from "styled-components";

export const StyledFooter = styled.section`
  .footer {
    width: 100%;
    height: auto;
    margin-top: 4rem;
    position: relative;
    bottom: -4px;
  }
  @media screen and (max-width: 720px) {
    .footer {
      height: 140px;
      margin-top: 2rem;
    }
  }
`;
