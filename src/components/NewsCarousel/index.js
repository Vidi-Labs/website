'use client'

import React, { useState, useEffect } from 'react';
import {
  CarouselContainer,
  CarouselTrack,
  CarouselCard,
  CardImage,
  CardContent,
  CardTitle,
  ReadMoreButton,
} from './NewsCarouselElements';

import wtia_img from "../../images/wtia_img.png";
import e_digest from "../../images/e_digest.png";
import topick_img from "../../images/topick_img.png";
import resolve_img from "../../images/resolve_img.png";
import hkejournal_img from "../../images/hkejournal_img.png";
import fsi_img from "../../images/fsi_img.png";

const cardData = [
  {
    imageUrl: wtia_img,
    title: "WTIA: ICT Startup Awards (Social Impact)",
    postLink: "https://www.linkedin.com/feed/update/urn:li:activity:7131098625132138496/"
  },
  {
    imageUrl: e_digest,
    title: "E-Digest: Seekr人工智能小盒子 增強視障人士獨立性",
    postLink: "https://www.edigest.hk/%e5%a4%a7%e7%81%a3%e5%8d%80/seekr%e4%ba%ba%e5%b7%a5%e6%99%ba%e8%83%bd%e5%b0%8f%e7%9b%92%e5%ad%90-%e5%a2%9e%e5%bc%b7%e8%a6%96%e9%9a%9c%e4%ba%ba%e5%a3%ab%e7%8d%a8%e7%ab%8b%e6%80%a7-1173198/?utm_campaign=ED_ContentCopy&utm_source=Web-inventory&utm_medium=Content-Copy_ED"
  },
  {
    imageUrl: topick_img,
    title: "Topick: HKU's iDendron Gear Up programme connects the community to support healthcare start-ups",
    postLink: "https://topick.hket.com/article/3510510/%E6%B8%AF%E5%A4%A7%20iDendron%20Gear%20Up%E8%A8%88%E5%8A%83%E9%80%A3%E7%B9%AB%E5%90%84%E7%95%8C%20%C2%A0%E5%85%A8%E6%96%B9%E4%BD%8D%E6%94%AF%E6%8C%81%E9%86%AB%E7%99%82%E5%81%A5%E5%BA%B7%E5%88%9D%E5%89%B5%E4%BC%81%E6%A5%AD?mtc=10001"
  },
  {
    imageUrl: resolve_img,
    title: "Resolve: Lamia: an Ethnic Minority's Story of Empowerment",
    postLink: "https://www.resolvehk.org/fellows-story-lamia"
  },
  {
    imageUrl: fsi_img,
    title: "FSI: The Go-to Place for Social Impact Startups and Impact-driven Youth",
    postLink: "https://www.shared-impact.com/impact-stories/fsi-the-go-to-place-for-social-impact-startups-and-impact-driven-youth/"
  },
  {
    imageUrl: hkejournal_img,
    title: "HKEJ: AI鏡頭代視障者看文字場景拍照分析環境 耳機語音導航",
    postLink: "https://www1.hkej.com/dailynews/finnews/article/3650021/AI%E9%8F%A1%E9%A0%AD%E4%BB%A3%E8%A6%96%E9%9A%9C%E8%80%85%E7%9C%8B%E6%96%87%E5%AD%97%E5%A0%B4%E6%99%AF"
  }
];

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % cardData.length;
      cards.push(cardData[index]);
    }
    return cards;
  };

  return (
    <CarouselContainer>
      <CarouselTrack style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
        {cardData.concat(cardData.slice(0, 2)).map((card, index) => (
          <CarouselCard key={index}>
            <CardImage src={card.imageUrl} alt={card.title} />
            <CardContent>
              <CardTitle>{card.title}</CardTitle>
              <ReadMoreButton
                href={card.postLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </ReadMoreButton>
            </CardContent>
          </CarouselCard>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
};

export default NewsCarousel;

