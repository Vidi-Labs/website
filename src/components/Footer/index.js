import React, { useState } from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterGrid,
  LogoSection,
  NavSection,
  ContactSection,
  Logo,
  NavTitle,
  NavList,
  NavItem,
  ContactTitle,
  ContactText,
  SubscribeSection,
  SubscribeForm,
  SubscribeInput,
  SubscribeButton,
  CopyrightText,
  Modal,
  ModalContent,
  CloseButton
} from "./FooterElements";
import { Link } from "react-router-dom";
import seekrLogo from "../../images/seekrLogo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const handleSubscribe = async () => {
    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        fields: {
          name: "",
          last_name: "",
        },
        groups: ["128896319777408828"],
      }),
    });

    const result = await response.json();
    if (response.ok) {
      setShowModal(true);
    }
    setEmail("");
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterGrid>
            <LogoSection>
              <Link to="/">
                <Logo src={seekrLogo} alt="Seekr" />
              </Link>
            </LogoSection>

            <NavSection>
              <NavTitle>SEEKR</NavTitle>
              <NavList>
                <NavItem to="/about-us">About us</NavItem>
                <NavItem to="/product">Product</NavItem>
                <NavItem to="/media">Media</NavItem>
              </NavList>
            </NavSection>

            <NavSection>
              <NavTitle>RESOURCES</NavTitle>
              <NavList>
                <NavItem to="/support">Support</NavItem>
                <NavItem to="/resource">Resource</NavItem>
                <NavItem to="/privacy-policy">Privacy Policy</NavItem>
              </NavList>
            </NavSection>

            <ContactSection>
              <ContactTitle>CONTACT US</ContactTitle>
              <ContactText>info@vidilabs.com.hk</ContactText>
              <ContactText>Address: HKSTP Innocenter,</ContactText>
              <ContactText>72 Tat Chee Avenue,</ContactText>
              <ContactText>Kowloon Tong, Hong Kong</ContactText>
            </ContactSection>
          </FooterGrid>

          <SubscribeSection>
            <SubscribeForm>
              <SubscribeInput
                type="email"
                placeholder={t("Enter your email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <SubscribeButton onClick={handleSubscribe}>
                {t("Subscribe")}
              </SubscribeButton>
            </SubscribeForm>
            <CopyrightText>
              {t("Seekr © 2024 All rights reserved.")}
            </CopyrightText>
          </SubscribeSection>
        </FooterWrap>
      </FooterContainer>

      {showModal && (
        <Modal>
          <ModalContent>
            <h2>{t("Thank you!")}</h2>
            <p>{t("You have successfully subscribed to Seekr's newsletter.")}</p>
            <CloseButton onClick={() => setShowModal(false)}>
              {t("Close")}
            </CloseButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Footer;

