import React from "react";
import {
  TeamCard,
  TeamContainer,
  TeamH1,
  TeamH2,
  TeamIcon,
  TeamP,
  TeamWrapper,
  SocialIconLink,
} from "./TeamElements";
import Turzo from "../../images/Turzo.png";
import Sreya from "../../images/Sreya.png";
import Reno from "../../images/Reno.png";
import Jacky from "../../images/Jacky.png";
import Kartikay from "../../images/Kartikay.png";
import Reshika from "../../images/Reshika.png";
import Abby from "../../images/Abby.png";
import Safwan from "../../images/Safwan.png";
import Tanusree from "../../images/Tanusree.png";
import Sakshi from "../../images/Sakshi.png";
import Thomas from "../../images/Thomas.png";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();

  return (
    <>
      <TeamContainer id="team">
        <TeamH1>{t("Our Team")}</TeamH1>
        <TeamWrapper>
          <TeamCard>
            <TeamIcon src={Turzo} />
            <TeamH2>Turzo Bose</TeamH2>
            <SocialIconLink
              href="https://www.linkedin.com/in/turzobose/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <TeamP>{t("CEO")}</TeamP>
          </TeamCard>
          <TeamCard>
            <TeamIcon src={Sreya} />
            <TeamH2>Lamia Sreya Rahman</TeamH2>
            <SocialIconLink
              href="https://www.linkedin.com/in/lamiasreya/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <TeamP>{t("COO")}</TeamP>
          </TeamCard>
          <TeamCard>
            <TeamIcon src={Reno} />
            <TeamH2>Reno Prawoto Adley</TeamH2>
            <SocialIconLink
              href="https://www.linkedin.com/in/raprawoto/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <TeamP>{t("Tech Master")}</TeamP>
          </TeamCard>
          <TeamCard>
            <TeamIcon src={Jacky} />
            <TeamH2>Jacky Chow</TeamH2>
            <SocialIconLink
              href="https://www.linkedin.com/in/jacky-chow-043304144/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <TeamP>{t("AI Engineer")}</TeamP>
          </TeamCard>
          {/* <TeamCard>
            <TeamIcon src={Kartikay} />
            <TeamH2>Kartikay Sharma</TeamH2>
            <SocialIconLink
              href="https://www.linkedin.com/in/kartikaysh/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <TeamP>{t("Graphic Designer")}</TeamP>
          </TeamCard> */}
          <TeamCard>
            <TeamIcon src={Reshika} />
            <TeamH2>Reshika Velumani</TeamH2>
            <SocialIconLink
              href="https://www.linkedin.com/in/reshika-velumani-b1ab5810a/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <TeamP>{t("AI Engineer")}</TeamP>
          </TeamCard>
          <TeamCard>
            <TeamIcon src={Safwan} />
            <TeamH2>Safwan Ahmed</TeamH2>
            <SocialIconLink
              href="https://www.linkedin.com/in/safwan-ahmed-7688731b6/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <TeamP>{t("Design Lead")}</TeamP>
          </TeamCard>
          <TeamCard>
            <TeamIcon src={Abby} />
            <TeamH2>Abby Leung</TeamH2>
            <SocialIconLink
              href="https://www.linkedin.com/in/abby-leung-2040b4198/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <TeamP>{t("Marketing & Business Intern")}</TeamP>
          </TeamCard>
          <TeamCard>
            <TeamIcon src={Sakshi} />
            <TeamH2>Sakshi Vasudev</TeamH2>
            <SocialIconLink
              href="https://www.linkedin.com/in/sakshi-vasudev/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <TeamP>{t("Marketing & Business Intern")}</TeamP>
          </TeamCard>
          <TeamCard>
            <TeamIcon src={Tanusree} />
            <TeamH2>Tanusree Bose</TeamH2>
            <SocialIconLink
              href="https://www.linkedin.com/in/tanusreebose/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <TeamP>{t("Digital Marketing Intern")}</TeamP>
          </TeamCard>
          <TeamCard>
            <TeamIcon src={Thomas} />
            <TeamH2>Thomas Cheng</TeamH2>
            <SocialIconLink
              //href="https://www.linkedin.com/in/reshika-velumani-b1ab5810a/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
            <TeamP>{t("Software Engineering Intern")}</TeamP>
          </TeamCard>
        </TeamWrapper>
      </TeamContainer>
    </>
  );
};

export default Team;
