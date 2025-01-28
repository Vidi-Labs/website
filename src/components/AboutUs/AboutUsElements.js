import styled from "styled-components";

export const AboutUsContainer = styled.div`
  background: black;
  height: 600px;

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
  max-width: 1100px;
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
  grid-auto-columns: minmax(auto, 1fr);
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

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 20px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const AboutUsH1 = styled.h1`
  color: #FAF9F9;
  font-size: 48px;
  text-align: left;
  margin-top: 40px;

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
  color: #2D8A9E;
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
  color: #FAF9F9;
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
