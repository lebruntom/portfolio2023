import Button from "./ui/Button";
import React, { useContext } from "react";
import { Context } from "../store/store";

interface CardsProps {
  left?: string;
  img: string;
  link?: string;
  title: string;
  description: string;
  year: string;
}

const Cards: React.FC<CardsProps> = (props) => {
  const { left, img, title, description, year, link } = props;
  const [state] = useContext(Context);

  const openLink = () => {
    if (link) {
      window.open(`${link}`, "_blank");
    }
  };

  return (
    <div
      style={{ left: `${left}` }}
      className={state.site.basic ? "cards_container_basic" : "cards_container"}
    >
      <div className="bar"> </div>
      <div className="img_container">
        <img src={require(`../assets/img/${img}.png`)} className="card_img" />
      </div>
      <div className="description">{description}</div>
      <div className="date">{year}</div>
      <div className="button_container">
        <Button
          type="button"
          main={false}
          onClick={() => openLink()}
          id={title}
        >
          {title}
        </Button>
      </div>
    </div>
  );
};

export default Cards;
