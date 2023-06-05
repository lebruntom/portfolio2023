import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../../store/store";
import Checkbox from "../ui/checkbox";
import LocaleChanger from "./locale-changer";
// import "./settings.css";
const Settings: React.FC = () => {
  const [state, dispatch] = useContext(Context);
  const { i18n, t } = useTranslation("main");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    dispatch({
      type: "changeSiteStatus",
      payload: {
        basic: !state.site.basic,
      },
    });
  };
  return (
    <>
      <div
        className={
          state.site.basic ? "settings_fixed fadeIn2" : "settings_fixed "
        }
      >
        <Checkbox
          id={"networkView-showDetails"}
          onChange={handleChange}
          checked={state.site.basic}
        />
      </div>
      <div className="local-changer-container">
        <LocaleChanger />
      </div>
      {state.level.number === 1 && !state.site.basic && (
        <div>
          <img
            src={require("../../assets/img/arrow.png")}
            className="arrow_setting"
          />
          <div className="title_switch_settings">{t("switch-basic")}</div>
        </div>
      )}
    </>
  );
};

export default Settings;
