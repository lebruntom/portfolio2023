import { useContext } from "react";
import { Context } from "../store/store";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
interface CardsProps {
  type: "email" | "phone";
  content: string;
}

const Contact_card: React.FC<CardsProps> = (props) => {
  const { content, type } = props;
  return (
    <div className={"contact_card_container"}>
      {type == "email" && <HiOutlineMail />}
      {type == "phone" && <BsTelephone />}
      {content}
    </div>
  );
};

export default Contact_card;
