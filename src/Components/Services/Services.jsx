import React from 'react';
import { useState } from 'react';
import './Services.scss';

import bullit1 from '../../assets/bullit1.png';
import bullit2 from '../../assets/bullit2.png';
import bullit3 from '../../assets/bullit3.png';
import bullit4 from '../../assets/bullit4.jpg';
import bullit5 from '../../assets/bullit5.jpg';
import arrowDownImg from '../../assets/arrow-down-right.png';
import bullit6 from '../../assets/bullit6.png';
import bullit7 from '../../assets/cybersecurity.png'
import serviceDb from '../../data/services.json';
import { Link } from 'react-router-dom';

const services_data = [
  {
    title: 'AI для вашего бизнеса',
    description: [
      'Автоматизация рутинных процессов с помощью ИИ',
      'Разработка ИИ-ассистентов для продаж и поддержки',
      'Внедрение чат-ботов с искусственным интеллектом',
      'Анализ данных и прогнозирование для бизнеса',
      'Интеграция AI-решений с 1С и CRM',
    ],
    image: bullit2,
    link: '/automatization',
  },
  {
    title: 'Telegram боты',
    description: [
      'Разработка ботов для продаж и приёма платежей',
      'Боты-помощники для автоматизации заявок',
      'ИИ-боты для консультаций и поддержки клиентов',
      'Боты для управления внутренними процессами',
      'Интеграция ботов с сайтом и CRM',
    ],
    image: bullit3,
    link: '/telegram-bots',
  },
  {
    title: 'Разработка сайтов',
    description: [
      'Создание корпоративных сайтов и лендингов',
      'Разработка интернет-магазинов и веб-приложений',
      'UX/UI дизайн с фокусом на конверсию',
      'SEO-оптимизация и техническая поддержка',
      'Интеграция сайта с CRM и системами аналитики',
    ],
    image: bullit5,
    link: '/sites-dev',
  },
  {
    title: '1С разработка',
    description: [
      'Внедрение и настройка 1С под задачи бизнеса',
      'Доработка и оптимизация конфигураций 1С',
      'Разработка модулей и калькуляторов',
      'Интеграция 1С с сайтом и CRM-системами',
      'Автоматизация бухгалтерии, склада и торговли',
    ],
    image: bullit4,
    link: '/1c-development',
  },
  {
    title: 'CRM Битрикс24, amoCRM',
    description: [
      'Внедрение и настройка Битрикс24 и amoCRM',
      'Автоматизация воронок продаж и бизнес-процессов',
      'Интеграция CRM с 1С, сайтом и телефонией',
      'Обучение сотрудников и поддержка после запуска',
      'Синхронизация данных между отделами и сервисами',
    ],
    image: bullit6,
    link: '/b24',
  },
];

export default function Services() {
  const [openService, setOpenService] = useState(null);
  function changeServiceIndex(index) {
    if (window.innerWidth < 450) {
      setOpenService(openService === index ? null : index);
    } else return;
  }
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  return (
      <div id="services" className="services">
        <p className="services__title">Индивидуальная разработка</p>
        <div className="services__bullits">
          {services_data.map(({ title, description, image, link }, index) => (
            <div
              key={index}
              className="services__bullits-item"
              onClick={() => {
                changeServiceIndex(index);
              }}
              style={{
                maxHeight:
                  window.innerWidth <= 450 && openService !== index
                    ? ' 50px'
                    : ' none',
                overflow:
                  window.innerWidth <= 450 && openService !== index
                    ? 'visible'
                    : 'hidden',
                border:
                  window.innerWidth <= 450 && openService === index
                    ? '1px solid #AF7B20'
                    : 'none ',
                boxShadow:
                  window.innerWidth <= 450 && openService !== index
                    ? ' 0px 0px 30px 0px #000000E5'
                    : 'none',
              }}
            >
              <img src={image} className="services__bullit-back" alt="" />
              <div className="services__bullits-mobile-back"></div>

              <div className="services__bullits-item-default">
                <p
                  className={
                    window.innerWidth <= 450 && openService == index
                      ? 'services__item-title none'
                      : 'services__item-title'
                  }
                >
                  {title}
                </p>
                <img
                  src={arrowDownImg}
                  className="servises__item-arrow"
                  alt=""
                />
              </div>

              <div
                className="services__item-active"
                style={{
                  opacity:
                    window.innerWidth <= 450 && openService === index
                      ? '1'
                      : '0',
                  visibility:
                    window.innerWidth <= 450 && openService === index
                      ? 'visible'
                      : 'hidden',
                  overflow:
                    window.innerWidth <= 450 && openService == index
                      ? 'hidden'
                      : 'hidden',
                }}
              >
                <ul className="services__item-description">
                  {description.map((Element, index) => (
                    <li key={index} className="services__item-li">
                      {Element}
                    </li>
                  ))}
                </ul>
                <Link
                  className="services__item-button"
                  to={{
                    pathname: link,
                  }}
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
