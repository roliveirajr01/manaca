import React from "react";
import style from "./our-solutions.module.css";
import { IconArrow } from "../../../assets/svg/icon-arrow";
import { IconArrowUp } from "../../../assets/svg/icon-arrow-up";

export const OurSolutions = () => {
  const [handleClick, setHandleClick] = React.useState(false);
  return (
    <section className={style.ourSolutions}>
      <div className={`container ${style.content}`}>
        <h2>Nossas Soluções</h2>
        <p>
          Na Manacá Estúdio, somos apaixonados por criar experiências visuais
          impactantes e funcionais. Nossa equipe sênior é dedicada a desenvolver
          estratégias que elevem marcas por meio de soluções de design criativas
          e inovadoras. Estamos comprometidos em oferecer resultados
          excepcionais que não apenas impressionam, mas também agregam valor e
          impulsionam o sucesso dos nossos clientes. Seja bem-vindo(a) a um
          mundo onde o design ganha vida e faz a diferença.
        </p>
      </div>

      <div className="container">
        <div className={style.contentlist}>
          <ul className={style.list}>
            <li
              className={`${style.item}  ${handleClick ? style.active : ""}`}
              onClick={() =>
                window.innerWidth < 901 && setHandleClick(!handleClick)
              }
            >
              <ul>
                <li>
                  <h3>Performance</h3>
                </li>

                <li>Gestão de Tráfego</li>
                <li>ADS Vídeos</li>
                <li>ADS Animado</li>
                <li>ADS Estáticos</li>
                <li>Relatório de Tráfego</li>
                <li
                  className={`${style.iconArrowUp} ${
                    handleClick ? style.activeArrow : ""
                  }`}
                  onClick={() =>
                    window.innerWidth < 901 && setHandleClick(!handleClick)
                  }
                >
                  <IconArrowUp />
                </li>
              </ul>
            </li>
            <li className={style.item}>
              <ul>
                <li>
                  <h3>Performance</h3>
                </li>
                <li>Mascotes</li>
                <li>Publicitária</li>
                <li>Editorial</li>
                <li>Vetorial</li>
                <li>3D</li>
                <li
                  className={`${style.iconArrowUp} ${
                    handleClick ? style.activeArrow : ""
                  }`}
                  onClick={() =>
                    window.innerWidth < 901 && setHandleClick(!handleClick)
                  }
                >
                  <IconArrowUp />
                </li>
              </ul>
            </li>
            <li className={style.item}>
              <ul>
                <li>
                  <h3>Influência</h3>
                </li>

                <li>Edição de Vídeo</li>
                <li>Animação</li>
                <li>Captação de imagem</li>
                <li>Direção de Fotografia</li>
                <li>Direção de Arte</li>
                <li>Storyboard</li>
                <li>Roteiro para comerciais</li>
                <li>Roteiro para Stories/Reels</li>
                <li
                  className={`${style.iconArrowUp} ${
                    handleClick ? style.activeArrow : ""
                  }`}
                  onClick={() =>
                    window.innerWidth < 901 && setHandleClick(!handleClick)
                  }
                >
                  <IconArrowUp />
                </li>
              </ul>
            </li>
            <li className={style.item}>
              <ul>
                <li>
                  <h3>Produção</h3>
                </li>

                <li>Edição de Vídeo</li>
                <li>Animação</li>
                <li>Captação de imagem</li>
                <li>Direção de Fotografia</li>
                <li>Direção de Arte</li>
                <li>Storyboard</li>
                <li>Roteiro para comerciais</li>
                <li>Roteiro para Stories/Reels</li>
                <li
                  className={`${style.iconArrowUp} ${
                    handleClick ? style.activeArrow : ""
                  }`}
                  onClick={() =>
                    window.innerWidth < 901 && setHandleClick(!handleClick)
                  }
                >
                  <IconArrowUp />
                </li>
              </ul>
            </li>
            <li className={style.item}>
              <ul>
                <li>
                  <h3>Institucional</h3>
                </li>

                <li>Gestão de Marca</li>
                <li>Endomarketing</li>
                <li>Comunicação Interna</li>
                <li>Comunicação Institucional</li>
                <li>Design de Ambiente e Espaço</li>
                <li
                  className={`${style.iconArrowUp} ${
                    handleClick ? style.activeArrow : ""
                  }`}
                  onClick={() =>
                    window.innerWidth < 901 && setHandleClick(!handleClick)
                  }
                >
                  <IconArrowUp />
                </li>
              </ul>
            </li>
            <li className={style.item}>
              <ul>
                <li>
                  <h3>Branding</h3>
                </li>

                <li>Naming</li>
                <li>Criação de Marca</li>
                <li>Identidade Visual</li>
                <li>Identidade de Marca</li>
                <li>Rebranding</li>
                <li>Refresh</li>
                <li
                  className={`${style.iconArrowUp} ${
                    handleClick ? style.activeArrow : ""
                  }`}
                  onClick={() =>
                    window.innerWidth < 901 && setHandleClick(!handleClick)
                  }
                >
                  <IconArrowUp />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${style.knowMore}`}>
        <p>Conheça mais de cada solução de Marketing</p>
        <a href="#">
          Saiba mais <IconArrow />
        </a>
      </div>
    </section>
  );
};
