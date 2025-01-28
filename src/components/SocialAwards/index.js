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
  Img,
  Card,
  CardTitle,
  CardDescription,
  RowImg
} from "./SocialAwardEelements";
import devicePhoto from "../../images/awards.png";

import aia from "../../images/aia_logo.png";
import ylot from "../../images/ylot_logo.png";
import ydc from "../../images/ydc_logo.png";
import aef from "../../images/aef_logo.png";
import diversity from "../../images/diversity_logo.png";
import ict from "../../images/ict_logo.png";
import cdl from "../../images/cdl_logo.png";
import resolve from "../../images/resolve.png";
import hult from "../../images/hult_logo.png";
import alibaba from "../../images/alibaba_logo.png";



import { useTranslation } from "react-i18next";

const RowWithLogoAndTitle = ({ logo, title }) => {
  return (
    <Card>
      <RowImg src={logo} alt={`logo-${title}`} />
      <div>
        <CardTitle>{title}</CardTitle>
      </div>
    </Card>
  );
};



const SocialAwards = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  

  const { t } = useTranslation();

  const cardData = [
    {
      imageUrl: aia,
      title: t("aiaTitle"),
    },
    {
      imageUrl:ylot,
      title:t("ylotTitle"),
    },
    {
      imageUrl: aef,
      title: t("aefTitle"),
    },
    {
      imageUrl: diversity,
      title: t("divinityTitle"),
    },
    {
      imageUrl: ict,
      title: t("ictTitle"),
    },
    {
      imageUrl: cdl,
      title: t("cdlTitle"),
    },
    {
      imageUrl: resolve,
      title: t("resolveTitle"),
    },
    {
      imageUrl: ydc,
      title: t("ydcTitle"),
    },
    {
      imageUrl: hult,
      title: t("hultTitle"),
    },
    {
      imageUrl: alibaba,
      title: t("alibabaTitle"),
    },
  ];

  return (
    <AboutUsContainer  id="About">
        <AboutUsWrapper>
          <AboutUsRow>
            <Column1>
            <AboutUsH1>{t("Awards")}</AboutUsH1>
              <ImgWrap>
                <Img src={devicePhoto} alt={"seekr device"} />
              </ImgWrap>
            </Column1>
            <Column2>
              {cardData.map((card, index) => (
                <RowWithLogoAndTitle logo={card.imageUrl} title={card.title} />
              ))}
            </Column2>
          </AboutUsRow>
        </AboutUsWrapper>
      </AboutUsContainer>
  );
};

export default SocialAwards;
