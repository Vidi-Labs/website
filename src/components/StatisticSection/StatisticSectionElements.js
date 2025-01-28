import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  background: #F5F0E6;
  padding: 80px 24px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const Title = styled.h2`
  color: #000033;
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const DemoLink = styled.button`
  color: #000033;
  text-decoration: underline;
  font-size: 18px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  width: 100%;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

export const StatIcon = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const StatNumber = styled.div`
  color: #000033;
  font-size: 40px;
  font-weight: bold;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const StatDescription = styled.div`
  color: #000033;
  font-size: 18px;
  line-height: 1.5;
  max-width: 280px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

