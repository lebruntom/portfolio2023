import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { Context } from "../store/store";
const Welcome: React.FC = () => {
  const { t } = useTranslation("main");
  const [state] = useContext(Context);

  const title = t("welcome-title");
  const array: string[] = [];
  for (let i = 0; i < title.length; i++) {
    array.push(title[i]);
  }

  return (
    <div className={state.site.basic ? "welcome " : "welcome_animationText"}>
      <h1>
        {array.map((letter) => (
          <span>{letter}</span>
        ))}
      </h1>
      <div className="welcome-subtile">Portfolio Tom Lebrun</div>
    </div>
  );
};

export default Welcome;
