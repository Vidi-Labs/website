import React, { useState } from "react";
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
CardSectionContainer,
TopImage,
TopImageContainer,
TopImageLink,
RowImg,
 } from "./SocialRecentPostEelements";
import aia_thumb from "../../images/aia_thumb.png";
import ylot_thumb from "../../images/ylot_thumb.png";
import aef_thumb from "../../images/aef_thumb.png";
import ict_thumb from "../../images/ict_thumb.png";
import cdl_thumb from "../../images/cdl_thumb.png";
import resolve_thumb from "../../images/resolve_thumb.png";
import ydc_thumb from "../../images/ydc_thumb.png";
import dragon_thumb from "../../images/dragon_thumb.png";
import hult_thumb from "../../images/hult_thumb.png";

import aia from "../../images/aia_logo.png";
import ylot from "../../images/ylot_logo.png";
import ydc from "../../images/ydc_logo.png";
import aef from "../../images/aef_logo.png";
import diversity from "../../images/diversity_logo.png";
import ict from "../../images/ict_logo.png";
import cdl from "../../images/cdl_logo.png";
import resolve from "../../images/resolve.png";
import hult from "../../images/hult_logo.png";
import dragon from "../../images/rawanda.png";

import { useTranslation } from "react-i18next";

const SocialRecenetPosts = () => {
//   const [hover, setHover] = useState(false);

//   const onHover = () => {
//     setHover(!hover);
//   };
const { t } = useTranslation();


const cardData = [
    {
      imageUrl: aia_thumb,
      title:"AIA Creator Fund Winner" ,
      logoUrl: aia
    },
    {
      imageUrl:ylot_thumb,
      title:"Best Technology Transfer Pioneer Award",
      logoUrl: ylot

    },
    {
      imageUrl: aef_thumb,
      title:"AEF Jumpstarter Diversity and Inclusion Award",
      logoUrl: aef

    },
    {
      imageUrl: ict_thumb,
      title: "ICT Startup Award",
      logoUrl: ict

    },
    {
      imageUrl: cdl_thumb,
      title: "Accepted into CDL - Melbourne Technology Accelerator",
      logoUrl: cdl

    },
    {
      imageUrl: resolve_thumb,
      title: "Chosen for the Resolve Opportunity Fund",
      logoUrl: resolve

    },
    {
      imageUrl: ydc_thumb,
      title: "Winner of YDC Dare to Change Business Pitch Competition",
      logoUrl: ydc

    },
    {
      imageUrl: dragon_thumb,
      title: "Invited to UNLEASH Rwanda Dragon’s Den",
      logoUrl: dragon

    },
    // {
    //   imageUrl: hult_thumb,
    //   title: "HULT Prize Foundation Invitee",
    //   logoUrl: hult

    // },
  ];

  const redirectToLinkedIn = () => {
    window.open("https://www.linkedin.com/company/seekr-hk/", "_blank");
  };

  return (
    <KeyFeatureContainer >
      <FeatureH1>{t("Awards")}</FeatureH1>
      <CardSectionContainer>
        {cardData.map((card, index) => (
          <CardContainer key={index}>
            <CardImage src={card.imageUrl} alt={`Card ${index + 1}`} />
            <CardDescription>{card.title}</CardDescription>
            <RowImg src={card.logoUrl}></RowImg>
          </CardContainer>
        ))}
      </CardSectionContainer>
     {/* <ButtonSection>
        <BlackButton>Show More</BlackButton>
      </ButtonSection> */}
    </KeyFeatureContainer>
  );
};

export default SocialRecenetPosts;
