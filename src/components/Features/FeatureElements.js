import styled from "styled-components";

export const FeatureContainer = styled.div`
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
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

export const VideoBg = styled.div`
  border-radius: 25px; 
  border: 2px solid #f9f9f9;   
  position: absolute;
  top: 130px;
  right: 0;
  bottom: 0;
  left: 100px;
  width: 85%;
  height: 70%;
  overflow: hidden;
  background: #cbcbcb;
  @media screen and (max-width: 1200px) {
    left: 100px;
    width: 90%;
  }
  @media screen and (max-width: 1100px) {
    left: 50px;
    width: 90%;
  }
  @media screen and (max-width: 900px) {
    left: 20px;
    width: 95%;
  }
  @media screen and (max-width: 768px) {
    left: 105px;
    width: 75%;
  }
  @media screen and (max-width: 540px) {
    left: 70px;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    left: 30px;
    width: 85%;
    height: 60%;
  }
`;

export const GifBg = styled.video`
  width: 100%;
  height: 100%;
  margin-top: 0px;
  margin-left: 0px;
`;

export const FeatureH1 = styled.h1`
  margin-top: 20px;
  color: black;
  font-size: 400%;
  text-align: center;
  position: absolute;
  top: 0.5%;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    font-size: 40px;
  }
`;


// @media screen and (max-width: 2000px) {
//   left: 40%;
//   text-align: center;
// }
// @media screen and (max-width: 1100px) {
//   left: 35%;
//   text-align: center;
// }
// @media screen and (max-width: 800px) {
//   left: 30%;
//   text-align: center;
// }
// @media screen and (max-width: 540px) {
//   left: 25%;
//   text-align: center;
// }
// @media screen and (max-width: 480px) {
//   margin-top: 30px;
//   text-align: center;
//   left: 20%;
//   font-size: 280%;
// }