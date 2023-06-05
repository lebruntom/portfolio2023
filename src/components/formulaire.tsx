import Button from "./ui/Button";
import emailjs from "@emailjs/browser";
import React, { useContext, useState } from "react";
import { Context } from "../store/store";
import { useTranslation } from "react-i18next";
import { BsCheckLg } from "react-icons/bs";
interface messageStatusInterface {
  status: string;
  message: string;
}

const Formulaire: React.FC = () => {
  const [state] = useContext(Context);
  const { t } = useTranslation("main");

  const [messageStatus, setMessageStatus] = useState<messageStatusInterface>({
    status: "",
    message: "",
  });

  const sendEmail = (e: any) => {
    e.preventDefault();

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

    setMessageStatus({ status: "send", message: t("alert-message-send") });
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
        {messageStatus.status === "send" ? (
          <div className="alert">
            <div className="icon-success">
              <BsCheckLg />
            </div>
            <>{messageStatus.message}</>
          </div>
        ) : (
          <div className="alert-empty">{t("contact-me-message")}</div>
        )}
        <div className="entete">
          <input
            type="text"
            name="fullName"
            placeholder={`${t("email-placeholder-name")}`}
            required
          />
          <input
            type="email"
            name="reply_to"
            placeholder={`${t("email-placeholder-email")}`}
            required
          />
        </div>
        <div className="content">
          <textarea
            name="message"
            placeholder={`${t("email-placeholder-message")}`}
            required
          ></textarea>
        </div>

        <div className="btn_form">
          <div className="btn_container">
            <Button type="reset" main={false}>
              {`${t("email-button-cancel")}`}
            </Button>
          </div>
          <div className="btn_container">
            <Button type="submit" main={true}>
              {`${t("email-button-send")}`}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulaire;
