import { useContext } from "react";
import Formulaire from "../components/formulaire";
import { Context } from "../store/store";

const Contact: React.FC = () => {
  const [state] = useContext(Context);

  return (
    <div
      className={
        !state.site.basic ? "contact_container" : "contact_container_basic"
      }
    >
      <Formulaire />
    </div>
  );
};

export default Contact;
