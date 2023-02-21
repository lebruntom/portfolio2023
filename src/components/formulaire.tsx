import Button from "./ui/Button";
import emailjs from "@emailjs/browser";
import React, { useContext } from "react";
import { Context } from "../store/store";

const Formulaire: React.FC = () => {
  const [state] = useContext(Context);

  const sendEmail = (e: any) => {
    e.preventDefault();

    console.log("e.target");
    console.log(e.target);
    console.log("e.target");

    emailjs
      .sendForm(
        "service_f7hcz8i",
        "template_bk3m399",
        e.target,
        "user_7mhORLLminMiasEMNYNkA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      className={
        !state.site.basic
          ? "formulaire_container"
          : "formulaire_container_basic"
      }
    >
      <form action="" onSubmit={sendEmail}>
        <div className="entete">
          <input
            type="text"
            name="fullName"
            placeholder="Votre nom..."
            required
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Votre adresse email..."
            required
          />
        </div>
        <div className="content">
          <textarea
            name="message"
            placeholder="Votre message..."
            required
          ></textarea>
        </div>
        
        <div className="btn_form">
          <Button type="reset" main={false}>
            Annuler
          </Button>
          <Button type="submit" main={true}>
            Envoyer
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Formulaire;
