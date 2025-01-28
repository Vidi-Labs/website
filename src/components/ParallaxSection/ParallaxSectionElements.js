import styled from "styled-components";

export const ParallaxSectionContainer = styled.div`
  color: #000;
  background: #f9f9f9;
`;

export const ParallaxWrapper = styled.div`
  height: 750px;
  width: 50%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: 1400px;
  padding: 300px 40px 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around; //start;

  @media screen and (max-width: 1400px) {
    margin-left: 950px;
    padding-top: 100px;
  }
  @media screen and (max-width: 1280px) {
    margin-left: 860px;
    padding-top: 350px;
  }
  @media screen and (max-width: 1100px) {
    width: 30%;
    height: 830px;
    margin-left: 790px;
    padding-top: 580px;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 700px;
    padding-top: 200px;
  }
  @media screen and (max-width: 920px) {
    margin-left: 460px;
    padding-top: 200px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 460px;
    padding-top: 250px;
  }
  @media screen and (max-width: 568px) {
    margin-left: 300px;
    padding-top: 300px;
  }
  @media screen and (max-width: 468px) {
    margin-left: 140px;
    padding-top: 690px;
  }
  @media screen and (max-width: 420px) {
    margin-left: 200px;
    padding-top: 200px;
    height: 500px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 130px;
    padding-top: 200px;
  }
  @media screen and (max-width: 280px) {
    margin-left: 80px;
    padding-top: 740px;
  }
`;

export const ParallaxText = styled.h1`
  font-size: 2.5rem;
  color: #3F3939;
  text-shadow: 1px 1px 2px pink, 0 0 1em #2D8A9E, 0 0 0.2em white;
  &::first-letter {
    text-transform: uppercase;
    color: #2D8A9E;
    font-size: 5rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 2.0rem;
    &::first-letter {
      font-size: 3.0rem;
    }
  }
  @media screen and (max-width: 920px) {
    font-size: 2.0rem;
    text-shadow: 1px 1px 2px pink, 0 0 1em white, 0 0 5em white;
    &::first-letter {
      font-size: 3.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px pink, 0 0 1em white, 0 0 2.2em white;
    &::first-letter {
      font-size: 2.2rem;
    }
  }
  @media screen and (max-width: 550px) {
    font-size: 1.0rem;
    text-shadow: 1px 1px 2px pink, 0 0 1em white, 0 0 2em white;
    &::first-letter {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 280px) {
    font-size: 0.5rem;
    &::first-letter {
      font-size: 1.0rem;
    }
  }
`;
