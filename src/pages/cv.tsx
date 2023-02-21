import Button from "../components/ui/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../store/store";

const Cv: React.FC = () => {
  const [state] = useContext(Context);

  return (
    <div className={!state.site.basic ? "cv_container" : "cv_container_basic"}>
      <img src={require("../assets/img/cv.png")} className="cv_img" />

      <div className="right_container">
        <div className="cv_title">Curriculum vitæ</div>
        <div className="cv_btn_container">
          <Button type="button" main={false}>
            <AiOutlineDownload />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cv;
