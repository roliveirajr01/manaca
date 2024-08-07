import React from "react";
import style from "./form-section.module.css";
import { IconArrow } from "../../../assets/svg/icon-arrow";

export const FormSection = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [tell, setTell] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [segment, setSegment] = React.useState("");
  const [employee, setEmployee] = React.useState("");
  const [invoicing, setInvoicing] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <section className={style.formSection}>
      <div className={`container ${style.content}`}>
        <h2>Faça seu projeto com a gente!</h2>
        <form>
          <div className={style.row}>
            <label>
              <p>Nome*</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              <p>Email corporativo*</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className={style.row}>
            <label>
              <p>Telefone*</p>
              <input
                type="text"
                value={tell}
                onChange={(e) => setTell(e.target.value)}
              />
            </label>
            <label>
              <p>Empresa*</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setCompany(e.target.value)}
              />
            </label>
          </div>

          <div className={style.row}>
            <label>
              <p>Cargo*</p>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </label>
            <label>
              <p>Segmento*</p>
              <input
                type="text"
                value={segment}
                onChange={(e) => setSegment(e.target.value)}
              />
            </label>
          </div>

          <div className={style.row}>
            <label>
              <p>Numero de funcionarios*</p>
              <input
                type="text"
                value={employee}
                onChange={(e) => setEmployee(e.target.value)}
              />
            </label>
            <label>
              <p>Faturamento anual*</p>
              <input
                type="text"
                value={invoicing}
                onChange={(e) => setInvoicing(e.target.value)}
              />
            </label>
          </div>
          <div className={style.row}>
            <label className={style.messageArea}>
              <p>Mensagem*</p>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </label>
          </div>
          <div className={`${style.row} ${style.messageForm}`}>
            <label htmlFor="">
              <input type="checkbox" />
              <p>
                Ao informar meus dados, eu concordo com a Política de
                Privacidade.
              </p>
            </label>
          </div>

          <div className={style.row}>
            <a href="#" className={style.buttonSend}>
              Enviar mensagem <IconArrow />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};
