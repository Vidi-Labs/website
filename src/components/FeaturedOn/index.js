import React from "react";
import {
  MediaContainer,
  ContentWrapper,
  MainHeading,
  SubHeading,
  MediaGrid,
  MediaCard,
  CardImage,
  CardTitle,
} from "./FeaturedOnElements";
import { useTranslation } from "react-i18next";

import wtia_img from "../../images/wtia_img.png";
import e_digest from "../../images/e_digest.png";
import topick_img from "../../images/topick_img.png";
import resolve_img from "../../images/resolve_img.png";
import hkejournal_img from "../../images/hkejournal_img.png";
import fsi_img from "../../images/fsi_img.png";

// import feature1 from "../../images/feature_1.png";
// import feature2 from "../../images/feature_2.png";

const MediaSection = () => {
  // const { t } = useTranslation();

  const mediaCards = [
    {
      image: wtia_img,
      title: "WTIA: ICT Startup Awards (Social Impact)",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7131098625132138496/"
    },
    {
      image: e_digest,
      title: "E-Digest: Seekr人工智能小盒子 增強視障人士獨立性",
      link: "https://www.edigest.hk/%e5%a4%a7%e7%81%a3%e5%8d%80/seekr%e4%ba%ba%e5%b7%a5%e6%99%ba%e8%83%bd%e5%b0%8f%e7%9b%92%e5%ad%90-%e5%a2%9e%e5%bc%b7%e8%a6%96%e9%9a%9c%e4%ba%ba%e5%a3%ab%e7%8d%a8%e7%ab%8b%e6%80%a7-1173198/"
    },
    {
      image: topick_img,
      title: "Topick: HKU's iDendron Gear Up programme connects the community",
      link: "https://topick.hket.com/article/3510510/"
    },
    {
      image: resolve_img,
      title: "Resolve: Lamia: an Ethnic Minority's Story of Empowerment",
      link: "https://www.resolvehk.org/fellows-story-lamia"
    },
    {
      image: fsi_img,
      title: "FSI: The Go-to Place for Social Impact Startups",
      link: "https://www.shared-impact.com/impact-stories/fsi-the-go-to-place-for-social-impact-startups-and-impact-driven-youth/"
    },
    {
      image: hkejournal_img,
      title: "HKEJ: AI鏡頭代視障者看文字場景拍照分析環境",
      link: "https://www1.hkej.com/dailynews/finnews/article/3650021/"
    }
  ];

  return (
    <MediaContainer>
      <ContentWrapper>
        <MainHeading>Media</MainHeading>
        <SubHeading>Featured On</SubHeading>
        <MediaGrid>
          {mediaCards.map((card, index) => (
            <MediaCard 
              key={index}
              onClick={() => window.open(card.link, '_blank')}
              tabIndex={0}
              role="link"
              aria-label={card.title}
            >
              <CardImage src={card.image} alt="" />
              <CardTitle>{card.title}</CardTitle>
            </MediaCard>
          ))}
        </MediaGrid>
      </ContentWrapper>
    </MediaContainer>
  );
};

export default MediaSection;

