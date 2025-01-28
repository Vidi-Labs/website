import styled from "styled-components";

export const BrandsContainer = styled.div`
  color: #fff;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const BrandWrapper = styled.div`
  margin: 1rem;
  width: 10%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1300px) {
    width: 20%;
  }
`;

export const Img = styled.img`
  width: 100%;
`;
