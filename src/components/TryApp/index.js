import React from "react";
import {
  TryAppContainer,
  ContentWrapper,
  Title,
  Subtitle,
  StoreButtonsContainer,
  StoreButton,
  MobileImageContainer,
  MobileImage,
} from "./TryAppElements";
import playImage from "../../images/play_icon.svg";
import appleImage from "../../images/apple_icon.svg";
import mobileImage from "../../images/mobile_image.png";
import { useTranslation } from "react-i18next";

const TryAppSection = () => {
  const { t } = useTranslation();

  return (
    <TryAppContainer>
      <ContentWrapper>
        <Title>Try the App</Title>
        <Subtitle>
          The app works seamlessly with a compact, clip-on camera device
          to provide real-time audio descriptions of your surroundings.
        </Subtitle>
        <StoreButtonsContainer>
          {/* <StoreButton href="#" aria-label="Download on Google Play">
            <img src={playImage} alt="Google Play" />
          </StoreButton> */}
          <StoreButton href="https://apps.apple.com/us/app/seekr-ai/id6470461667" aria-label="Download on App Store">
            <img src={appleImage} alt="App Store" />
          </StoreButton>
        </StoreButtonsContainer>
        <MobileImageContainer>
          <MobileImage src={mobileImage} alt="App interface preview" />
        </MobileImageContainer>
      </ContentWrapper>
    </TryAppContainer>
  );
};

export default TryAppSection;

