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

export const CardSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
  justify-content: space-around;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  width: 30%; /* Set a fixed width for the card */

  @media screen and (max-width: 768px) {
    width: 100%; /* Cards take full width on smaller screens */
    margin: 10px;
    padding: 10px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const CardTitle = styled.h2`
  margin-top: 10px;
  color: black;
  font-size: 24px;
  text-align: left;
`;

export const CardDescription = styled.p`
  margin-top: 10px;
  color: black;
  font-size: 16px;
  text-align: left;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const BlackButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 1px;
  width: 11rem;
  height: 3rem;
  margin: 10px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    height: 50px;
    margin: 5px;
  }
`;

export const ColoredButton = styled.button`
  background-color: #a7dce9;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 1px;
  width: 11rem;
  height: 3rem;
  margin: 10px;

  @media screen and (max-width: 768px) {
    height: 50px;
    margin: 5px;
  }
`;