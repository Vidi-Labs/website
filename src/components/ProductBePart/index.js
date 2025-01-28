import React, { useState } from "react";
import {
  VideoBg,
  FeatureContainer,
  FeatureH1,
  GifBg,
  FeatureH2,
  ButtonContainer,
  SquareButton,
  SquareButton2
} from "./ProductBePartElements";
import devicePhoto from "../../images/seekr-video.mp4";
import { useTranslation } from "react-i18next";

const ProductBePart = () => {

  const { t } = useTranslation();

  return (
    <FeatureContainer>
      
      <FeatureH1>{t("bePartOfMovement")}</FeatureH1>
      <FeatureH2>{t("redefinePossiblity")}</FeatureH2>
      <ButtonContainer>
        <SquareButton2>Subscripe</SquareButton2>
        <SquareButton>Join the Waitlist</SquareButton>
      </ButtonContainer>
    </FeatureContainer>
  );
};

export default ProductBePart;
