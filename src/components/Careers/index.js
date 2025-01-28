import React from "react";
import {
  Container,
  CareerCard,
  CareerButton,
  CareerCardsWrapper,
  JobTitle,
  JobDescription,
  Icon,
  LocationText,
  SeekrLogo,
  Wrapper,
} from "./CareersElements";
import seekrLogo from "../../images/seekrLogo.png";
import { useTranslation } from "react-i18next";

const Careers = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Wrapper>
          <Icon to="/">
            <SeekrLogo src={seekrLogo} />
          </Icon>
          <CareerCardsWrapper>
            <CareerCard>
              <JobTitle>{t("AI Engineer")}</JobTitle>
              <LocationText>{t("Hong Kong")}</LocationText>
              <JobDescription>{t("AIEngineerJobDesc")}</JobDescription>
              <CareerButton
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto:info@vidilabs.com.hk";
                  e.preventDefault();
                }}
              >
                {t("Apply Now")}
              </CareerButton>
            </CareerCard>
            <CareerCard>
              <JobTitle>{t("Data Engineer")}</JobTitle>
              <LocationText>{t("Hong Kong")}</LocationText>
              <JobDescription>{t("DataEngineerJobDesc")}</JobDescription>
              <CareerButton
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto:info@vidilabs.com.hk";
                  e.preventDefault();
                }}
              >
                {t("Apply Now")}
              </CareerButton>
            </CareerCard>
          </CareerCardsWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Careers;
