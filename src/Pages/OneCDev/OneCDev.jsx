import React, { useState, useEffect } from "react";

import serviceDb from "../../data/services.json";
import ServiceForm from "../../Components/ServiceForm/ServiceForm";
import Cases from "./Cases";
import SectionNav from "./SectionNav";
import RoleWhenBlocks from "../../Components/RoleWhenBlocks/RoleWhenBlocks";

import lamp from "../../assets/lamp.png";

export default function OneCDev() {
  const currentInfo = serviceDb["1Cdev"];

  const [modal, setModal] = useState(false);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isScrollDisabled ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isScrollDisabled]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const services = [
    serviceDb.automatization,
    serviceDb.telegram,
    serviceDb["1Cdev"],
    serviceDb.SitesDev,
    serviceDb.Bitrix24,
    // serviceDb.cybersecurity,
  ];

  const currentPath = window.location.pathname;

  return (
    <div className="service">
      {/* ============ ГЛАВНЫЙ БЛОК ============ */}
      <div
        className="service__main"
        style={{ backgroundImage: `url(${currentInfo["main-back-img"]})` }}
      >
        <div className="service__main-back" />
        <div className="service__main-container">
          <h1 className="service__main-title">{currentInfo["main-title"]}</h1>
          <p className="service__main-description">
            {currentInfo["main-description"]}
          </p>

          <div className="service__main-bullit-wrapper">
            {currentInfo["main-bullits"].map((bullet, index) => (
              <div className="service__main-bullit" key={index}>
                {bullet}
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setModal(true);
              setIsScrollDisabled(true);
            }}
            className="service__main-button role__button flare-button"
          >
            Связаться
          </button>
        </div>
      </div>

      {/* ============ ТАБЫ ============ */}
      <div className="tabs">
        {services.map((service, index) => {
          const isActive = currentPath.endsWith(service.href);
          return (
            <a
              key={index}
              className={`tabs__item ${isActive ? "active" : ""}`}
              href={service.href}
            >
              {service["main-title"]}
            </a>
          );
        })}
      </div>

      {/* ============ ТЕОРИЯ ============ */}
      <div id="section-theory" className="theory">
        <p className="theory__title">{currentInfo["what-is-title"]}</p>
        <div className="theory__wrapper">
          <img className="theory__lamp" src={lamp} alt="" />
          <div className="theory__text">
            {currentInfo["what-is-description"].map((definition, index) => (
              <p key={index} className="theory__item">
                {definition}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* ============ РОЛЬ + КОГДА ВНЕДРЯТЬ (единый компонент) ============ */}
      <RoleWhenBlocks
        currentInfo={currentInfo}
        onConsult={() => {
          setModal(true);
          setIsScrollDisabled(true);
        }}
      />

      {/* ============ НАШИ УСЛУГИ ============ */}
      <div id="section-services" className="our-services">
        <p className="our-services__title">Наши услуги</p>
        <div className="our-services__wrapper">
          {currentInfo.services.map((service, index) => (
            <div className="our-services__item" key={index}>
              <div className="our-services__item-content">
                <div className="our-services__item-content-container">
                  <p className="our-services__item-content-num">
                    0{index + 1}
                  </p>
                  <div className="our-services__item-text">
                    <p className="our-services__item-content-title">
                      {service.title}
                    </p>
                    <div className="our-services__item-content-line" />
                    <p className="our-services__item-content-description">
                      {Array.isArray(service.description)
                        ? service.description.join(" · ")
                        : service.description}
                    </p>
                  </div>
                </div>
              </div>

              <img
                src={service.img}
                className="our-services__item-img"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          setModal(true);
          setIsScrollDisabled(true);
        }}
        className="role__button service-button flare-button"
      >
        Получить консультацию
      </button>

      {/* ============ ПОЧЕМУ ВНЕДРЯТЬ ============ */}
      <div id="section-why" className="why-auto">
        <div className="why-auto__left">
          <img
            src={currentInfo["why-need-img"]}
            className="why-auto__img"
            alt=""
          />
          <p className="why-auto__title">{currentInfo["why-need"]}</p>
        </div>
        <div className="why-auto__wrapper">
          {currentInfo["why-need-wrapper"].map((item, index) => (
            <div className="why-auto__item" key={index}>
              <p className="why-auto__text">
                <span className="why-auto__item-title">{item.title} </span>
                <span className="why-auto__description">
                  {item.description}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          setModal(true);
          setIsScrollDisabled(true);
        }}
        className="role__button service-button flare-button"
      >
        Бесплатная консультация
      </button>

      {/* ============ КЕЙСЫ (1С-специфика) ============ */}
      <Cases setModal={setModal} setBodyScroll={setIsScrollDisabled} />

      {/* ============ ПОЧЕМУ МЫ ============ */}
      <div className="why-us">
        <p className="why-us__title">Почему выбирают нас?</p>
        <div className="why-us__content">
          <div className="why-us__wrapper">
            {currentInfo["why-us-wrapper"].map((item, index) => (
              <div className="why-us__item" key={index}>
                <p className="why-us__item-title">{item.title}</p>
                <p className="why-us__description">{item.description}</p>
                <div className="why-us__line" />
              </div>
            ))}
          </div>
          <img
            src={currentInfo["why-us-img"]}
            className="why-us__img"
            alt=""
          />
        </div>
      </div>

      {/* ============ МОДАЛКА ============ */}
      {modal && (
        <ServiceForm
          modal={modal}
          setModal={setModal}
          setIsScrollDisabled={setIsScrollDisabled}
          serviceName={currentInfo["main-title"]}
        />
      )}

      {/* ============ STICKY-НАВИГАЦИЯ ============ */}
      <SectionNav />
    </div>
  );
}