import React from "react";
import {
  ParallaxSectionContainer,
  ParallaxText,
  ParallaxWrapper,
} from "./ParallaxSectionElements";
import Image from "../../images/devicePhoto2.png";
import { Parallax } from "react-parallax";
import { t } from "i18next";

const ParallaxSection = () => {
  return (
    <>
      <ParallaxSectionContainer>
        <Parallax bgImage={Image} strength={400} speed={0.5}>
          <ParallaxWrapper>
            <ParallaxText>{t("accessibility")}</ParallaxText>
            <ParallaxText>{t("independence")}</ParallaxText>
            <ParallaxText>{t("inclusivity")}</ParallaxText>
          </ParallaxWrapper>
        </Parallax>
      </ParallaxSectionContainer>
    </>
  );
};

export default ParallaxSection;
