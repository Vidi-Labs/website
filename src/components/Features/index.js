import React, { useState } from "react";
import {
  VideoBg,
  FeatureContainer,
  FeatureH1,
  GifBg,
} from "./FeatureElements";
import devicePhoto from "../../images/seekr-video.mp4";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const { t } = useTranslation();

  return (
    <FeatureContainer id="Features">
      
      <FeatureH1>{t("Features")}</FeatureH1>
      <VideoBg>
      <GifBg autoPlay muted loop playsInline src={devicePhoto} />
      </VideoBg>
    </FeatureContainer>
  );
};

export default HeroSection;
