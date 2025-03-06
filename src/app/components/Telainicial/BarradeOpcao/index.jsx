"use client";
import React from "react";

export default function BarradeOpcao({ sobreRef, projetosRef, experienciaRef, contatoRef }) {
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="barradeopcao">
      <ul>
        <li className="list-ac" onClick={() => scrollToSection(sobreRef)}>Sobre mim</li>
        <li className="list-ac" onClick={() => scrollToSection(projetosRef)}>Projetos</li>
        <li className="list-ac" onClick={() => scrollToSection(experienciaRef)}>Experiência Profissional</li>
        <li className="list-ac" onClick={() => scrollToSection(contatoRef)}>Contato</li>
      </ul>
    </div>
  );
}
