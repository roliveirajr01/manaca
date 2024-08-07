import React from "react";
import style from "./about-us.module.css";
import logoAbout from "../../../assets/img/about-us/about-image.png";
import { IconArrow } from "../../../assets/svg/icon-arrow";

export const AboutUs = () => {
  return (
    <section className={style.aboutUs}>
      <div className={`container ${style.content}`}>
        <div className={style.contentLeft}>
          <div className={style.contentImg}>
            <img src={logoAbout} />
          </div>
        </div>
        <div className={style.contentRight}>
          <h2>Quem somos</h2>
          <p>
            Nascidos da necessidade de valorizar o Design como uma peça
            fundamental em qualquer empreendimento. Em nosso estúdio, os
            profissionais do Design são valorizados por sua expertise única, com
            base em nossos pilares: Humanidade, Criatividade e Brasilidade.
            Oferecemos soluções completas de design, colaborando com
            especialistas em mídias sociais, conteúdo, desenvolvimento, gestão
            de tráfego, estratégias de marca, motion design e outros. Aqui,
            acreditamos que o design é mais do que estética - é uma ferramenta
            poderosa capaz de influenciar diretamente no sucesso do cliente.
          </p>

          <a href="#">
            Saiba mais <IconArrow />
          </a>
        </div>
      </div>
    </section>
  );
};
