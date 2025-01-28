import React from "react";
import {
  VideoContainer,
  ContentWrapper,
  Heading,
  Subtitle,
  VideoWrapper,
  Video
} from "./VideoSectionElements";
import deviceVideo from "../../images/how_it_works.mp4";
import { useTranslation } from "react-i18next";

const VideoSection = () => {
  const { t } = useTranslation();

  return (
    <VideoContainer>
      <ContentWrapper>
        <Heading>{t("How does it work?")}</Heading>
        <Subtitle>
          {t("Here is a short instructional video on how to use the Seekr device")}
        </Subtitle>
        <VideoWrapper>
          <Video 
            autoPlay 
            muted 
            loop 
            playsInline 
            src={deviceVideo}
            aria-label="Demonstration of Seekr device usage"
          />
        </VideoWrapper>
      </ContentWrapper>
    </VideoContainer>
  );
};

export default VideoSection;

