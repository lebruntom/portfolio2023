import { CiLocationArrow1 } from "react-icons/ci";
import { BsCalendar } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";

const Presentation: React.FC = () => {
  return (
    <div>
      <div className="border_top"></div>
      <div className="name">
        Tom <span>Lebrun</span>
      </div>
      <div className="presentation_container">
        <h3>Presentation</h3>
        <div className="presentation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sunt
          laudantium excepturi eius quisquam, provident impedit perferendis nisi
          iure saepe recusandae. Nemo beatae possimus consequuntur fuga dolorum
          enim consectetur praesentium.
        </div>
      </div>
      <div className="detail_container">
        <h3>Detail</h3>
        <div className="list">
          <li>
            <BsCalendar />
            20 ans
          </li>
          <li>
            <AiOutlineCar />
            permis B
          </li>
          <li>
            <CiLocationArrow1 />
            Vannes{" "}
          </li>
        </div>
      </div>
      <div className="border_bottom_right"></div>
    </div>
  );
};

export default Presentation;
