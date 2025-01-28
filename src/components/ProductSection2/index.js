import React, { useState } from "react";
import {
    Container,
    Column,
    Title,
    Description,
    ImageColumn,
    Title2,
    Row
} from "./productSection2";
import devicePhoto from "../../images/section_image_product.png";
import { useTranslation } from "react-i18next";


const TwoRowLayout = () => {
  const { t } = useTranslation();

  return (
    <div>
    <Container>
    <Column>
      <Title>Scene Recognition</Title>
      <Description>
      Detects, locates, and classifies different objects using advanced AI algorithms to help understand the surrounding environment.
      </Description>
    </Column>

    <Column>
      <Title>Text Recognition</Title>
      <Description>
      Extracts, recognizes, and converts text in an image to audio using cutting edge computer vision and AI technologies to provide human-like reading companion.
      </Description>
    </Column>

    <Column>
      <Title>Depth Estimation</Title>
      <Description>
      Estimates the distance and location of various objects using computer vision technologies to aid in easy navigation.
      </Description>
    </Column>
  </Container>
  <Container>
    <Column>
      <Title>Mobile Application</Title>
      <Description>
      The mobile “Seekr” application allows for the audio feature and further customizability for the device.
      </Description>
    </Column>

    <ImageColumn>
      <img src={devicePhoto} alt="Image" />
    </ImageColumn>

    <Column>
      <Title>Wearability</Title>
      <Description>
      The device easily clicks and holds onto pieces of clothing. It can also be removed and used in a hand-held manner.
      </Description>
    </Column>
  </Container>
  </div>

  );
};

export default TwoRowLayout;

