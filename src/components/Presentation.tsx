import { FaCarAlt, FaLocationArrow, FaCalendar } from "react-icons/fa";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";
import React, { useContext } from "react";
import { Context } from "../store/store";
import { scroller } from "react-scroll"; //Importation scroll

const Presentation: React.FC = () => {
  const { t } = useTranslation("main");
  const [state] = useContext(Context);

  function goToContact() {
    if (state.site.basic) {
      scroller.scrollTo("contact", {
        duration: 1000,
        delay: 0,
        smooth: true,
        container: "contact",
        offset: 50,
      });
    }
  }

  function goToCv() {
    if (state.site.basic) {
      scroller.scrollTo("cv", {
        duration: 1000,
        delay: 0,
        smooth: true,
        container: "cv",
        offset: 50,
      });
    } else {
      window.open(require("../assets/files/CV_Tom_Lebrun.pdf"), "_blank");
    }
  }

  return (
    <div className={state.site.basic ? "presentation-basic" : "presentation"}>
      <div className="container">
        <div className="left">
          <div className="name">
            Tom <span>Lebrun</span>
          </div>
          <div className="border_top"></div>

          <div className="presentation_container">
            <h3>{t("presentation-title")}</h3>
            <div className="content">{t("presentation-content")}</div>
          </div>
        </div>
        <div className="right">
          <div className="detail_container">
            <h3>Detail</h3>
            <div className="list">
              <li>
                <FaCalendar className="icon" />
                {t("label-yo")}
              </li>
              <li>
                <FaCarAlt className="icon" />
                {t("label-driving-licence")}
              </li>
              <li>
                <FaLocationArrow className="icon" />
                {t("label-location")}
              </li>
            </div>
          </div>
          <div className="border_bottom_right">
            <div className="container2">
              <div className="left-container">
                <div>
                  <Button type="button" main={true} onClick={() => goToCv()}>
                    {t("cv-title")}
                  </Button>
                  <Button
                    type="button"
                    main={false}
                    onClick={() => goToContact()}
                  >
                    {t("label-contact-me")}
                  </Button>
                </div>
              </div>
              <div className="border-right"></div>
            </div>
            <div className="border-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
