import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  // background: linear-gradient(
  //   108deg,
  //   rgba(1, 147, 86, 1) 0%,
  //   rgba(10, 201, 122, 1) 100%
  // );

  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const SeekrLogo = styled.img`
  width: 120px;
  padding-right: 0;
`;

export const CareerCardsWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
  }
`;

export const CareerCard = styled.div`
  background: #010101;
  max-width: 400px;
  height: 100%;
  z-index: 1;
  display: grid;
  padding: 60px 32px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1000px) {
    padding: 40px 32px;
  }

  @media screen and (max-width: 400px) {
    padding: 32px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const JobTitle = styled.h1`
  margin-bottom: 60px;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

export const JobDescription = styled.label`
  margin-bottom: 60px;
  font-size: 16px;
  color: #fff;
  line-height: 1.5em;
`;

export const LocationText = styled.label`
  margin-bottom: 20px;
  font-size: 14px;
  color: #cccccc;
`;

export const CareerButton = styled(Link)`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;
