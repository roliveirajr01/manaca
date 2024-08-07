import React from "react";
import logo from "../../assets/img/header/logo-manaca.png";
import { IconWhatsapp } from "../../assets/svg/icon-whatsapp";
import style from "./header.module.css";

export const Header = () => {
  const [handleClick, setHandleClick] = React.useState(false);

  return (
    <header className={style.header}>
      <div className="container">
        <nav className={style.menu}>
          <div
            className={`animeLeft ${style.hamburgerButton} ${
              handleClick ? style.active : ""
            }`}
            onClick={() => setHandleClick(!handleClick)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img src={logo} className="animeLeft" />
          <ul className={style.optionsListDesktop}>
            <li>
              <a className="animeBottom" href="#">
                Quem somos
              </a>
            </li>
            <li>
              <a className="animeBottom" href="#">
                Soluções
              </a>
            </li>
            <li>
              <a className="animeBottom" href="#">
                Portfólio
              </a>
            </li>
            <li>
              <a className="animeBottom" href="#">
                trabalhe conosco
              </a>
            </li>
            <li>
              <a className="animeBottom" href="#">
                Contato
              </a>
            </li>
          </ul>
          <a href="#" className={`animeRight ${style.buttonWhatsapp}`}>
            <IconWhatsapp />
            <span>(11) 99999-9999</span>
          </a>
        </nav>
      </div>

      <section
        className={`${style.optionsListMobile} ${
          handleClick ? style.active : ""
        }`}
      >
        <ul>
          <li>
            <a className="animeBottom" href="#">
              Quem somos
            </a>
          </li>
          <li>
            <a className="animeBottom" href="#">
              Soluções
            </a>
          </li>
          <li>
            <a className="animeBottom" href="#">
              Portfólio
            </a>
          </li>
          <li>
            <a className="animeBottom" href="#">
              trabalhe conosco
            </a>
          </li>
          <li>
            <a className="animeBottom" href="#">
              Contato
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
};
