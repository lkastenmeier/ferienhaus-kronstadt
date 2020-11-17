import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 100%;
  height: 400px;
  @media (max-height: 540px) {
    height: 70vh;
  }
  background: #333;
  color: #fff;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  border-radius: 10px;

  background: linear-gradient(316deg, #09eab0, #3c2596);
  background-size: 400% 400%;

  animation: CardBackground 17s ease infinite;

  @keyframes CardBackground {
    0% {
      background-position: 0% 51%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 51%;
    }
  }
`;

const CardImage = styled.img`
  object-fit: scale-down;
  width: 90%;
  height: 90%;
  @media (max-width: 540px) {
    height: 100%;
    width: 100%;
  }
`;

const CardForCarousel = ({ sorc }) => (
  <CardStyle>
    <CardImage src={sorc}></CardImage>
  </CardStyle>
);

export default CardForCarousel;
