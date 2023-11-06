import styled from "styled-components";

export const StyledHeroSection = styled.section`
  .container {
    max-width: 1100px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem 2rem;
    padding: 0px 1rem;
    margin: 0 auto;
    margin-top: 5rem;
  }

  .container .card {
    position: relative;
    height: 220px;
    width: 290px;
    background-color: #fff;
    margin: 80px 10px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
    border-radius: 15px;
    cursor: pointer;
  }
  .container .card:hover {
    height: 20rem;
  }

  .container .card .image {
    width: 100%;
    height: auto;
    position: relative;
    top: -40%;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    img {
      width: 290px;
      height: 250px;
      border-radius: 15px;
      object-fit: cover;
      object-position: top;
    }
  }

  .container .card .content {
    position: relative;
    top: -140px;
    padding: 10px 15px;
    color: #111;
    text-align: center;
    transition: 0.2s ease-in-out;
    font-family: "Noto Sans", sans-serif;
    line-height: 1.5;
    letter-spacing: 0.2px;

    h3 {
      visibility: visible;
      opacity: 1;
      position: relative;
      bottom: -3rem;
      transition: 0.5s ease-in-out;
    }

    p {
      visibility: hidden;
      opacity: 0;
      transition: 0.3s ease-in-out;
    }
  }

  .container .card:hover .content {
    transition-delay: 0.2s;

    h3 {
      visibility: visible;
      opacity: 1;
      bottom: 0;
    }

    p {
      visibility: visible;
      opacity: 1;
    }
  }
`;
