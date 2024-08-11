import React, { useState } from 'react';
import logoPic from '../../assets/logo.png';

import './Header.scss';
import burger from '../../assets/Burger.svg';
import cross from '../../assets/crossHeader.svg';

import arrowDownImg from '../../assets/arrow-down-right.png';
import arrowBlack from '../../assets/arrow-down-right-black.png';

export default function Header({ bodyScroll, setBodyScroll }) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function setBurgerStatus(status) {
    setIsBurgerOpen(status);

    setBodyScroll(!status);
  }

  return (
    <div className="header">
      <div
        style={{
          maxHeight: isBurgerOpen ? '100vh' : '0',
        }}
        className="header-mobile"
      >
        <button
          onClick={() => setBurgerStatus(false)}
          className="header-mobile__cross "
        >
          <img src={cross} className="header-mobile__cross-img" alt="" />
        </button>

        <div className="header-mobile__container">
          <div className="header-mobile__wrapper">
            <div className="header-mobile__item">
              <a href="" className="header-mobile__link">
                О нас
              </a>
            </div>
            <div className="header-mobile__item">
              <a href="" className="header-mobile__link">
                Услуги
              </a>
            </div>
            <div className="header-mobile__item">
              <a href="" className="header-mobile__link">
                Обратная связь
              </a>
            </div>
            <div className="header-mobile__item">
              <a href="" className="header-mobile__link">
                Контакты
              </a>
            </div>
          </div>

          <a
            onClick={() => setBurgerStatus(false)}
            href="#form"
            className="header__contact"
          >
            <p className="header__contact-link">СВЯЗАТЬСЯ</p>
            <img src={arrowDownImg} alt="" className="header__contact-img" />
            <img
              src={arrowBlack}
              className="header__contact-img-black"
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="header__container">
        <a href="/" className="header__logo ">
          <img src={logoPic} alt="" className="header__logo-img" />
        </a>

        <button
          onClick={() => setBurgerStatus(true)}
          className="header__burger-button"
        >
          <img src={burger} className="header__burger-img" alt="" />
        </button>

        <div className="header__nav">
          <a href="#" className="header__link">
            О нас
          </a>
          <a href="#" className="header__link">
            Услуги
          </a>
          <a href="#" className="header__link">
            Обратная связь
          </a>
          <a href="#" className="header__link">
            Контакты
          </a>
        </div>
      </div>
    </div>
  );
}
