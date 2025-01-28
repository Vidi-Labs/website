import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ProductContainer,
  MainHeading,
  ContentGrid,
  Column,
  IconWrapper,
  ColumnTitle,
  FeatureList,
  FeatureItem,
  DeviceImage,
  Description,
  TagLine,
  RoundedButton,
  ButtonContainer
} from "./productSection1";

import qualitiesIcon from "../../images/qualities_icon.png";
import devicePhoto from "../../images/seekr.png";
import eyeIcon from "../../images/eye_icon.png";

const ProductSection = () => {
  const navigate = useNavigate(); // hook for navigation

  const handleJoinWaitlistClick = () => {
    // Redirect to the 'waitlist' page
    navigate("/waitlist");
  };

  return (
    <ProductContainer>
      <MainHeading>Our Product</MainHeading>
      
      <ContentGrid>
        <Column>
          <IconWrapper>
            <img src={qualitiesIcon} alt="" />
          </IconWrapper>
          <ColumnTitle>Qualities</ColumnTitle>
          <FeatureList>
            <FeatureItem>Intuitive interface</FeatureItem>
            <FeatureItem>Seamless design</FeatureItem>
            <FeatureItem>Lightweight</FeatureItem>
            <FeatureItem>Compatible with iOS and Android devices</FeatureItem>
          </FeatureList>
        </Column>

        <Column>
          <DeviceImage src={devicePhoto} alt="Seekr device" />
        </Column>

        <Column>
          <IconWrapper>
            <img src={eyeIcon} alt="" />
          </IconWrapper>
          <ColumnTitle>Seekr</ColumnTitle>
          <Description>
            Empowering the visually impaired.
            <br />
            Regain independence and explore endless possibilities.
          </Description>
        </Column>
      </ContentGrid>

      <TagLine>
        Unleash Your Visionary Potential with Seekr!
      </TagLine>
      <ButtonContainer>
        <RoundedButton 
          onClick={handleJoinWaitlistClick}
        >Join the Waitlist</RoundedButton>
      </ButtonContainer>
    </ProductContainer>
  );
};

export default ProductSection;

