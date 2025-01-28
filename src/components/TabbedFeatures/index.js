'use client'

import React from 'react';
import PropTypes from 'prop-types';
import {
  FeaturesContainer,
  ContentWrapper,
  TextContent,
  Title,
  Description,
  TabsContainer,
  Tab,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureText,
  MobileDisplayContainer,
  MobileImage,
  ArrowIcon,
} from './FeaturesSectionElements';
import { useAutoTab } from './hooks/useAutoTab';

import textImage1 from "../../images/text_image1.png";
import depthImage from "../../images/depth_image1.png";
import sceneImage from "../../images/scene_image1.png";
import superMarketImage from "../../images/supermarket_image1.png";

import textImage2 from "../../images/text_image2.png";
import depthImage2 from "../../images/depth_image2.png";
import sceneImage2 from "../../images/scene_image2.png";
import superMarketImage2 from "../../images/supermarket_image2.png";

import enhancedIcon from "../../images/enhanced_icon.svg";
import safetyIcon from "../../images/safety_icon.svg";
import socialIcon from "../../images/social_icon.svg";
import versatileIcon from "../../images/versatile_icon.svg";


const tabs = ['Text', 'Depth', 'Scene', 'Supermarket'];
const images = [textImage1, depthImage, sceneImage, superMarketImage];
const images2 = [textImage2, depthImage2, sceneImage2, superMarketImage2];


const features = [
  { icon: enhancedIcon, text: 'Enhanced Independence', color: 'rgba(255, 255, 255, 0.1)' },
  { icon: safetyIcon, text: 'Improved Safety', color: 'rgba(255, 255, 255, 0.1)' },
  { icon: socialIcon, text: 'Social Inclusion', color: 'rgba(255, 255, 255, 0.1)' },
  { icon: versatileIcon, text: 'Versatile Usage', color: 'rgba(255, 255, 255, 0.1)' },
];

export default function FeaturesSection() {
  const { activeTab, setTab } = useAutoTab(tabs.length);

  return (
    <FeaturesContainer>
      <ContentWrapper>
        <TextContent>
          <Title>Four different Features</Title>
          <Description>
            Seekr is more than just an app - it's your personal AI assistant, 
            designed to enhance your independence, safety, and quality of life. 
            Experience the world in a new way with Seekr.
          </Description>
        </TextContent>

        <TabsContainer role="tablist">
          {tabs.map((tab, index) => (
            <Tab
              key={tab}
              role="tab"
              aria-selected={activeTab === index}
              onClick={() => setTab(index)}
              $active={activeTab === index}
            >
              {tab}
            </Tab>
          ))}
        </TabsContainer>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index} $color={feature.color}>
              <FeatureIcon src={feature.icon} alt="" />
              <FeatureText>{feature.text}</FeatureText>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <MobileDisplayContainer>
          <MobileImage 
            src={images[activeTab]} 
            alt={`${tabs[activeTab]} feature demonstration`}
            key={activeTab}
          />
          <ArrowIcon />
          <MobileImage 
            src={images2[(activeTab ) % tabs.length]} 
            alt={`${tabs[(activeTab ) % tabs.length]} feature demonstration`}
            key={`next-${activeTab}`}
          />
        </MobileDisplayContainer>
      </ContentWrapper>
    </FeaturesContainer>
  );
}

