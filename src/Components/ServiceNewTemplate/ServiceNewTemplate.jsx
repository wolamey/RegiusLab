import React, { useState, useEffect, useRef } from 'react';
import "./ServiceNewTemplate.scss";

import serviceDb from '../../data/services.json';

import lamp from '../../assets/lamp.png';
import ServiceForm from '../../Components/ServiceForm/ServiceForm';
import RoleWhenBlocks from '../RoleWhenBlocks/RoleWhenBlocks';

import case_good from '../../assets/case-good.svg';
import case_good_dark from '../../assets/case-good-dark.svg';
import lightning from '../../assets/lightning.png';

import escape from '../../assets/main-deco.png';

// Styles for the shared accordion-cases block (used on SitesDev and other pages)
import '../../Pages/Bitrix24/Cases.scss';
import '../../Pages/SitesDev/SitesCases.scss';

export default function ServiceNewTemplate({currentInfo}) {

  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  const handleButtonClick = () => {
    setIsScrollDisabled(!isScrollDisabled);
  };

  React.useEffect(() => {
    if (isScrollDisabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isScrollDisabled]);
  const [modal, setModal] = useState(false);
  // Открытый кейс в аккордеоне «Наши реализованные сайты» (-1 — все закрыты)
  const [caseOpen, setCaseOpen] = useState(0);

  const services = [
    serviceDb.automatization,
    serviceDb.telegram,
    serviceDb['1Cdev'],
    serviceDb.SitesDev,
    serviceDb.Bitrix24,
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  const currentPath = window.location.pathname;
  return (
    <div className="service-new">
      <div
        className={
          currentInfo === serviceDb["1Cdev"]
            ? "service__main service__main-bottom"
            : currentInfo === serviceDb.CMSMagento
            ? "service__main service__main-center"
            : "service__main"
        }
        style={{
          backgroundImage: `url(${currentInfo["main-back-img"]}) `,
        }}
      >
        <div className="service-new__main-back"></div>

        <div className="service-new__main-container">
          {/* <p className="service-new__main-id">#{currentInfo.id}</p> */}
          <h1 className="service-new__main-title">
            {currentInfo["main-title"]}
          </h1>
          <p className="service-new__main-description">
            {currentInfo["main-description"]}
          </p>

          
          <div className="service-new__main-bullit-wrapper">
            {currentInfo["main-bullits"].map((bullet, index) => (
              <div className="service-new__main-bullit" key={index}>
                {bullet}
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setModal(true);
              setIsScrollDisabled(true);
            }}
            className="service-new__main-button  flare-button"
          >
            Связаться
          </button>
        </div>
      </div>

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
      <div className="escape">
        <img src={escape} className="escape__deco" />
        <div className="theory-new">
          <p className="theory-new__title"> {currentInfo["what-is-title"]}</p>
          <div className="theory-new__wrapper">
            <img className="theory-new__lamp" src={lamp} alt="" />
            <div className="theory-new__text">
              {currentInfo["what-is-description"].map((definition, index) => (
                <p key={index} className="theory-new__item">
                  {definition}
                </p>
              ))}
            </div>
          </div>
        </div>
        {modal && (
          <ServiceForm
            modal={modal}
            setModal={setModal}
            setIsScrollDisabled={setIsScrollDisabled}
            serviceName={currentInfo["main-title"]}
          />
        )}
        <RoleWhenBlocks
          currentInfo={currentInfo}
          onConsult={() => {
            setModal(true);
            setIsScrollDisabled(true);
          }}
        />
      </div>

      <div className="our-services-new our-services-new--compact" id="section-services">
        <p className="our-services-new__title">Наши услуги</p>
        <div className="our-services-new__wrapper">
          {currentInfo.services.map((service, index) => (
            <div className="our-services-new__item" key={index}>
              <div className="our-services-new__item-content">
                <div className="our-services-new__item-content-container">
                  <p className="our-services-new__item-content-num">
                    0{index + 1}
                  </p>
                  <div className="our-services-new__item-text">
                    <p className="our-services-new__item-content-title">
                      {service.title}
                    </p>
                    <div className="our-services-new__item-content-line"></div>

                    {Array.isArray(service.description) && service.description.length > 0 && (
                      <div className="our-services-new__item-content-lightning-wrapper">
                        {service.description.map((text, index) => (
                          <div
                            key={index}
                            className="our-services-new__item-wrapper"
                          >
                            <img
                              src={lightning}
                              className="our-services-new__item-img-lightning"
                              alt=""
                            />
                            <p className="our-services-new__item-content-description">
                              {text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Блок-кейс справа — рендерим только если в данных есть right */}
              {service.right && (
                <div className="our-services-new__item-right ">
                <div className="our-services-new__item-pc">
                  <img
                    src={service.right.imgPC}
                    className="our-services-new__item-pc-img"
                    alt=""
                  />
                </div>

                <div className="our-services-new__item-case">
                  <div className="our-services-new__item-case-top">
                    <img
                      src={service.right.imgPhone}
                      alt=""
                      className="our-services-new__item-case-phone"
                    />
                    <div className="our-services-new__item-case-top-bullits">
                      <div className="our-services-new__item-case-bullits-wrapper">
                        {service.right.bullits.map((bullit, BullitIndex) => (
                          <div
                            key={BullitIndex}
                            className="our-services-new__item-case-bullits-item"
                          >
                            <img
                              src={index % 2 === 0 ? case_good : case_good_dark}
                              className="our-services-new__item-case-bullits-item-img"
                              alt=""
                            />
                            <p className="our-services-new__item-case-bullits-item-text">
                              {bullit[0] + " "}
                            </p>
                            <p className="our-services-new__item-case-bullits-item-percents">
                              {bullit[1]}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="our-services-new__item-case-description">
                        {service.right.description}
                      </div>
                    </div>
                  </div>

                  <div className="our-services-new__item-case-bottom">
                    <div className="our-services-new__item-case-situation">
                      <p className="our-services-new__item-case-situation-title">
                        Ситуация:
                      </p>
                      <p className="our-services-new__item-case-situation-description">
                        {service.right.situation}
                      </p>
                    </div>
                    <div className="our-services-new__item-case-solution">
                      <p className="our-services-new__item-case-solution-title">
                        Решение:
                      </p>
                      <div className="our-services-new__item-case-solution-description">
                        {service.right.solution.map((solution, index) => (
                          <p
                            className="our-services-new__item-case-solution-description-wrapper"
                            key={index}
                          >
                            <span className="our-services-new__item-case-solution-description-item-b">
                              {solution[0] + " "}
                            </span>
                            <span className="our-services-new__item-case-solution-description-item-p">
                              {solution[1]}
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* <img
              src={service.img}
              className="our-services-new__item-img"
              alt=""
            /> */}
            </div>
          ))}
        </div>
      </div>

      {/* ============ РЕАЛЬНЫЕ КЕЙСЫ (аккордеон, как на остальных страницах) ============ */}
      {currentInfo.cases && currentInfo.cases.length > 0 && (
        <section id="section-cases" className="bitrix-cases">
          <div className="bitrix-cases__glow" aria-hidden="true" />

          <div className="bitrix-cases__header">
            <span className="bitrix-cases__kicker">Портфолио RegiusLab</span>
            <h3 className="bitrix-cases__section-title">Наши реализованные сайты</h3>
            <p className="bitrix-cases__lead">
              Живые проекты — нажмите на кейс, чтобы посмотреть детали, и переходите на сайт
            </p>
          </div>

          <div className="bitrix-cases__wrapper">
            {currentInfo.cases.map((c, i) => {
              const isOpen = caseOpen === i;
              return (
                <article
                  key={i}
                  className={`bitrix-case sites-case ${isOpen ? "is-open" : ""}`}
                  style={{ "--accent": c.accent }}
                >
                  <div className="bitrix-case__head" role="button" tabIndex={0}
                    onClick={() => setCaseOpen(isOpen ? -1 : i)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setCaseOpen(isOpen ? -1 : i); } }}
                  >
                    <div className="bitrix-case__head-left">
                      <div className="bitrix-case__icon sites-case__logo" aria-hidden="true">
                        <span>{c.name.charAt(0)}</span>
                      </div>
                      <div className="bitrix-case__head-text">
                        <span className="bitrix-case__badge">
                          Сайт {String(i + 1).padStart(2, "0")}
                        </span>
                        <h4 className="bitrix-case__title">{c.name}</h4>
                        <p className="bitrix-case__subtitle">{c.type}</p>
                      </div>
                    </div>

                    <a
                      className="sites-case__link"
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      onClick={(e) => e.stopPropagation()}
                      title={`Открыть ${c.domain} в новой вкладке`}
                    >
                      Открыть сайт
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>

                    <div className={`bitrix-case__toggle ${isOpen ? "is-open" : ""}`} aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M5 8.5L11 14.5L17 8.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  <div className="bitrix-case__collapse">
                    <div className="bitrix-case__body">
                      {/* Скриншоты сайта */}
                      <div className="sites-case__screens">
                        <figure className="sites-case__screen sites-case__screen--desktop">
                          <img
                            src={c.screens.desktop}
                            alt={`${c.name} — скриншот главной страницы для компьютера`}
                            loading="lazy"
                            onError={(e) => { e.currentTarget.style.display = "none"; }}
                          />
                          <figcaption>
                            📷 Скриншот главной страницы для ПК → положить файл{" "}
                            <code>public/cases/{c.screens.desktop.split("/").pop()}</code>
                          </figcaption>
                        </figure>

                        <figure className="sites-case__screen sites-case__screen--mobile">
                          <img
                            src={c.screens.mobile}
                            alt={`${c.name} — скриншот мобильной версии сайта`}
                            loading="lazy"
                            onError={(e) => { e.currentTarget.style.display = "none"; }}
                          />
                          <figcaption>
                            📱 Скриншот мобильной версии → положить файл{" "}
                            <code>public/cases/{c.screens.mobile.split("/").pop()}</code>
                          </figcaption>
                        </figure>
                      </div>

                      {/* Задача */}
                      <div className="bitrix-case__block">
                        <h5 className="bitrix-case__block-title">
                          <span className="bitrix-case__block-dot" />
                          Задача
                        </h5>
                        <p className="bitrix-case__text">{c.situation}</p>
                      </div>

                      {/* Решение */}
                      <div className="bitrix-case__block">
                        <h5 className="bitrix-case__block-title">
                          <span className="bitrix-case__block-dot" />
                          Что мы сделали
                        </h5>
                        <ul className="bitrix-case__list">
                          {c.solution.map((s, si) => (
                            <li key={si}>
                              <strong>{s[0] + " "}</strong>
                              {s[1]}
                            </li>
                          ))}
                        </ul>
                        {c.tags && (
                          <div className="sites-case__tags">
                            {c.tags.map((t, ti) => (
                              <span key={ti} className="sites-case__tag">{t}</span>
                            ))}
                          </div>
                        )}
                      </div>

                      <a
                        className="sites-case__cta bitrix-case__cta flare-button"
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        Смотреть сайт {c.domain}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      <button
        onClick={() => {
          setModal(true);
          setIsScrollDisabled(true);
        }}
        className="role-new__button service-button flare-button"
      >
        Получить консультацию
      </button>
      <div className="why-auto">
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
        className="role-new__button service-button flare-button"
      >
        Бесплатная консультация
      </button>
      <div className="why-us">
        <p className="why-us__title">Почему выбирают нас?</p>
        <div className="why-us__content">
          <div className="why-us__wrapper">
            {currentInfo["why-us-wrapper"].map((item, index) => (
              <div className="why-us__item" key={index}>
                <p className="why-us__item-title">{item.title}</p>
                <p className="why-us__description">{item.description}</p>
                <div className="why-us__line"></div>
              </div>
            ))}
          </div>
          <img src={currentInfo["why-us-img"]} className="why-us__img" alt="" />
        </div>
      </div>
    </div>
  );
}
