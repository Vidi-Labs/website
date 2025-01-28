import React, { useState } from "react";
import {
 ContactContainer,
 FormContainer,
 ImageContainer,
 ContactForm,
 Title,
 InputField,
 SubmitButton,
 InputField2

} from "./ContactUsElements";
import { useTranslation } from "react-i18next";
import devicePhoto from "../../images/talk_lamia.png";

const ContactUsPage = () => {
    return (
      <ContactContainer>
  
        <ImageContainer>
          <img src={devicePhoto} alt="Contact" style={{ width: "80%" }} />
        </ImageContainer>
        <FormContainer>
          <Title>Talk to Us</Title>
          <ContactForm>
            <InputField type="text" placeholder="Your Name" />
            <InputField type="email" placeholder="Your Email" />
            <InputField2 type="text" placeholder="Your Message" />
            <SubmitButton type="submit">Submit</SubmitButton>
          </ContactForm>
        </FormContainer>
      </ContactContainer>
    );
  };

export default ContactUsPage;