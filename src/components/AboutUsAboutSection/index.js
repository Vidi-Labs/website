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
} from "./AboutSectionElements";
import devicePhoto from "../../images/About_Us.jpeg";
import { useTranslation } from "react-i18next";

const AboutUsAboutContainer = () => {
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
            <AboutUsH1>{t("About Us")}</AboutUsH1>
              <ImgWrap>
                <Img src={devicePhoto} alt={"seekr device"} />
              </ImgWrap>
            </Column1>
            <Column2>
            <Card>
              <CardTitle>Our Vision</CardTitle>
              <CardDescription>Seekr revolutionize everyday human interactions through AI and intuitive designs.</CardDescription>
            </Card>
            <Card>
              <CardTitle>What We Do</CardTitle>
              <CardDescription>We develop products that leverage the state-of-the-art AI and Computer vision algorithms to make life easier and safer for people with low vision.</CardDescription>
            </Card>
            <Card>
              <CardTitle>Beginnings</CardTitle>
              <CardDescription>Founded in 2021, the inspiration behind Seekr came from our founder’s grandfather, whose life changed when he lost his vision.</CardDescription>
            </Card>
            <Card>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>We aim to help all who are visually-impaired, aiding them in their daily lives through a convenient, portable device.</CardDescription>
            </Card>
            </Column2>
          </AboutUsRow>
        </AboutUsWrapper>
      </AboutUsContainer>
  );
};

export default AboutUsAboutContainer;
