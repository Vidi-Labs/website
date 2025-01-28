import React, { useState } from "react";
import { 
KeyFeatureContainer,
FeatureH1,
BackgroundImage
 } from "./StattisticsElements";
import keyImage1 from "../../images/statistics.png";


import { useTranslation } from "react-i18next";

const StatisticsSection = () => {

const { t } = useTranslation();


  return (
    <KeyFeatureContainer>
      <FeatureH1>{t("statistics")}</FeatureH1>
      <BackgroundImage src={keyImage1} alt="Statistics Background" />
    </KeyFeatureContainer>
  );
};

export default StatisticsSection;