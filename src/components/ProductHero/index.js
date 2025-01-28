import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FeatureContainer,
  FeatureH1,
  FeatureH2,
  ButtonContainer,
HeroH1,
HeroH2,
HeroP,
HeroContent,
  RoundedButton
} from "./ProductHeroElements";
import devicePhoto from "../../images/seekr-video.mp4";
import { useTranslation } from "react-i18next";

const ProductHero = () => {
  
  const navigate = useNavigate(); // hook for navigation


  const { t } = useTranslation();

  const handleJoinWaitlistClick = () => {
    // Redirect to the 'waitlist' page
    navigate("/waitlist");
  };

  return (
    <FeatureContainer>
      
      <HeroContent>
      <HeroH2>{t("unleashtext")}</HeroH2>
        {/* <HeroP>{t("experienceRevolution")}</HeroP> */}
        <ButtonContainer>
        <RoundedButton 
          onClick={handleJoinWaitlistClick}
        >Join the Waitlist</RoundedButton>
      </ButtonContainer>
      </HeroContent>

    </FeatureContainer>
  );
};

export default ProductHero;
