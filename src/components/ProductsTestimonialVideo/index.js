import React from "react";
import {
  VideoContainer,
  ContentWrapper,
  Heading,
  Subtitle,
  VideoWrapper,
  Video
} from "./TestimonialVideoElements";
import deviceVideo from "../../images/ebenger_testimonial.mp4";
import { useTranslation } from "react-i18next";

const VideoSection = () => {
  const { t } = useTranslation();

  return (
    <VideoContainer>
      <ContentWrapper>
        <Heading>{t("Testimonials")}</Heading>
        <Subtitle>
          {t("See what our users have to say about the Seekr Device!")}
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

