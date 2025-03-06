"use client";
import { useRef } from "react";
import BarradeOpcao from "./components/Telainicial/BarradeOpcao"; // Nome corrigido
import "./components/layout.css"; // Certifique-se de que o caminho está correto
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
       // Criando referências para cada seção
       const sobreRef = useRef(null);
       const projetosRef = useRef(null);
       const experienciaRef = useRef(null);
       const contatoRef = useRef(null);

  return (
    // Inicio
    <main>
      {/* CABEÇALHO */}
      <div className="conteiner-barra">
        <Imagemlateral/>
        <BarradeOpcao 
               sobreRef={sobreRef} 
               projetosRef={projetosRef} 
               experienciaRef={experienciaRef} 
               contatoRef={contatoRef} /> {/* Nome corrigido */}
      </div>

      {/* IMAGEM INICIAL */}
      <div className="conteiner-destaque">
        <div className="conteiner-img-destaque">
        <ImagemDestaque/>
        </div>
        <Ola/>
      </div>

      {/* SOBRE MIM */}
        <div ref={sobreRef} className="conteiner-imagem-ste">
          <CardFoto/>
          <Sobremim/>
        </div>

      {/* PROJETOS */}
        <div ref={projetosRef} className="conteiner-projeto">
        <Projetos/>
        <div ref={projetosRef} className="conteiner-imagem-projeto">
          <CardProjeto/>
        </div>
        </div>

       {/* EXPERIENCIA */}
      <div ref={experienciaRef} className="conteiner-experiencia">
        <Experiencia/>
      </div>

       {/* CONTATO */}
      <div ref={contatoRef} className="conteiner-contato">
        <SnakeGame/>
        <ContatoIcons/>
      </div>
    </main>
   
  );
}
