import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #e0f8f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px;
  min-height: 90vh;
  position: relative;
  z-index: 1;
  font-family: var(--font-inter);

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  // max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 25%;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
    padding-left: 0;
    padding-top: 80px;

  }
`;

export const HeroH2 = styled.h2`
  font-weight: 700; // Inter Bold
  color: #2E2F35;
  font-size: 60px;
  text-align: left;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #58595D;
  font-size: 24px;
  text-align: left;
  max-width: 100%;
  font-weight: 500; // Inter Medium

  @media screen and (max-width: 1024px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

export const BlueButton = styled.button`
  background-color: #00A0C7;
  color: white;
  padding: 12px 24px;
  border: 1px solid #2E2F35;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 2px 4px 6px rgba(46, 47, 53, 0.3);
  font-size: 1rem;
  font-weight: 700; // Inter Bold
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0082a3;
    transform: translateY(-2px);
    box-shadow: 2px 6px 8px rgba(46, 47, 53, 0.4);
  }

  @media screen and (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

export const DeviceImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  span {
    margin-left: 8px;
    font-size: 18px;
    color: #58595d;
    font-weight: 500; // Inter Medium
  }

  .star {
    color: #f5c518;
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    span {
      font-size: 16px;
    }

    .star {
      font-size: 20px;
    }
  }
`;

