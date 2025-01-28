import React, { useState } from "react";
import {
  AboutUsContainer,
  AboutUsWrapper,
  AboutUsRow,
  Column1,
  Column2,
  TextWrapper,
  AboutUsH1,
  AboutUsH3,
  AboutUsText,
  ImgWrap,
  Img
} from "./AboutUsElements";
import devicePhoto from "../../images/emboss-white-black.png";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const { t } = useTranslation();

  return (
    <AboutUsContainer  id="About">
        <AboutUsWrapper>
          <AboutUsRow>
            <Column1>
              <ImgWrap>
                <Img src={devicePhoto} alt={"seekr device"} />
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
              <AboutUsH1>{t("About Us")}</AboutUsH1>
                <AboutUsH3>{t("Our Vision")}</AboutUsH3>
                <AboutUsText>{t("AboutUsVision")}</AboutUsText>
                <AboutUsH3>{t("What We Do")}</AboutUsH3>
                <AboutUsText>{t("AboutUsWhatWeDo")}</AboutUsText>
              </TextWrapper>
            </Column2>
          </AboutUsRow>
        </AboutUsWrapper>
      </AboutUsContainer>
  );
};

export default HeroSection;
