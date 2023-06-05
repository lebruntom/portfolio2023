import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../../store/store";
import Checkbox from "../ui/checkbox";
const LocaleChanger: React.FC = () => {
  const { i18n } = useTranslation("main");
  const [state] = useContext(Context);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      onClick={() => changeLanguage(i18n.language === "fr" ? "en" : "fr")}
      className={state.site.basic ? "fadeIn2 local-changer" : "local-changer"}
    >
      {i18n.language === "fr" ? "fr" : "en"}
    </div>
  );
};

export default LocaleChanger;
