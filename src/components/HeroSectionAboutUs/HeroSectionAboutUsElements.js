import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #E0F4F9;
  padding: 6rem 2rem;
  width: 100%;
`;

export const AboutTitle = styled.h1`
  color: #000;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: bold;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

export const CardTitle = styled.h3`
  color: #000;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

export const CardDescription = styled.p`
  color: #666;
  font-size: 0.875rem;
  line-height: 1.5;
`;

