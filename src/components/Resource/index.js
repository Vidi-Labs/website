import React from 'react';
import styled from 'styled-components';
import pdfLocalUrl from "../../images/Vidi Labs Comprehensive Guidebook.pdf";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  flex: 1;
  padding: 50px;
  max-width: 500px;
`;

const Title = styled.h1`
  text-align: center;
  color: #092e49;
  margin-bottom: 20px;
`;

const Button = styled.a`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #092e49;
  color: white;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;

  &:hover {
    background-color: #074a7e;
  }
`;

const ResourcePage = () => {
//   const pdfUrl = 'https://drive.google.com/file/d/1QiIk9KEFTjSeXHCN4mjjHSl4wU0QpIMY/view'; // Replace with the actual path to your PDF file
  const pdfUrl = pdfLocalUrl; // Replace with the actual path to your PDF file

  return (
    <Container>
      <ContentContainer>
        <Title>SEEKR Guidebook</Title>

        <Button href={pdfUrl} target="_blank" rel="noopener noreferrer">
          Read Now
        </Button>

        <Button href={pdfUrl} download>
          Download
        </Button>
      </ContentContainer>
    </Container>
  );
};

export default ResourcePage;