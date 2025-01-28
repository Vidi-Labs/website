import styled from "styled-components";

export const AboutUsContainer = styled.div`
  background: white;
  height: 800px;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
    height: 940px;
  }
`;

export const AboutUsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
//   max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 860px;
  }
`;

export const AboutUsRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 20px;
  grid-area: col1;
`;


export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const AboutUsH1 = styled.h1`
  color: #092E49;
  font-size: 48px;
  text-align: left;
  margin: 40px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 35px;
  }
`;

export const AboutUsH3 = styled.h3`
  font-size: 38px;
  text-align: left;
  color: #000000;
  margin-top: 60px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    text-align: center;
    font-size: 34px;
  }
`;

export const AboutUsText = styled.p`
  margin-top: 30px;
  font-size: 1rem;
  color: #000000;
  width: 80%;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    margin-right: 0;
    width: 100%;
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
  margin: 0 0 10px 0;
  padding-right: 0;
  @media screen and (max-width: 768px) {
    margin-left: 70px;
    width: 70%;
  }
  @media screen and (max-width: 420px) {
    margin-left: 10px;
    width: 90%;
  }
`;


export const CardDescription = styled.p`
text-align: left;
  color: #000000;
  font-size: 16px;
`;



export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 20px;
  grid-area: col2;
  display: grid;
  grid-template-columns: repeat(1, 1fr); // Two columns
  gap: 20px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;


export const Card = styled.div`
  display: flex;
  align-items: center;
  // margin-bottom: 10px;
  /* Add any additional styling you need */
`;

export const RowImg = styled.img`
  width: 40px; /* Adjust the width as needed */
  height: 40px; /* Adjust the height as needed */
  margin-right: 10px;
  /* Add any additional styling you need */
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight:400;
  /* Add any additional styling you need */
`;