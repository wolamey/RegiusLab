import React, { useState, useEffect, useRef } from 'react';
import './ServiceTemplate.scss';
import serviceDb from '../../data/services.json';
import lamp from '../../assets/lamp.png';
import ServiceForm from '../../Components/ServiceForm/ServiceForm';

export default function ServiceTemplate({ currentInfo }) {
  function scrollTop() {
    window.scrollTo({ top: 0 });
  }
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
    serviceDb.blockchain,
    serviceDb.automatization,
    serviceDb.telegram,
    serviceDb['1Cdev'],
    serviceDb.SitesDev,
    serviceDb.Bitrix24,
    serviceDb.cybersecurity
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  const currentPath = window.location.pathname;

  return (
    <div className="service">
      <div
        className={
          currentInfo === serviceDb['1Cdev']
            ? 'service__main service__main-bottom'
            : currentInfo === serviceDb.CMSMagento
            ? 'service__main service__main-center'
            : 'service__main'
        }
        style={{
          backgroundImage: `url(${currentInfo['main-back-img']}) `,
        }}
      >
        <div className="service__main-back"></div>

        <div className="service__main-container">
          {/* <p className="service__main-id">#{currentInfo.id}</p> */}
          <h1 className="service__main-title">{currentInfo['main-title']}</h1>
          <p className="service__main-description">
            {currentInfo['main-description']}
          </p>
          <div className="service__main-bullit-wrapper">
            {currentInfo['main-bullits'].map((bullet, index) => (
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

      <div className="tabs">
        {services.map((service, index) => {
          const isActive = currentPath.endsWith(service.href);

          return (
            <a
              key={index}
              className={`tabs__item ${isActive ? 'active' : ''}`}
              href={service.href}
            >
              {service['main-title']}
            </a>
          );
        })}
      </div>
      <div className="theory">
        <p className="theory__title"> {currentInfo['what-is-title']}</p>
        <div className="theory__wrapper">
          <img className="theory__lamp" src={lamp} alt="" />
          <div className="theory__text">
            {currentInfo['what-is-description'].map((definition, index) => (
              <p key={index} className="theory__item">
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
          serviceName={currentInfo['main-title']}
        />
      )}
      <div className="role">
        <div className="role__top">
          <div className="role__text">
            <p className="role__title">{currentInfo['role-title']}</p>
          </div>
        </div>

        <div className="role__wrapper">
          {currentInfo['role-wrapper'].map((role, index) => (
            <div className="role__item" key={index}>
              <img
                src={role['role-item-img']}
                className="role__item-img"
                alt=""
              />
              <p className="role__item-text">{role['role-item-title']}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setModal(true);
            setIsScrollDisabled(true);
          }}
          className="role__button flare-button"
        >
          получить бесплатную консультацию
        </button>
      </div>


      {/* {console.log(currentInfo.when)} */}
      {currentInfo.when !== undefined ? (
      
      
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
        </div>) : (<></>)
}
    
      <div className="our-services">
        <p className="our-services__title">Наши услуги</p>
        <div className="our-services__wrapper">
          {currentInfo.services.map((service, index) => (
            <div className="our-services__item" key={index}>
              <div className="our-services__item-content">
                <div className="our-services__item-content-container">
                  <p className="our-services__item-content-num">0{index + 1}</p>
                  <div className="our-services__item-text">
                    <p className="our-services__item-content-title">
                      {service.title}
                    </p>
                    <div className="our-services__item-content-line"></div>
                    <p className="our-services__item-content-description">
                      {service.description}
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
      <div className="why-auto">
        <div className="why-auto__left">
          <img
            src={currentInfo['why-need-img']}
            className="why-auto__img"
            alt=""
          />
          <p className="why-auto__title">{currentInfo['why-need']}</p>
        </div>
        <div className="why-auto__wrapper">
          {currentInfo['why-need-wrapper'].map((item, index) => (
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
      <div className="why-us">
        <p className="why-us__title">Почему выбирают нас?</p>
        <div className="why-us__content">
          <div className="why-us__wrapper">
            {currentInfo['why-us-wrapper'].map((item, index) => (
              <div className="why-us__item" key={index}>
                <p className="why-us__item-title">{item.title}</p>
                <p className="why-us__description">{item.description}</p>
                <div className="why-us__line"></div>
              </div>
            ))}
          </div>
          <img src={currentInfo['why-us-img']} className="why-us__img" alt="" />
        </div>
      </div>
    </div>
  );
}
