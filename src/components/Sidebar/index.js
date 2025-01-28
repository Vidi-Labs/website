import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./SidebarElements";

import cartIcon from "../../images/cart.svg";
import langIcon from "../../images/language_change.svg";


const Sidebar = ({ isOpen, toggle }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18next.changeLanguage("cn");
    } else {
      i18next.changeLanguage("en");
    }
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/aboutus" onClick={toggle}>
              {t("aboutUs")}
            </SidebarLink>
            <SidebarLink to="/product" onClick={toggle}>
              {t("product")}
            </SidebarLink>
            <SidebarLink to="/social" onClick={toggle}>
              {t("social")}
            </SidebarLink>
            <SidebarLink to="/support" onClick={toggle}>
              {t("Support")}
            </SidebarLink>
            <SidebarLink to="/resource" onClick={toggle}>
              {t("Resources")}
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/waitlist">
            <img src={cartIcon} alt="Cart" />
            </SidebarRoute>
            <SidebarRoute to="/" onClick={() => changeLanguage()}>
            <img src={langIcon} alt="Language Change" />
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
