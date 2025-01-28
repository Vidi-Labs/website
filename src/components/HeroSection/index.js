import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import {
  HeroContainer,
  HeroContent,
  HeroH2,
  HeroP,
  HeroButtonContainer,
  BlueButton,
  DeviceImageWrapper,
  StarRating,
} from "./HeroElements";
import devicePhoto from "../../images/seekr.png";

const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBuyNowClick = () => navigate("/waitlist");


  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH2>{t("Your New Visual Companion")}</HeroH2>
        <HeroP>
          {t(
            "A compact wearable aimed at being a companion to the elderly and visually-impaired population."
          )}
        </HeroP>
        <HeroButtonContainer>
          <BlueButton onClick={handleBuyNowClick}>Buy Now!</BlueButton>
        </HeroButtonContainer>
        <StarRating>
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="star" />
          ))}
          <span>5.0 User Rating</span>
        </StarRating>
      </HeroContent>
      <DeviceImageWrapper>
        <img src={devicePhoto} alt="Device preview" />
      </DeviceImageWrapper>
    </HeroContainer>
  );
};

export default HeroSection;

