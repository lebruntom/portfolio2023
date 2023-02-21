import Button from "./ui/Button";

interface CardsProps {
  left?: string;
  img: string;
  link?: string;
  title: string;
  description: string;
  year: string;
}

const Cards: React.FC<CardsProps> = (props) => {
  const { left, img, title, description, year } = props;
  return (
    <div className="cards_container" style={{ left: `${left}` }}>
      <div className="bar"> </div>
      <img src={require(`../assets/img/${img}.png`)} className="card_img" />
      <div>{description}</div>
      <div className="date">{year}</div>
      <div className="button_container">
        <Button type="button" main={false}>
          {title}
        </Button>
      </div>
    </div>
  );
};

export default Cards;
