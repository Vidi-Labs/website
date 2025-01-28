import React from "react";
import {
  AboutContainer,
  AboutTitle,
  CardGrid,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
} from "./HeroSectionAboutUsElements";
import { useTranslation } from "react-i18next";

import aboutusImage1 from "../../images/aboutus_image1.png";
import aboutusImage2 from "../../images/aboutus_image2.png";
import aboutusImage3 from "../../images/aboutus_image3.png";

const AboutUsSection = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      image: aboutusImage1,
      title: "Our Vision",
      description: "Seekr revolutionizes everyday human interactions through AI and intuitive designs.",
    },
    {
      image: aboutusImage2,
      title: "What We Do",
      description: "Transforming the lives of the visually impaired through advanced AI technology.",
    },
    {
      image: aboutusImage3,
      title: "Our Mission",
      description: "Enhancing the daily lives of the visually impaired with our convenient assistive solution.",
    },
  ];

  return (
    <AboutContainer>
      <AboutTitle>About Us</AboutTitle>
      <CardGrid>
        {cardData.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.image} alt={card.title} />
            <CardContent>
              <CardTitle>{t(card.title)}</CardTitle>
              <CardDescription>{t(card.description)}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </CardGrid>
    </AboutContainer>
  );
};

export default AboutUsSection;

