import React from 'react';
import { useNavigate } from "react-router-dom";

import {
  StatisticsContainer,
  ContentWrapper,
  Title,
  DemoLink,
  StatsGrid,
  StatCard,
  StatIcon,
  StatNumber,
  StatDescription
} from './StatisticSectionElements';

import knowImage1 from "../../images/know_image_1.png";
import knowImage2 from "../../images/know_image_2.png";
import knowImage3 from "../../images/know_image_3.png";

const statistics = [
  {
    icon: knowImage1,
    number: '200,000',
    description: 'visually-impaired people in Hong Kong'
  },
  {
    icon: knowImage2,
    number: '52 million',
    description: 'visually-impaired people in China'
  },
  {
    icon: knowImage3,
    number: '295 million',
    description: 'visually-impaired people worldwide'
  }
];

const StatisticsSection = () => {
  const navigate = useNavigate(); // Move useNavigate here, inside the component

  const handleBuyNowClick = () => navigate("/waitlist");

  return (
    <StatisticsContainer>
      <ContentWrapper>
        <Title>Did you know?</Title>
        <DemoLink onClick={handleBuyNowClick}>Contact Sales to request a demo</DemoLink>
        <StatsGrid>
          {statistics.map((stat, index) => (
            <StatCard key={index}>
              <StatIcon src={stat.icon} alt="" />
              <StatNumber>{stat.number}</StatNumber>
              <StatDescription>{stat.description}</StatDescription>
            </StatCard>
          ))}
        </StatsGrid>
      </ContentWrapper>
    </StatisticsContainer>
  );
};

export default StatisticsSection;
