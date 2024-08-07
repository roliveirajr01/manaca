import React from "react";
import clientA from "../../../assets/img/clients-list/client-1.png";
import clientB from "../../../assets/img/clients-list/client-2.png";
import clientC from "../../../assets/img/clients-list/client-3.png";
import clientD from "../../../assets/img/clients-list/client-4.png";
import clientE from "../../../assets/img/clients-list/client-5.png";
import clientF from "../../../assets/img/clients-list/client-6.png";
import style from "./clients-list.module.css";

export const ClientsList = () => {
  return (
    <section className={style.clientsList}>
      <ul>
        <li className={style.toRight}>
          <img src={clientA} alt="" />
          <div>
            <p>Lorem Ipsum</p>
          </div>
        </li>
        <li className={style.toTop}>
          <img src={clientB} alt="" />
          <div>
            <p>Lorem Ipsum</p>
          </div>
        </li>
        <li className={style.toLeft}>
          <img src={clientC} alt="" />
          <div>
            <p>Lorem Ipsum</p>
          </div>
        </li>
        <li className={style.toBottom}>
          <img src={clientD} alt="" />
          <div>
            <p>Lorem Ipsum</p>
          </div>
        </li>
        <li className={style.toRight}>
          <img src={clientE} alt="" />
          <div>
            <p>Lorem Ipsum</p>
          </div>
        </li>
        <li className={style.toLeft}>
          <img src={clientF} alt="" />
          <div>
            <p>Lorem Ipsum</p>
          </div>
        </li>
      </ul>
    </section>
  );
};
