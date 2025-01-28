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
  margin-top:2rem;
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
  color: #092E49;
  font-size: 40px;
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
  align-items: center;
  margin: 20px;
  padding: 20px;
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
  border: 1px solid black;
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
  text-align: center;
`;


export const RowImg = styled.img`
  width: auto; /* Adjust the width as needed */
  height: 40px; /* Adjust the height as needed */
  margin-top: 0.8rem;
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
  background-color: white;
  color: black;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 1px;
  width: 11rem;
  height: 3rem;
  margin: 10px;

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


export const TopImageContainer = styled.div`
  width: 100%; // Make it full width
  margin-bottom: 20px; // Adjust as needed
`;

export const TopImageLink = styled.a`
  display: block; // Ensures the link takes the entire width of the container
`;

export const TopImage = styled.img`
  width: 100%; // Make it full width
  max-height: auto; // Set a maximum height if needed
  object-fit: cover; // Adjust to your preference
`;