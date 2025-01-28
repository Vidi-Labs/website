import styled from "styled-components";

export const FeatureContainer = styled.div`
  background: #D9D9D9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 300px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  @media screen and (max-width: 480px) {
    height: 500px;
  }
`;

export const FeatureH1 = styled.h1`
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
padding-left:10%;
padding-right:10%;
text-align: center;

  margin-top: 20px;
  color: #092E49;
  font-size: 30px;
  position: absolute;
  top: 25%; /* Adjust as needed */
  transform: translateY(-50%);
  
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    font-size: 35px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 20px;
  justify-content: center;
`;

export const SquareButton = styled.button`
  width: 120px;
  height: 45px;
  background-color: #000000;
  color: #fff;
  border: none;
  cursor: pointer;
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