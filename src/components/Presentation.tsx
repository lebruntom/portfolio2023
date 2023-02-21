import { CiLocationArrow1 } from "react-icons/ci";
import { BsCalendar } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import Button from "./ui/Button";
import { useTranslation } from "react-i18next";
import React, { useContext } from "react";
import { Context } from "../store/store";

const Presentation: React.FC = () => {
  const { t } = useTranslation("main");
  const [state] = useContext(Context);

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
                <BsCalendar className="icon" />
                {t("label-yo")}
              </li>
              <li>
                <AiOutlineCar className="icon" />
                {t("label-driving-licence")}
              </li>
              <li>
                <CiLocationArrow1 className="icon" />
                {t("label-location")}
              </li>
            </div>
          </div>
          <div className="border_bottom_right">
            {" "}
            <Button
              type="button"
              main={true}
              onClick={() => console.log("test")}
            >
              Contactez-moi
            </Button>
            <Button
              type="button"
              main={false}
              onClick={() => console.log("test2")}
            >
              {t("label-contact-me")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
