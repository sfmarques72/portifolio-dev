// Home.jsx
"use client";
import { useEffect, useRef } from "react";
import BarradeOpcao from "./components/Telainicial/BarradeOpcao";
import "./components/layout.css";
import Imagemlateral from "./components/Telainicial/Imagemlateral";
import ImagemDestaque from "./components/Telainicial/ImagemCentral";
import Ola from "./components/Telainicial/Ola";
import CardFoto from "./components/Telainicial/CardFoto";
import Sobremim from "./components/Telainicial/Sobremim";
import CardProjeto from "./components/Telainicial/CardProjeto";
import Projetos from "./components/Telainicial/Projetos";
import Experiencia from "./components/Telainicial/Experiencia";
import TextoExperiencia from "./components/Telainicial/TextoExperiencia";
import ContatoIcons from "./components/Telainicial/Contato";
import SnakeGame from "./components/SnakeGame";

export default function Home() {
  const sobreRef = useRef(null);
  const projetosRef = useRef(null);
  const experienciaRef = useRef(null);
  const contatoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    const elementos = document.querySelectorAll(".fade-in");
    elementos.forEach(el => observer.observe(el));

    return () => {
      elementos.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <main>
      {/* CABEÇALHO */}
      <div className="conteiner-barra">
        <Imagemlateral />
        <BarradeOpcao
          sobreRef={sobreRef}
          projetosRef={projetosRef}
          experienciaRef={experienciaRef}
          contatoRef={contatoRef}
        />
      </div>

      {/* DESTAQUE */}
      <div className="conteiner-destaque">
        <div className="conteiner-img-destaque">
          <ImagemDestaque />
        </div>
        <Ola />
      </div>

      {/* SOBRE MIM */}
      <div ref={sobreRef} className="conteiner-imagem-ste fade-in">
        <CardFoto />
        <Sobremim />
      </div>

      {/* PROJETOS */}
      <div ref={projetosRef} className="conteiner-projeto fade-in">
        <Projetos />
        <div className="conteiner-imagem-projeto"></div>
      </div>

      {/* EXPERIÊNCIA */}
      {/* <div ref={experienciaRef} className="conteiner-experiencia fade-in">
        <Experiencia />
      </div> */}

      {/* CONTATO */}
      {/* <div ref={contatoRef} className="conteiner-contato fade-in">
        <SnakeGame />
        <ContatoIcons />
      </div> */}
    </main>
  );
}
