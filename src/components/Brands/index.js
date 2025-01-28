import React from "react";
import Hkstp from "../../images/HKSTP_Logo.png";
import iDendron from "../../images/idendron.png";
import HKSEC from "../../images/hksec.png";
import HKUST from "../../images/HKUST.svg";
import resolve from "../../images/resolve.png";
import Gov from "../../images/gov_funded.svg";
import Sie from "../../images/sie_funded.svg";
import { BrandsContainer, BrandWrapper, Img } from "./BrandsElements";

const Brands = () => {
  return (
    <BrandsContainer>
       <BrandWrapper>
        <Img src={Sie} alt="SIE" />
      </BrandWrapper>
       <BrandWrapper>
        <Img src={Gov} alt="Government" />
      </BrandWrapper>
      <BrandWrapper>
        <Img src={Hkstp} alt="Hkstp" />
      </BrandWrapper>
      <BrandWrapper>
        <Img src={iDendron} alt="iDendron" />
      </BrandWrapper>
      <BrandWrapper>
        <Img src={HKSEC} alt="HKSEC" />
      </BrandWrapper>
      <BrandWrapper>
        <Img src={HKUST} alt="HKUST Entrepreneurship Center" />
      </BrandWrapper>
      <BrandWrapper>
        <Img src={resolve} alt="Resolve" />
      </BrandWrapper>
    </BrandsContainer>
  );
};

export default Brands;
