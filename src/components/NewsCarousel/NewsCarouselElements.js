import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding: 40px 0;
`;

export const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselCard = styled.div`
  flex: 0 0 calc(33.333% - 20px);
  margin: 0 10px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border: 1px solid #e0e0e0;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    flex: 0 0 calc(50% - 20px);
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 20px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ReadMoreButton = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background-color: transparent;
  color: #2B5741;
  border: 2px solid #2B5741;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2B5741;
    color: white;
  }
`;

