import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #ffffff;
  padding: 64px 24px;
`;

export const FooterWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 48px;

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Logo = styled.img`
  height: 64px;
  width: auto;
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NavTitle = styled.h3`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NavItem = styled(Link)`
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContactTitle = styled.h3`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const ContactText = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0;
`;

export const SubscribeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 48px;
  border-top: 1px solid #eee;
`;

export const SubscribeForm = styled.div`
  display: flex;
  gap: 12px;
  max-width: 400px;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SubscribeInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

export const SubscribeButton = styled.button`
  padding: 12px 24px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #333;
  }
`;

export const CopyrightText = styled.p`
  color: #666;
  font-size: 14px;
  text-align: center;
  margin: 0;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 32px;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 90%;

  h2 {
    margin-bottom: 16px;
    color: #000;
  }

  p {
    margin-bottom: 24px;
    color: #666;
  }
`;

export const CloseButton = styled.button`
  padding: 12px 24px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #333;
  }
`;

