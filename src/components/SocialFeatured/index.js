import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { 
KeyFeatureContainer,
FeatureH1,
CardContainer,
CardImage,
CardTitle,
CardDescription,
ButtonSection,
BlackButton,
ColoredButton,
CardSectionContainer
 } from "./SocialFeaturedEelements";
import keyImage1 from "../../images/key_feature_image1.png";
import keyImage2 from "../../images/key_feature_image2.png";
import keyImage3 from "../../images/key_feature_image3.png";

import { useTranslation } from "react-i18next";

const SocialFeatured = () => {
//   const [hover, setHover] = useState(false);

//   const onHover = () => {
//     setHover(!hover);
//   };
const { t } = useTranslation();


const cardData = [
    {
      imageUrl: keyImage1,
      title: t("sceneRecognition"),
      description:  t("sceneRecognitionDescription"),
    },
    {
      imageUrl:keyImage2,
      title:t("textRecognition"),
      description: t("textRecognitionDecription"),
    },
    {
      imageUrl: keyImage3,
      title: t("depthEstimation"),
      description: t("depthEstimationDescription"),
    },
  ];


  return (
    <KeyFeatureContainer >
      <FeatureH1>{t("keyFeatures")}</FeatureH1>
      <CardSectionContainer>
        {cardData.map((card, index) => (
          <CardContainer key={index}>
            <CardImage src={card.imageUrl} alt={`Card ${index + 1}`} />
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardContainer>
        ))}
      </CardSectionContainer>
     <ButtonSection>
        <BlackButton>Join the Waitlist</BlackButton>
        <ColoredButton>FAQs</ColoredButton>
        <ColoredButton>Learn More</ColoredButton>
      </ButtonSection>
    </KeyFeatureContainer>
  );
};

export default SocialFeatured;
