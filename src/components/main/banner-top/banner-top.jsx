import React from "react";
import bannerTop from "../../../assets/img/banner-top/banner_principal_2.png";
import computer from "../../../assets/img/banner-top/computer.png";
import paper from "../../../assets/img/banner-top/paper.png";
import square from "../../../assets/img/banner-top/square.png";
import letterN from "../../../assets/img/banner-top/letter-n.png";
import letterD from "../../../assets/img/banner-top/letter-d.png";
import letterDOuther from "../../../assets/img/banner-top/letter-d-outher.png";
import hand from "../../../assets/img/banner-top/hand.png";
import stick from "../../../assets/img/banner-top/stick.png";
import linesMargin from "../../../assets/img/banner-top/lines-margin.png";

import style from "./banner-top.module.css";
import { IconArrow } from "../../../assets/svg/icon-arrow";
import ScrollAnima from "../../../helpers/animate-scroll";

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

export const BannerTop = () => {
  return (
    <section className={style.bannerTop}>
      <img src={bannerTop} className={style.wallpapper} />
      <div className="container">
        <div className={style.content}>
          <div className={`${style.contentText} animeRight`}>
            <h2 data-anime="show-right">
              Criatividade que <span>conecta, inspira</span> e{" "}
              <span>transforma.</span>
            </h2>
            <a className={style.callMe} href="#">
              <span>Fale conosco</span>
              <IconArrow />
            </a>
          </div>
          <div className={style.contentImg}>
            <img className={`${style.square} animeLeft`} src={square} />
            <img className={`${style.letterN} animeTop`} src={letterN} />
            <img className={`${style.computer} animeRight`} src={computer} />
            <img className={`${style.letterD} animeBottom`} src={letterD} />
            <img className={`${style.paper} animeLeft`} src={paper} />
            <img className={`${style.hand} animeTop`} src={hand} />
            <img
              className={`${style.letterDOuther} animeRight`}
              src={letterDOuther}
            />
            <img className={`${style.stick} animeBottom`} src={stick} />
            <img
              className={`${style.linesMargin} animeLeft`}
              src={linesMargin}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
