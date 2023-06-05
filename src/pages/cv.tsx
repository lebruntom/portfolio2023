import Button from "../components/ui/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../store/store";
import Svg from "../components/layout/svg";
import { useTranslation } from "react-i18next";

const Cv: React.FC = () => {
  const [state] = useContext(Context);
  const { i18n } = useTranslation("main");

  function openCv() {
    if (i18n.language === "fr") {
      window.open(require("../assets/files/CV_Tom_Lebrun_fr.pdf"), "_blank");
    } else {
      window.open(require("../assets/files/CV_Tom_Lebrun_en.pdf"), "_blank");
    }
  }

  return (
    <div
      className={!state.site.basic ? "cv_container" : "cv_container_basic"}
      id="cv"
    >
      {i18n.language === "fr" ? (
        <img
          src={require("../assets/img/CV_Tom_Lebrun_fr.png")}
          className="cv_img"
        />
      ) : (
        <img
          src={require("../assets/img/CV_Tom_Lebrun_en.png")}
          className="cv_img"
        />
      )}

      <div className="right_container">
        <div className="cv_title">Curriculum vitæ</div>
        <div className="cv_btn_container">
          <Button type="button" main={false} onClick={() => openCv()}>
            <AiOutlineDownload />
          </Button>
        </div>
      </div>

      {state.site.basic ? (
        <>
          <Svg
            top={"4500"}
            bottom={"0"}
            left={"30vw"}
            right={"0"}
            width={"40vw"}
            height={"40vw"}
            rotation={-180}
          />
        </>
      ) : (
        <>
          <Svg
            top={"-300"}
            bottom={"0"}
            left={"200"}
            right={"0"}
            width={"500"}
            height={"500"}
            rotation={50}
          />
          <Svg
            top={"150"}
            bottom={"0"}
            left={"950"}
            right={"0"}
            width={"500"}
            height={"500"}
            rotation={128}
          />
        </>
      )}
    </div>
  );
};

export default Cv;
