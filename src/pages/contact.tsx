import { useContext } from "react";
import Contact_card from "../components/contact_card";
import Formulaire from "../components/formulaire";
import Svg from "../components/layout/svg";
import { Context } from "../store/store";

const Contact: React.FC = () => {
  const [state] = useContext(Context);

  return (
    <div
      id="contact"
      className={
        !state.site.basic ? "contact_container" : "contact_container_basic"
      }
    >
      <Formulaire />
      <div className="card_container">
        <Contact_card type="email" content="tomlebrun27@gmail.com" />
        <Contact_card type="phone" content="06.89.39.99.49" />
      </div>
      {state.site.basic ? (
        <></>
      ) : (
        <>
          <Svg
            top={"-500"}
            bottom={"0"}
            left={"800"}
            right={"0"}
            width={"500"}
            height={"500"}
            rotation={50}
          />
          <Svg
            top={"150"}
            bottom={"0"}
            left={"250"}
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

export default Contact;
