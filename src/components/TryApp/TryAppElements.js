import styled from "styled-components";

export const TryAppContainer = styled.section`
  background: #ffffff;
  padding: 80px 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 60px 16px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 16px;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: #666666;
  max-width: 600px;
  margin-bottom: 40px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 32px;
  }
`;

export const StoreButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    gap: 16px;
    margin-bottom: 40px;
  }
`;

export const StoreButton = styled.a`
  width: 60px;
  height: 60px;
  background: #2B5741;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;

    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const MobileImageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
`;

export const MobileImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 800px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

