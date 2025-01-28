import React from "react";
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import cartIcon from "../../images/cart.svg";
import langIcon from "../../images/language_change.svg";



import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  SeekrLogo,
  NavLinksCustom,
} from "./NavbarElements";
import seekrLogo from "../../images/seekrLogo.png";
import i18next from "i18next";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };


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
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <SeekrLogo src={seekrLogo} />
            </NavLogo>
            <MobileIcon onClick={toggle}>
            <FaBars style={{ color: 'black' }} />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinksCustom
                  to="/aboutus"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  {t("aboutUs")}
                </NavLinksCustom>
              </NavItem>
              <NavItem>
                <NavLinksCustom
                  to="/product"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  {t("product")}
                </NavLinksCustom>
              </NavItem>
              <NavItem>
                <NavLinksCustom
                  to="/social"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  {t("social")}
                </NavLinksCustom>
              </NavItem>
              <NavItem>
                <NavLinksCustom
                  to="/support"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  {t("Support")}
                </NavLinksCustom>
              </NavItem>
              <NavItem>
                <NavLinksCustom
                  to="/resource"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >
                  {t("Resource")}
                </NavLinksCustom>
              </NavItem>
            </NavMenu>
            <NavBtn>
            <NavLinksCustom to="/waitlist">
                <img src={cartIcon} alt="Cart" />
              </NavLinksCustom>
              {/* Language Change Icon */}
              <NavLinksCustom to="/" onClick={() => changeLanguage()}>
                <img src={langIcon} alt="Language Change" />
              </NavLinksCustom>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

{/* <Route path="/" element={<Home />} />
<Route path="/careers" element={<CareersPage />} />
<Route path="/aboutus" element={<AboutUsPage />} />
<Route path="/product" element={<ProductPage />} />
<Route path="/support" element={<SupportPage />} />
<Route path="/social" element={<SocialPage />} />
<Route path="/waitlist" element={<WaitListPage />} /> */}
