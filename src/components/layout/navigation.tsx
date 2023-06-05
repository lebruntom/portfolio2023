import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll"; //Importation scroll
import LocaleChanger from "./locale-changer";

//Composant Navbar
const Navigation: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState<Boolean>(false);
  const { t } = useTranslation("main");
  // const checkboxRef = useRef<HTMLInputElement | null>(null);
  const [checkBoxChecked, setCheckBoxChecked] = useState<boolean>();

  window.onscroll = function () {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  function checkboxChecked() {
    // if (!checkboxRef.current) {
    //   return;
    // }
    setCheckBoxChecked(false);
  }

  return (
    <div>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigationCheckbox"
          id="navi"
          onClick={() => setCheckBoxChecked(!checkBoxChecked)}
          // ref={checkboxRef}
          checked={checkBoxChecked}
        ></input>

        <label htmlFor="navi" className="navigationBtn">
          <span className="navigationIcon">&nbsp;</span>
        </label>

        <div className="navigationBg">&nbsp;</div>

        <header className="nav">
          <ul className={checkBoxChecked ? "navigationListe" : "none"}>
            <li className="navigationItem">
              <Link
                activeClass="underline"
                to="home"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
                className="liens"
                onClick={() => checkboxChecked()}
              >
                {t("home-title")}
              </Link>
            </li>

            <li className="navigationItem">
              <Link
                activeClass="underline"
                to="bio"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="liens"
                onClick={() => checkboxChecked()}
              >
                {t("presentation-title")}
              </Link>
            </li>

            <li className="navigationItem">
              <Link
                activeClass="underline"
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="liens"
                onClick={() => checkboxChecked()}
              >
                {t("projects-title")}
              </Link>
            </li>

            <li className="navigationItem">
              <Link
                activeClass="underline"
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="liens"
                onClick={() => checkboxChecked()}
              >
                {t("skills-title")}
              </Link>
            </li>

            <li className="navigationItem">
              <Link
                activeClass="underline"
                to="cv"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="liens"
                onClick={() => checkboxChecked()}
              >
                {t("cv-title")}
              </Link>
            </li>

            <li className="navigationItem">
              <Link
                activeClass="underline"
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="liens"
                onClick={() => checkboxChecked()}
              >
                {t("contact-title")}
              </Link>
            </li>
            <li className="mobileLocaleChangerContainer">
              <LocaleChanger />
            </li>
          </ul>
        </header>
      </div>

      <div className="navigation-pc ">
        <nav className={isScrolling ? "nav-pc fade-in black" : "nav-pc fadeIn"}>
          <div className="logo">
            <Link
              activeClass="logo"
              to="home"
              spy={true}
              smooth={true}
              offset={-600}
              duration={500}
              className="logo"
            >
              <h1>
                <span className="tom-navbar">Tom</span>
                <span> </span>
                <span className="lebrun-navbar">Lebrun</span>
              </h1>
            </Link>
          </div>
          <ul>
            <li>
              <Link
                activeClass="underline"
                to="home"
                spy={true}
                smooth={true}
                offset={-600}
                duration={500}
                className="underline"
              >
                {t("home-title")}
              </Link>
            </li>
            <li>
              <Link
                activeClass="underline"
                to="bio"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="underline"
              >
                {t("presentation-title")}
              </Link>
            </li>
            <li>
              <Link
                activeClass="underline"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="underline"
              >
                {t("projects-title")}
              </Link>
            </li>
            <li>
              <Link
                activeClass="underline"
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="underline"
              >
                {t("skills-title")}
              </Link>
            </li>
            <li>
              <Link
                activeClass="underline"
                to="cv"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="underline"
              >
                {t("cv-title")}
              </Link>
            </li>

            <li>
              <Link
                activeClass="underline"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="underline"
              >
                {t("contact-title")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
