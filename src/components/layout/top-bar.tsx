import { useContext } from "react";
import { Context } from "../../store/store";
import { useTranslation } from "react-i18next";
const TopBar: React.FC = () => {
  const [state, dispatch] = useContext(Context);
  const { t, i18n } = useTranslation("main");
  return (
    <div className="topBar_container fadeIn">
      {t("level-title")} {state.level.number} : {state.level.name}
    </div>
  );
};

export default TopBar;
