import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;


export const FeaturesContainer = styled.section`
  background: #00A0C7;
  padding: 80px 24px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const TextContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 48px;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Description = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 40px;
  width: fit-content;
  margin: 0 auto;
`;


export const Tab = styled.button`
  padding: 12px 24px;
  border-radius: 32px;
  border: none;
  background: ${props => props.$active ? 'white' : 'transparent'};
  color: ${props => props.$active ? '#3498db' : 'white'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

Tab.propTypes = {
  $active: PropTypes.bool
};

export const FeatureCard = styled.div`
  background: ${props => props.$color};
  padding: 24px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  backdrop-filter: blur(10px);
`;

FeatureCard.propTypes = {
  $color: PropTypes.string
};


export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;



export const FeatureIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const FeatureText = styled.span`
  color: white;
  font-weight: 500;
`;

export const MobileDisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  margin-top: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const MobileImage = styled.img`
  width: 280px;
  height: auto;
  border-radius: 24px;
//   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.5s ease;
`;

export const ArrowIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: '→';
    color: white;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`;

