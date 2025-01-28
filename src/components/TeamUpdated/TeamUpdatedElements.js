import styled from "styled-components";

export const TeamContainer = styled.section`
  background-color: #00A0C7;
  padding: 4rem 0;
`;

export const TeamWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const TeamTitle = styled.h1`
  color: #092E49;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TeamCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TeamMemberImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const TeamMemberInfo = styled.div`
  padding: 1rem;
  text-align: center;
`;

export const TeamMemberName = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const TeamMemberRole = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const SocialIconLink = styled.a`
  color: #092E49;
  font-size: 1.25rem;
  transition: color 0.3s ease;

  &:hover {
    color: #1e5b8d;
  }
`;

