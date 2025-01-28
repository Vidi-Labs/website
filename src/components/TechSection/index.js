import React, { useState } from "react";
import {
  TechContainer,
  TechWrapper,
  TechRow,
  Column1,
  Column2,
  TextWrapper,
  TechH1,
  TechP,
  TechText,
  ImgWrap,
  Img
} from "./TechElements";
import devPhoto from "../../images/emboss-blue-black.png";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const { t } = useTranslation();

  return (
    <TechContainer  id="Technology">
        <TechWrapper>
          <TechRow>
            <Column1>
              <TextWrapper>
                <TechH1>{t("Core Technology")}</TechH1>
                <TechText>{t("Object Recognition")}</TechText>
                <TechP>{t("Detects, locates and classifies different objects using advanced AI algorithms to help understand the surrounding environment.")}</TechP>
                <TechText>{t("Depth Estimation")}</TechText>
                <TechP>{t("Estimates the distance and location of various objects using computer vision technologies to aid in easy navigation.")}</TechP>
                <TechText>{t("Text Recognition")}</TechText>
                <TechP>{t("Extracts, recognises and converts text in an image to audio using cutting edge computer vision and AI technologies to provide human-like reading companion.")}</TechP>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={devPhoto} alt={"seekr device"} />
              </ImgWrap>
            </Column2>
          </TechRow>
        </TechWrapper>
      </TechContainer>
  );
};

export default HeroSection;
