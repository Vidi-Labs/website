import styled from "styled-components";

export const TechContainer = styled.div`
  background: black;
  height: 760px;

  @media screen and (max-width: 950px) {
    padding: 50px 0;
    height: 900px;
  }

  @media screen and (max-width: 768px) {
    padding: 50px 0;
    height: 1230px;
  }
`;

export const TechWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 760px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const TechRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
    height: 1100px;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 20px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 20px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const TechH1 = styled.h1`
  color: white;
  font-size: 48px;
  text-align: left;
  @media screen and (max-width: 950px) {
    font-size: 43px;
  }
  @media screen and (max-width: 768px) {
    font-size: 48px;
    text-align: center;
  }
  @media screen and (max-width: 300px) {
    font-size: 35px;
    text-align: center;
  }
`;
export const TechText = styled.h3`
  margin-top: 70px;
  font-size: 2.5rem;
  color: #2D8A9E;
  @media screen and (max-width: 950px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
  @media screen and (max-width: 300px) {
    font-size: 2.0rem;
  }
`;
export const TechP = styled.p`
  margin-top: 10px;
  color: #6C6868;
  font-size: 15px;
  text-align: left;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    text-align: center;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  display: absolute;
  padding: 0;
`;

export const Img = styled.img`
  width: 80%;
  margin: 60px 0 10px 80px;
  padding-right: 0;
  @media screen and (max-width: 768px) {
    margin-left: 50px;
    height: 80%;
  }
  @media screen and (max-width: 500px) {
    margin-top: 10px;
    margin-left: 20px;
    height: 90%;
  }
`;
