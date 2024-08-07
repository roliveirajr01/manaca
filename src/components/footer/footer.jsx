import React from "react";
import style from "./footer.module.css";
import logoFooter from "../../../src/assets/img/footer/logo-footer.png";
import { LinkedinIcon } from "../../../src/assets/svg/icon-linkedin";
import { InstagramIcon } from "../../../src/assets/svg/icon-instagram";
export const Footer = () => {
  return (
    <footer>
      <section className={style.footer}>
        <div className={`container ${style.content}`}>
          <div className={style.contentLogo}>
            <img className={style.letterD} src={logoFooter} />
            <ul>
              <li>
                <a href="">Quem somos </a>
              </li>
              <li>
                <a href="">Portfólio </a>
              </li>
              <li>
                <a href="">Contato </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className={style.socialsLink}>
              <li>
                <a href="instagram">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="linkedin">
                  <LinkedinIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};
