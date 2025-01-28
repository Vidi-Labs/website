import styled from "styled-components";

export const FeatureContainer = styled.div`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 350px;
position: relative;
z-index: 1;

:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // background: linear-gradient(
  //     180deg,
  //     rgba(0, 0, 0, 0) 0%,
  //     rgba(0, 0, 0, 0.2) 100%
  //   ),
  //   linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, transparent 100%);
  // other values: 0.2, 0.6, and 0.2.
  z-index: 2;
}
`;

export const FeatureH1 = styled.h1`
padding-left:20%;
padding-right:20%;
  margin-top: 20px;
  color: #092E49;
  font-size: 40px;
  text-align: center;
  position: absolute;
  top: 0.5%;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    font-size: 40px;
  }
`;

export const FeatureH2 = styled.p`
padding-left:20%;
padding-right:20%;
text-align: center;

  margin-top: 50px;
  color: #092E49;
  font-size: 20px;
  position: absolute;
  top: 25%; /* Adjust as needed */
  transform: translateY(-50%);
  
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    font-size: 35px;
  }
`;

export const ButtonContainer = styled.div`
  display: relative;
  margin-top: 50px;
  // gap: 20px;
  justify-content: center;
`;

export const RoundedButton = styled.button`
  width: 160px;
  height: 50px;
  background-color: #000000;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius:20px;
`;

export const SquareButton2 = styled.button`
  width: 120px;
  height: 45px;
  background-color: #fff;
  color: black;
  // border: none;
  cursor: pointer;
  border-color:#00000;
`;

export const HeroContent = styled.div`
  top: 100px;
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const HeroH2 = styled.h2`
//  font-family: Neue,sans-serif;
 font-weight: ultrabold;
  color: #092E49;
  // text-shadow: 1px 1px 2px pink, 0 0 1em white, 0 0 0.2em white; 
  font-size: 45px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  font-family: Neue,sans-serif;
  margin-top: 24px;
  color: #000000; //#010606;
  // text-shadow: 0px 0px 0px pink, 0 0 1em white;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;