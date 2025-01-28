import styled from "styled-components";

export const MediaContainer = styled.section`
  background: #E0F8F2;
  padding: 80px 24px;
  padding-top:120px;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const MainHeading = styled.h1`
  font-family: var(--font-inter);
  font-size: 48px;
  font-weight: 700;
  color: #2E2F35;
  text-align: center;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const SubHeading = styled.h2`
  font-family: var(--font-inter);
  font-size: 48px;
  font-weight: 700;
  color: #00A0C7;
  margin-bottom: 48px;
  // font-style: italic;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 32px;
  }
`;

export const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const MediaCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
  }

  &:focus-visible {
    outline: 2px solid #00A0C7;
    outline-offset: 2px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-inter);
  font-size: 16px;
  font-weight: 500;
  color: #2E2F35;
  padding: 16px;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px;
  }
`;

