import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Add padding to avoid edge overflow */
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add some shadow for better visibility */
  overflow: hidden;
  width: 100%;
  max-width: 640px;
  margin-top: 80px;
`;

const Title = styled.h1`
  text-align: center;
  color: #092e49;
  margin: 20px 0;
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 1650px; /* Adjust height if necessary */
  border: none;
  overflow: hidden;
`;

const WaitlistForm = () => {
  return (
    <Container>
      <FormContainer>
        {/* <Title>Join Our Waitlist</Title> */}
        <IframeContainer>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeNnRfs16lFcbY-xDFEGbLWZr1dFWvIVBL_ZaCztR6tjzDrdQ/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            style={{ border: 'none' }}
          >
            Loading…
          </iframe>
        </IframeContainer>
      </FormContainer>
    </Container>
  );
};

export default WaitlistForm;
