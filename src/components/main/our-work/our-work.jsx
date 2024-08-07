import React from "react";
import { IconArrow } from "../../../assets/svg/icon-arrow";
import style from "./our-work.module.css";

export const OurWork = () => {
  return (
    <section className={style.ourWork}>
      <div className="container">
        <p>Conheça um pouco do nosso trabalho!</p>
        <a href="#">
          Acessar <IconArrow />
        </a>
      </div>
    </section>
  );
};
