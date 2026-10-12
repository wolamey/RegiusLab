import React, { useState, useEffect, useRef } from 'react';
import "./ServiceNewTemplate.scss";

import serviceDb from '../../data/services.json';

import lamp from '../../assets/lamp.png';
import ServiceForm from '../../Components/ServiceForm/ServiceForm';

import case_good from '../../assets/case-good.svg';
import case_good_dark from '../../assets/case-good-dark.svg';
import lightning from '../../assets/lightning.png';

import escape from '../../assets/main-deco.png';
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

  const services = [
    // serviceDb.blockchain,
    serviceDb.automatization,
    serviceDb.telegram,
    serviceDb['1Cdev'],
    serviceDb.SitesDev,
    serviceDb.Bitrix24,
    serviceDb.cybersecurity,
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
        <div className="role-new">
          <div className="role-new__top">
            <div className="role-new__text">
              <p className="role-new__title">{currentInfo["role-title"]}</p>
            </div>
          </div>

          <div className="role-new__wrapper">
            {currentInfo["role-wrapper"].map((role, index) => (
              <div className="role-new__item" key={index}>
                <img
                  src={role["role-item-img"]}
                  className="role-new__item-img"
                  alt=""
                />
                <p className="role-new__item-text">{role["role-item-title"]}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              setModal(true);
              setIsScrollDisabled(true);
            }}
            className="role-new__button flare-button"
          >
            получить бесплатную консультацию
          </button>
        </div>

        <div className="when-new">
          <p className="when-new__title title">{currentInfo["when-title"]}</p>
          <div className="when-new__wrapper">
            {currentInfo.when.map((when, index) => (
              <div className="when-new__item" key={index}>
                <div className="new__item_container">

                <div className="when-new__item-top">
                  <img src={when.img} className="when-new__img" alt="" />
                  <p className="when-new__item-title">{when.title}</p>
                </div>

                <div className="when-new__text">
                  {when.description.map((text, index) => (
                    <span className="when-new__text-item" key={index}>
                      {text}
                    </span>
                  ))}
                </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="our-services-new">
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
                  </div>
                </div>
              </div>

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
              </div>

              {/* <img
              src={service.img}
              className="our-services-new__item-img"
              alt=""
            /> */}
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
