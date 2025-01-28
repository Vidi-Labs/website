import styled from "styled-components";

export const VideoContainer = styled.section`
  background: #E0F8F2;
  min-height: 800px;
  width: 100%;
  padding: 80px 24px;
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 480px) {
    min-height: 500px;
    padding: 60px 16px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  color: #2E2F35;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  font-family: var(--font-inter);

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  color: #2E2F35;
  font-size: 24px;
  text-align: center;
  margin-bottom: 48px;
  font-family: var(--font-inter);
  max-width: 800px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

export const VideoWrapper = styled.div`
  width: 85%;
  aspect-ratio: 16/9;
  border-radius: 25px;
  border: 2px solid #f9f9f9;
  overflow: hidden;
  background: #cbcbcb;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

