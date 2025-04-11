// components/MeuCarrossel.jsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image'; // opcional, para otimização com Next

export default function MeuCarrossel() {
  return (
    <div className="projetos-realizados">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000, // tempo em milissegundos (3 segundos)
          disableOnInteraction: false, // continua mesmo após o usuário interagir
        }}
        >
        <SwiperSlide>
          <img src="/img/logo.png" alt="Projeto 1" className="cards-projetin" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/logo.png" alt="Projeto 2" className="cards-projetin" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/logo.png" alt="Projeto 3" className="cards-projetin" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/logo.png" alt="Projeto 3" className="cards-projetin" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/logo.png" alt="Projeto 3" className="cards-projetin" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
