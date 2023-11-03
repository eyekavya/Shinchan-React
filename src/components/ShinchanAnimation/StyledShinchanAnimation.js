import styled from "styled-components";

export const StyledShinchanAnimation = styled.section`
  body {
    background: #3e505e;
  }
  .face {
    /* height: 600px; */
    width: 350px;
    position: relative;
    margin: auto;
  }
  .face:before {
    content: "";
    background: black;
    height: 122px;
    width: 95px;
    position: absolute;
    z-index: 6;
    left: 210px;
    top: 29px;
    border-radius: 100% 190% 100% 0%;
    transform: rotate(-20deg);
  }
  .face:after {
    content: "";
    width: 230px;
    height: 180px;
    background: black;
    content: "";
    transform: rotate(-8deg);
    position: absolute;
    border-radius: 100% 160% 100% 0%;
    left: 70px;
    bottom: -14px;
    top: 10px;
    z-index: 5;
  }
  .forhead,
  .forhead:after {
    content: "";
    width: 220px;
    height: 181px;
    background: #fbc6a3;
    content: "";
    transform: rotate(-3deg);
    position: absolute;
    border-radius: 60% 120% 50% 0%;
    left: 67px;
    bottom: -14px;
    top: 21px;
    z-index: 6;
  }
  .forhead:after {
    width: 160px;
    height: 150px;
    border-radius: 150% 174% 159% 100%;
    transform: rotate(-20deg);
    top: 13px;
    left: 59px;
    border-top: 15px solid #fbc6a3;
  }
  .forhead:before {
    background: #fbc6a3;
    width: 60px;
    height: 10px;
    content: "";
    position: absolute;
    z-index: 7;
    left: 105px;
    top: 9px;
    transform: rotate(13deg);
    border-radius: 100%;
  }
  .ear {
    width: 60px;
    height: 50px;
    background: #fbc6a3;
    z-index: 7;
    position: absolute;
    border-radius: 300% 190% 200% 100%;
    transform: rotate(-20deg);
    top: 110px;
    left: 285px;
  }
  .cheeks {
    background: #fbc6a3;
    width: 280px;
    height: 100px;
    border-radius: 50px 0px 50px 40px;
    transform: rotate(-3deg);
    position: relative;
    content: "a";
    top: 108px;
    left: 10px;
  }
  .cheeks:after {
    width: 297px;
    height: 100px;
    background: #fbc6a3;
    content: "";
    transform: rotate(-3deg);
    position: absolute;
    border-radius: 100% 100% 100% 100%;
    left: 1px;
    bottom: -14px;
  }
  .eye {
    width: 40px;
    height: 40px;
    position: relative;
    background: black;
    border-radius: 100%;
    animation: close-eye 4s none 0.2s infinite;
  }
  .eye:after {
    content: "";
    position: absolute;
    background: white;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    left: 17px;
    top: 12px;
  }
  .eye:before {
    content: "";
    position: absolute;
    width: 70px;
    height: 60px;
    border-radius: 100%;
    border-top: 2px solid black;
    left: -20px;
    margin-top: -20px;
  }
  .eye.left,
  .eye.right {
    position: absolute;
    top: 80px;
    left: 100px;
    z-index: 10;
  }
  .eye.right {
    left: 190px;
    top: 90px;
  }
  .eyebrow {
    animation: eyebroani 2s linear 0.2s infinite;
  }
  .eyebrow,
  .eyebrow:after {
    position: absolute;
    width: 20px;
    height: 60px;
    background: black;
    z-index: 8;
    border-radius: 15px;
    transform: rotate(40deg);
    top: 10px;
    left: 90px;
  }
  .eyebrow:after {
    content: "";
    transform: rotate(-100deg);
    left: 19px;
    margin-top: -23px;
    top: auto;
  }
  .eyebrow.right {
    left: 180px;
    top: 8px;
    transform: rotate(50deg);
  }
  .mouth {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #76322f;
    border-radius: 100%;
    top: 180px;
    left: 50px;
    z-index: 8;
  }
  .shy {
    position: absolute;
    width: 0px;
    height: 0px;
    border-radius: 100%;
    opacity: 0;
    box-shadow: 0px 0px 40px 20px red;
    z-index: 8;
    left: 35px;
    top: 160px;
    animation: shy 10s linear 0.2s infinite;
  }
  .shy.right {
    left: 170px;
    top: 180px;
  }
  @keyframes eyebroani {
    0% {
      margin-top: auto;
    }
    10% {
      margin-top: -10px;
    }
    20% {
      margin-top: auto;
    }
    30% {
      margin-top: -10px;
    }
    40% {
      margin-top: auto;
    }
    100% {
      margin-top: auto;
    }
  }
  @keyframes shy {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0.2;
    }
    90% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes close-eye {
    0% {
      height: 40px;
      margin-top: auto;
      overflow: auto;
    }
    5% {
      height: 2px;
      margin-top: 20px;
      overflow: hidden;
    }
    5.1% {
      height: 40px;
      margin-top: 0;
      overflow: visible;
    }
  }
`;
