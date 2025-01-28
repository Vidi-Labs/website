import styled from "styled-components";

export const ProductContainer = styled.section`
  background-color: #E0F8F2;
  padding: 60px 24px;
  padding-top: 120px;
  text-align: center;
`;

export const MainHeading = styled.h1`
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: 48px;
  color: #2E2F35;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 60px;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 600px;
    gap: 60px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ColumnTitle = styled.h2`
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: 32px;
  color: #2E2F35;
  margin-bottom: 24px;
`;

export const FeatureList = styled.ul`
  // list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  width: 100%;
  max-width: 300px;
`;

export const FeatureItem = styled.li`
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: 18px;
  color: #2E2F35;
  margin-bottom: 16px;
  position: relative;
  padding-left: 5px;

  &:before {
    // content: "○";
    position: absolute;
    left: 0;
    color: #2E2F35;
  }
`;

export const DeviceImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
`;

export const Description = styled.p`
  font-family: var(--font-inter);
  font-weight: 500;
  font-size: 20px;
  color: #2E2F35;
  line-height: 1.6;
  max-width: 300px;
  text-align: left;
`;

export const TagLine = styled.div`
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: 48px;
  color: #00A0C7;
  margin-top: 80px;
  line-height: 1.2;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-top: 60px;
  }
`;

export const ButtonContainer = styled.div`
  display: relative;
  margin-top: 50px;
  // gap: 20px;
  justify-content: center;
`;

export const RoundedButton = styled.button`
  width: 160px;
  height: 50px;
  background-color: #000000;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius:20px;
`;
