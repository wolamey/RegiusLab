import React from "react";
import { useState } from "react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import testimolail_data from "../../data/testimonails.json";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import "./SwiperTestimonails.scss";

export default function SwiperTestimonails() {
  return (
    <div className="swiper">
      <p className="title testimonails__title services__title">
        отзывы наших клиентов
      </p>
      <div className="swiper_outer">
        <div className="swiper__filter-right"></div>
        <div className="swiper__filter-left"></div>

        <Swiper
          effect={"slide"}
          grabCursor={true}
          centeredSlides={window.innerWidth < 1024 ? true : true}
          slidesPerView={
            window.innerWidth < 800
              ? 1
              : window.innerWidth < 1024
              ? 2
              : window.innerWidth < 1700
              ? 2
              : 3
          }
          spaceBetween={150}
          loop={true}
          speed={5000}
          autoplay={{
            delay: -1,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          {testimolail_data.map(
            ({ img, name, profession, description }, index) => (
              <SwiperSlide key={index} className="init_container">
                <img src={img} className="swiper__img" />
                <p className="swiper__name">{name}</p>
                <p className="swiper__prof">{profession}</p>
                <p className="swiper__description">{description}</p>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
}
