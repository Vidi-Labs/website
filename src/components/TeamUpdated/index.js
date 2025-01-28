import React from "react";
import { FaFacebook, FaEnvelope, FaLinkedin, FaGlobe } from "react-icons/fa";
import {
  TeamContainer,
  TeamWrapper,
  TeamTitle,
  TeamGrid,
  TeamCard,
  TeamMemberImage,
  TeamMemberInfo,
  TeamMemberName,
  TeamMemberRole,
  SocialIcons,
  SocialIconLink,
} from "./TeamUpdatedElements";


import Turzo from "../../images/turjo.png";
import Lamia from "../../images/lamia.png";
import Safwan from "../../images/safwan_update.png";
import Reshika from "../../images/reshika_update.png";
import Kousik from "../../images/kousik.png";
import Ahnaf from "../../images/Ahnaf.png";

const teamMembers = [
  {
    name: "Turzo Bose",
    role: "CEO",
    image: Turzo,
    social: {
      email: "info@vidilabs.com.hk",
      linkedin: "https://www.linkedin.com/in/turzobose/",
      facebook: "https://www.facebook.com/seekr.hongkong/"
    }
  },
  {
    name: "Lamia Sreya Rahman",
    role: "COO",
    image: Lamia,
    social: {
      email: "info@vidilabs.com.hk",
      linkedin: "https://www.linkedin.com/in/lamiasreya/",
      facebook: "https://www.facebook.com/seekr.hongkong/"
    }
  },
  {
    name: "Reshika P V",
    role: "CTO",
    image: Reshika,
    social: {
      email: "info@vidilabs.com.hk",
      linkedin: "https://www.linkedin.com/in/reshika-p-v-b1ab5810a/",
      facebook: "https://www.facebook.com/seekr.hongkong/"
    }
  },
  // {
  //   name: "Kelly Kong",
  //   role: "Product Manager",
  //   image: "/placeholder.svg?height=200&width=200",
  //   social: {
  //     email: "info@vidilabs.com.hk",
  //     linkedin: "#",
  //     facebook: "https://www.facebook.com/seekr.hongkong/"
  //   }
  // },
  // {
  //   name: "Kaka Leung",
  //   role: "Business Development",
  //   image: "/placeholder.svg?height=200&width=200",
  //   social: {
  //     email: "info@vidilabs.com.hk",
  //     linkedin: "#",
  //     facebook: "https://www.facebook.com/seekr.hongkong/"
  //   }
  // },
  
  {
    name: "Rezaul Islam Kousik",
    role: "Software Engineer",
    image: Kousik,
    social: {
      email: "info@vidilabs.com.hk",
      linkedin: "#",
      facebook: "https://www.facebook.com/seekr.hongkong/"
    }
  },
  {
    name: "Ahnaf Rahat",
    role: "Software Engineer",
    image: Ahnaf,
    social: {
      email: "info@vidilabs.com.hk",
      linkedin: "https://www.linkedin.com/in/ahnafrahat/",
      facebook: "https://www.facebook.com/seekr.hongkong/"
    }
  },
  {
    name: "Safwan Ahmed",
    role: "Business Analyst",
    image: Safwan,
    social: {
      email: "info@vidilabs.com.hk",
      linkedin: "https://www.linkedin.com/in/safwan-ahmed-7688731b6/",
      facebook: "https://www.facebook.com/seekr.hongkong/"
    }
  }
  // ,
  // {
  //   name: "Benjamin Tam",
  //   role: "Software Engineer",
  //   image: "/placeholder.svg?height=200&width=200",
  //   social: {
  //     email: "info@vidilabs.com.hk",
  //     linkedin: "#",
  //     facebook: "https://www.facebook.com/seekr.hongkong/"
  //   }
  // }
];

const TeamSection = () => {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <TeamContainer id="team">
      <TeamWrapper>
        <TeamTitle>Meet the team</TeamTitle>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamCard key={index}>
              <TeamMemberImage src={member.image} alt={member.name} />
              <TeamMemberInfo>
                <TeamMemberName>{member.name}</TeamMemberName>
                <TeamMemberRole>{member.role}</TeamMemberRole>
                <SocialIcons>
                  <SocialIconLink
                    onClick={() => handleEmailClick(member.social.email)}
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </SocialIconLink>
                  <SocialIconLink
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                  <SocialIconLink
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </SocialIconLink>
                </SocialIcons>
              </TeamMemberInfo>
            </TeamCard>
          ))}
        </TeamGrid>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default TeamSection;

