import styled from "styled-components";

export const KeyFeatureContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 20px;
  height: auto;
  position: relative;
  z-index: 1;
  text-align: left;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const FeatureH1 = styled.h1`
  margin: 2rem;
  color: black;
  font-size: 48px;
  text-align: left;
  font-family: Neue, sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    margin: 1rem;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; /* Ensure the image is behind the content */
`;