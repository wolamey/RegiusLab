import React, { useState } from "react";
import ServiceTemplate from "../../Components/ServiceTemplate/ServiceTemplate";
import serviceDb from "../../data/services.json";
import ServiceForm from "../../Components/ServiceForm/ServiceForm";
import Cases from "./Cases";
import SectionNav from "./SectionNav";
export default function Битрикс24({setBodyScroll}) {
    const videos = [
    {
      url: "https://www.youtube.com/watch?v=EUbshXE0ei0",
      embedUrl: "https://www.youtube.com/embed/EUbshXE0ei0",
      title: "Новый битрикс",
      thumbnail: "https://img.youtube.com/vi/EUbshXE0ei0/maxresdefault.jpg",
      type: "youtube"
    },
    {
      url: "https://www.youtube.com/watch?v=yKgzW3sDJF8",
      embedUrl: "https://www.youtube.com/embed/yKgzW3sDJF8", 
      title: "Главные новинки",
      thumbnail: "https://img.youtube.com/vi/yKgzW3sDJF8/maxresdefault.jpg",
      type: "youtube"
    },
    {
      url: "https://rutube.ru/video/private/87cee01ea2ff546b3cc820a6b71bcbc5/?p=QYhf77cHDeVShn6DyTxLdg",
      embedUrl: "https://rutube.ru/play/embed/87cee01ea2ff546b3cc820a6b71bcbc5",
      title: "Записи AI",
      thumbnail: "https://pic.rutube.ru/video/2025-05-19/aa/78/aa7816cba1bf8d3bf3683567b8ced7c1.jpg",
      
      type: "rutube"
    },
    {
      url: "https://rutube.ru/video/private/8cbbaf58b30d1a8629067a67176359b3/?p=nqMfEd0iRWbjQDhlNpT4UA",
      embedUrl: "https://rutube.ru/play/embed/8cbbaf58b30d1a8629067a67176359b3", 
      title: "Онлайн-запись",
      thumbnail: "https://pic.rutube.ru/video/2025-05-19/80/1d/801d9aaf807cd7d40463a9271c2decd2.jpg?width=1791",
      type: "rutube"
    },
    {
      url: "https://rutube.ru/video/private/ff38e85d991281a6c22bd9da8838c0f6/?p=IWnfKn7YvdKoDq_eerFguQ",
      embedUrl: "https://rutube.ru/play/embed/ff38e85d991281a6c22bd9da8838c0f6",
      title: "CRM",
      thumbnail: "https://pic.rutube.ru/video/2025-05-19/9c/5e/9c5e9d58d26dc788e2147886572fccff.jpg?width=1791",
      type: "rutube"
    },
    {
      url: "https://rutube.ru/video/private/4a87319e6eeb63f41c2289a336b4a861/?p=8nkNsCU36ua1FHOKfRZivA",
      embedUrl: "https://rutube.ru/play/embed/4a87319e6eeb63f41c2289a336b4a861",
      title: "Совместная работа", 
      thumbnail: "https://pic.rutube.ru/video/2025-05-19/62/01/6201bab328a64b4024fd8266c01d5df2.jpg?width=1791",
      type: "rutube"
    }
  ];

  // Функция для получения превью с fallback
  const getThumbnail = (video, index) => {
    if (video.thumbnail && video.thumbnail.startsWith('http')) {
      return video.thumbnail;
    }
    
    // Fallback градиенты
    const colors = [
      'linear-gradient(135deg, #af7b20, #d4af37)',
      'linear-gradient(135deg, #1e3c72, #2a5298)',
      'linear-gradient(135deg, #667eea, #764ba2)',
      'linear-gradient(135deg, #f093fb, #f5576c)',
      'linear-gradient(135deg, #4facfe, #00f2fe)',
      'linear-gradient(135deg, #43e97b, #38f9d7)'
    ];
    
    return colors[index % colors.length];
  };

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };
  const [modal, setModal] = useState(false);
 const [selectedUsers, setSelectedUsers] = useState("50");

  // Данные по ценам для корпоративного портала
  const corporatePrices = {
    "50": "5 400 BYN",
    "100": "7 800 BYN", 
    "250": "11 400 BYN",
    "500": "20 100 BYN"
  };
  return (
    <div>
      {/* <ServiceTemplate currentInfo={serviceDb.Битрикс24} /> */}
 {modal && (
          <ServiceForm
            modal={modal}
            setModal={setModal}
            setBodyScroll={setBodyScroll}
            serviceName={'Битрикс24'}
          />
        )}
      <div>
        <div className="service">
          <div className="service__main bg-[url(/bitrix-back.png)]">
            <div className="service__main-back"></div>
            <div className="service__main-container">
              <h1 className="service__main-title">Битрикс24</h1>
              <p className="service__main-description">
                — ваш универсальный инструмент для бизнеса! Управляйте
                проектами, автоматизируйте процессы и улучшайте взаимодействие с
                клиентами в одном месте.
              </p>
              <div className="service__main-bullit-wrapper">
                <div className="service__main-bullit">
                  Единое рабочее пространство
                </div>
                <div className="service__main-bullit">Мощная CRM-система</div>
                <div className="service__main-bullit">
                  Надежная защита данных
                </div>
              </div>
              <button    onClick={() => {
              setModal(true);
              setBodyScroll(true);
            }}  className="service__main-button role__button flare-button">
                Связаться
              </button>
            </div>
          </div>
          <div className="tabs">
            <a className="tabs__item " href="/blockchain&amp;web3">
              Блокчейн и WEB3
            </a>
            <a className="tabs__item " href="/automatization">
             AI Автоматизация бизнеса
            </a>
            <a className="tabs__item " href="/telegram-bots">
              Telegram боты
            </a>
            <a className="tabs__item " href="/1c-development">
              1C разработка
            </a>
            <a className="tabs__item " href="/sites-dev">
              Разработка сайтов
            </a>
            <a className="tabs__item active" href="/b24">
              Битрикс24
            </a>
            <a className="tabs__item " href="/cybersecurity">
              Кибербезопасность
            </a>
          </div>
  <div id="section-box"  className="box-version">
            <div className="box-version__header">
              <div className="box-version__logo">
                <img src="./bitrix-box-logo.webp" alt="Битрикс24 Коробочная версия" />
              </div>
              <div className="box-version__info">
                <h2 className="box-version__title">Коробочная версия Битрикс24</h2>
                <p className="box-version__subtitle">
                  Корпоративный Битрикс24 на вашем сервере с индивидуальными настройками, 
                  доработками и брендом
                </p>
                <div className="box-version__actions">
                  <a href="https://www.1c-bitrix.by/download/intranet.php" 
                     className="box-version__button role__button flare-button" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    Скачать демо-версию
                  </a>
                  {/* <a href="https://www.Битрикс24.by/features/box/box.php" 
                     className="box-version__link" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    Смотреть презентацию
                  </a> */}
                </div>
              </div>
            </div>

            <div className="box-version__features">
              <h3 className="box-version__section-title">Ключевые преимущества</h3>
              <div className="box-version__grid">
                <div className="box-version__feature">
                  {/* <div className="box-version__feature-icon">
                    <img src="./server-icon.png" alt="Сервер" />
                  </div> */}
                  <h4 className="box-version__feature-title">Размещение на вашем сервере</h4>
                  <p className="box-version__feature-description">
                    Устанавливается на сервер компании или своего провайдера
                  </p>
                </div>
                <div className="box-version__feature">
                  {/* <div className="box-version__feature-icon">
                    <img src="./customization-icon.png" alt="Кастомизация" />
                  </div> */}
                  <h4 className="box-version__feature-title">Индивидуальные настройки</h4>
                  <p className="box-version__feature-description">
                    Бизнес-логика и интерфейс настраиваются под ваши требования
                  </p>
                </div>
                <div className="box-version__feature">
                  {/* <div className="box-version__feature-icon">
                    <img src="./integration-icon.png" alt="Интеграция" />
                  </div> */}
                  <h4 className="box-version__feature-title">Расширенные возможности</h4>
                  <p className="box-version__feature-description">
                    Больше интеграций и функций, чем в облачной версии
                  </p>
                </div>
              </div>
            </div>

          <div className="box-version__capabilities">
  <h3 className="box-version__section-title">Возможности коробочной версии</h3>
  <div className="box-version__capabilities-grid">
    <div className="box-version__capability">
      <h4 className="box-version__capability-title">Открытый исходный код</h4>
      <p className="box-version__capability-description">
        Дорабатывайте интерфейс и функциональность под индивидуальные 
        потребности вашей компании без ограничений. Своими силами или с привлечением 
        интеграторов можно дорабатывать 1С-Битрикс24 под бизнес-логику вашей компании.
      </p>
    </div>
    
    <div className="box-version__capability">
      <h4 className="box-version__capability-title">Веб-кластер</h4>
      <p className="box-version__capability-description">
        Масштабируемое решение для крупных организаций с большим 
        объемом данных и количеством пользователей. Комбинация технологических решений, 
        позволяющих распределить портал на несколько серверов для обеспечения высокой 
        доступности, балансировки нагрузки и масштабирования.
      </p>
    </div>
    
    <div className="box-version__capability">
      <h4 className="box-version__capability-title">Безопасность</h4>
      <p className="box-version__capability-description">
        Полный контроль над безопасностью данных и доступом к системе. 
        Размещайте 1C-Битрикс24 на собственных серверах компании или в датацентре, 
        самостоятельно следите за надежностью работы.
      </p>
    </div>
    
    <div className="box-version__capability">
      <h4 className="box-version__capability-title">Многодепартаментность</h4>
      <p className="box-version__capability-description">
        Идеальное решение для компаний с филиалами в разных городах. 
        Каждый филиал может иметь свой внутренний сервис при координации работы 
        со всей компанией.
      </p>
    </div>
    
    <div className="box-version__capability">
      <h4 className="box-version__capability-title">Виртуальная машина</h4>
      <p className="box-version__capability-description">
        Используйте бесплатный настроенный виртуальный сервер для оптимальной работы 
        с продуктами 1С-Битрикс. Включает ОС, веб-сервер, БД, firewall, почтовый сервер 
        и все необходимые настройки для надежности и производительности.
      </p>
    </div>
    
    <div className="box-version__capability">
      <h4 className="box-version__capability-title">Кастомизация дизайна</h4>
      <p className="box-version__capability-description">
        Меняйте дизайн интерфейса согласно корпоративному стилю компании 
        или брендбуку без ограничений. Создавайте индивидуальный имидж компании 
        на основе типового 1C-Битрикс24.
      </p>
    </div>
    
    <div className="box-version__capability">
      <h4 className="box-version__capability-title">Проектный менеджмент</h4>
      <p className="box-version__capability-description">
        Координируйте усилия команды с помощью проектных инструментов. 
        Определяйте роли и права доступа, планируйте этапы, храните документы на Диске, 
        ведите календарь и общайтесь в чатах проектов.
      </p>
    </div>
    
    <div className="box-version__capability">
      <h4 className="box-version__capability-title">CRM и автоматизация</h4>
      <p className="box-version__capability-description">
        Ведите клиентов по всем этапам жизненного цикла, автоматизируйте продажи 
        с помощью роботов и бизнес-процессов. Используйте CRM-маркетинг для 
        таргетированных рассылок и повышения повторных продаж.
      </p>
    </div>
    
    <div className="box-version__capability">
      <h4 className="box-version__capability-title">Внутренние коммуникации</h4>
      <p className="box-version__capability-description">
        Цифровое рабочее пространство для всей компании. Ставьте и контролируйте задачи, 
        общайтесь в чатах, обсуждайте планы в профильных группах. Будьте всегда на связи 
        через десктопные и мобильные приложения.
      </p>
    </div>
    
    <div className="box-version__capability">
      <h4 className="box-version__capability-title">HR-менеджмент</h4>
      <p className="box-version__capability-description">
        Организуйте легкий вход новых сотрудников в коллектив, знакомство со структурой 
        компании. Автоматизируйте оповещение команды о новых коллегах, заполнение профилей 
        и вступление в рабочие группы.
      </p>
    </div>
  </div>
</div>
    <div id="section-weightless"  className="bitrix-weightless">
        <div className="bitrix-weightless__header">
          <h2 className="bitrix-weightless__title">Новый Битрикс24 Невесомость</h2>
          <p className="bitrix-weightless__date">15 мая состоялась онлайн-презентация обновлений Битрикс24</p>
        </div>

        <div className="bitrix-weightless__content">
          <div className="bitrix-weightless__description">
            <p className="bitrix-weightless__text">
              На презентации были представлены главные изменения продукта и новые бизнес-инструменты.
              Главные темы этого релиза — простота, удобство и искусственный интеллект в процессах. 
              Откорректировали концепцию продукта и интерфейс, сделали мессенджер центром совместной работы, 
              добавили персонального ассистента Марту AI во все модули и CRM.
            </p>
          </div>

          <div className="bitrix-weightless__features">
            <div className="bitrix-weightless__feature">
              <div className="bitrix-weightless__feature-icon">✨</div>
              <h3 className="bitrix-weightless__feature-title">Упрощенный интерфейс</h3>
              <p className="bitrix-weightless__feature-text">
                Полностью переработанный дизайн для максимального удобства работы
              </p>
            </div>
            <div className="bitrix-weightless__feature">
              <div className="bitrix-weightless__feature-icon">🤖</div>
              <h3 className="bitrix-weightless__feature-title">Марта AI</h3>
              <p className="bitrix-weightless__feature-text">
                Персональный ассистент с искусственным интеллектом во всех модулях
              </p>
            </div>
            <div className="bitrix-weightless__feature">
              <div className="bitrix-weightless__feature-icon">💬</div>
              <h3 className="bitrix-weightless__feature-title">Мессенджер в центре</h3>
              <p className="bitrix-weightless__feature-text">
                Коммуникации стали основой для совместной работы
              </p>
            </div>
          </div>

          <div className="bitrix-weightless__videos">
            <h3 className="bitrix-weightless__videos-title">Видео-материалы презентации</h3>
            <div className="bitrix-weightless__video-grid">
              {videos.map((video, index) => (
                <div 
                  key={index} 
                  className="bitrix-weightless__video-item"
                  onClick={() => handleVideoClick(video.url)}
                >
                  <div className="bitrix-weightless__video-container">
                    <div className="bitrix-weightless__video-preview">
                      <div 
                        className="bitrix-weightless__video-thumbnail"
                        style={{
                          background: getThumbnail(video, index)
                        }}
                      >
                        {video.thumbnail && video.thumbnail.startsWith('http') && (
                          <img 
                            src={video.thumbnail} 
                            alt={video.title}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.style.background = getThumbnail(video, index);
                            }}
                          />
                        )}
                      </div>
                      <div className="bitrix-weightless__video-overlay">
                        <div className="bitrix-weightless__play-button">
                          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <circle cx="30" cy="30" r="30" fill="rgba(175, 123, 32, 0.9)"/>
                            <path d="M25 20L40 30L25 40V20Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="bitrix-weightless__video-info">
                          <span className="bitrix-weightless__video-title">{video.title}</span>
                          <span className="bitrix-weightless__video-duration">
                            {video.type === 'youtube' ? 'YouTube' : 'Rutube'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bitrix-weightless__cta">
            <h3 className="bitrix-weightless__cta-title">Готовы к обновлению?</h3>
            <p className="bitrix-weightless__cta-text">
              Узнайте, как новые возможности Битрикс24 Невесомость помогут вашему бизнесу
            </p>
            <button        onClick={() => {
              setModal(true);
              setBodyScroll(true);
            }} className="bitrix-weightless__cta-button role__button flare-button">
              Получить консультацию по обновлению
            </button>
          </div>
        </div>
      </div>


       <div  id="section-pricing"  className="box-version__pricing">
          <h3 className="box-version__section-title">Редакции и стоимость</h3>
          
          <div className="pricing-table-container overflow-auto">
          <div className="pricing-table min-w-[1024px]">
            {/* Заголовок таблицы */}
            <div className="pricing-table__row pricing-table__row--header">
              <div className="pricing-table__sidebar">
                <div className="pricing-table__title">Редакции</div>
              </div>
              <div className="pricing-table__body">
                <div className="pricing-table__item">
                  <div className="pricing-table__title">Интернет-магазин + CRM</div>
                </div>
                <div className="pricing-table__item">
                  <div className="pricing-table__title">Корпоративный портал</div>
                </div>
                <div className="pricing-table__item">
                  <div className="pricing-table__title">Энтерпрайз</div>
                </div>
              </div>
            </div>

            {/* Пользователи */}
            <div className="pricing-table__row">
              <div className="pricing-table__sidebar">
                <div className="pricing-table__sidebar-title">
                  <span className="pricing-table__icon">👥</span>
                  Пользователи
                </div>
                <div className="pricing-table__sub-description">
                  число сотрудников в вашем Битрикс24
                </div>
              </div>
              <div className="pricing-table__body">
                <div className="pricing-table__item">
                  <div className="pricing-table__users">
                    <div className="pricing-table__users-value">12</div>
                  </div>
                </div>
                <div className="pricing-table__item">
                  <div className="pricing-table__users">
                    <div className="pricing-table__users-selector">
                      {["50", "100", "250", "500"].map((count) => (
                        <button
                          key={count}
                          className={`pricing-table__users-count ${
                            selectedUsers === count ? "active" : ""
                          }`}
                          onClick={() => setSelectedUsers(count)}
                        >
                          {count}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pricing-table__item">
                  <div className="pricing-table__users">
                    <div className="pricing-table__users-value">1000+</div>
                 
                  </div>
                </div>
              </div>
            </div>

            {/* Цены */}
            <div className="pricing-table__row">
              <div className="pricing-table__sidebar">
                <div className="pricing-table__sidebar-title">
                  <span className="pricing-table__icon">💰</span>
                  Стоимость
                </div>
              </div>
              <div className="pricing-table__body">
                <div className="pricing-table__item">
                  <div className="pricing-table__price">
                    <div className="pricing-table__price-value">3 700 BYN</div>
                    <div className="pricing-table__price-description">Лицензия 12 мес</div>
                  </div>
                </div>
                <div className="pricing-table__item">
                  <div className="pricing-table__price">
                    <div className="pricing-table__price-value">
                      {corporatePrices[selectedUsers]}
                    </div>
                    <div className="pricing-table__price-description">Лицензия 12 мес</div>
                  </div>
                </div>
                <div className="pricing-table__item">
                  <div className="pricing-table__price">
                    <div className="pricing-table__price-value">38 700+ BYN</div>
                    <div className="pricing-table__price-description">Лицензия 12 мес</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Дополнительные возможности */}
            <div className="pricing-table__row">
              <div className="pricing-table__sidebar">
                <div className="pricing-table__sidebar-title">
                  <span className="pricing-table__icon">⚡</span>
                  Дополнительно
                </div>
              </div>
              <div className="pricing-table__body">
                <div className="pricing-table__item">
                  <div className="pricing-table__features">
                    <span className="pricing-table__feature success">Экстранет</span>
                    <span className="pricing-table__feature success">eCommerce-платформа</span>
                    <span className="pricing-table__feature">Документы Онлайн</span>
                    <span className="pricing-table__feature">Многодепартаментность</span>
                    <span className="pricing-table__feature">Веб-кластер</span>
                    <span className="pricing-table__feature">VIP поддержка 24/7</span>
                  </div>
                </div>
                <div className="pricing-table__item">
                  <div className="pricing-table__features">
                    <span className="pricing-table__feature success">Экстранет</span>
                    <span className="pricing-table__feature success">eCommerce-платформа</span>
                    <span className="pricing-table__feature success">Документы Онлайн</span>
                    <span className="pricing-table__feature">Многодепартаментность</span>
                    <span className="pricing-table__feature">Веб-кластер</span>
                    <span className="pricing-table__feature">VIP поддержка 24/7</span>
                  </div>
                </div>
                <div className="pricing-table__item">
                  <div className="pricing-table__features">
                    <span className="pricing-table__feature success">Экстранет</span>
                    <span className="pricing-table__feature success">eCommerce-платформа</span>
                    <span className="pricing-table__feature success">Документы Онлайн</span>
                    <span className="pricing-table__feature success">Многодепартаментность</span>
                    <span className="pricing-table__feature success">Веб-кластер</span>
                    <span className="pricing-table__feature success">VIP поддержка 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Кнопки действий */}
            {/* <div className="pricing-table__row">
              <div className="pricing-table__sidebar">
                <div className="pricing-table__actions">
                  <a 
                    href="https://www.1c-bitrix.by/buy/intranet.php" 
                    className="pricing-table__button pricing-table__button--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    купить
                  </a>
                  <a 
                    href="/partners/" 
                    className="pricing-table__button pricing-table__button--secondary"
                  >
                    заказать у партнёров
                  </a>
                </div>
              </div>
              <div className="pricing-table__body">
                <div className="pricing-table__item">
                  <div className="pricing-table__action">
                    <a 
                      href="/prices/try_biz.php" 
                      className="pricing-table__button pricing-table__button--success"
                    >
                      попробовать
                    </a>
                  </div>
                </div>
                <div className="pricing-table__item">
                  <div className="pricing-table__action">
                    <a 
                      href="/prices/try_biz.php" 
                      className="pricing-table__button pricing-table__button--success"
                    >
                      попробовать
                    </a>
                  </div>
                </div>
                <div className="pricing-table__item">
                  <div className="pricing-table__action">
                    <a 
                      href="/prices/try_biz.php" 
                      className="pricing-table__button pricing-table__button--success"
                    >
                      попробовать
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          </div>
        </div>


      
            <div className="box-version__demo">
              <div className="box-version__demo-content">
                <h3 className="box-version__demo-title">Протестируйте перед покупкой</h3>
                <p className="box-version__demo-description">
                  Прежде чем покупать «коробку» Битрикс24, протестируйте её возможности 
                  в своей компании. После 30 дней испытания вы сможете купить лицензию 
                  и продолжить работу.
                </p>
                <a href="https://www.1c-bitrix.by/download/intranet.php" 
                   className="box-version__demo-button role__button flare-button m-auto block" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  Скачать бесплатную демо-версию
                </a> 
              </div>
            </div>
          </div>


<Cases 
setModal = {setModal}
setBodyScroll = {setBodyScroll}

/>


          <div  id="section-theory"  className="theory">
            <p className="theory__title"> Что такое Битрикс24?</p>
            <div className="theory__wrapper">
              <img className="theory__lamp" src="/src/assets/lamp.png" alt="" />
              <div className="theory__text">
                <p className="theory__item">
                  Битрикс24 — это комплексная платформа для управления бизнесом,
                  объединяющая в себе инструменты для совместной работы, CRM,
                  задачи и проекты, сайты и магазины, а также автоматизацию
                  бизнес-процессов. С помощью Битрикс24 компании могут перенести
                  все рабочие коммуникации, продажи, проекты и бизнес-процессы в
                  единое пространство, что значительно упрощает управление и
                  повышает эффективность работы.
                </p>
              </div>
            </div>
          </div>
          <div  id="section-role"  className="role">
            <div className="role__top">
              <div className="role__text">
                <p className="role__title">Роль Битрикс24 в бизнесе:</p>
              </div>
            </div>
            <div className="role__wrapper">
              <div className="role__item">
                <img src="./role61.png" className="role__item-img" alt="" />
                <p className="role__item-text">Улучшение коммуникации</p>
              </div>
              <div className="role__item">
                <img src="./role62.png" className="role__item-img" alt="" />
                <p className="role__item-text">Управление продажами</p>
              </div>
              <div className="role__item">
                <img src="./role63.png" className="role__item-img" alt="" />
                <p className="role__item-text">
                  Организация работы над проектами
                </p>
              </div>
              <div className="role__item">
                <img src="./role64.png" className="role__item-img" alt="" />
                <p className="role__item-text">Создание сайтов и магазинов</p>
              </div>
            </div>
            <button        onClick={() => {
              setModal(true);
              setBodyScroll(true);
            }} className="role__button flare-button">
              получить бесплатную консультацию
            </button>
          </div>
          <div  id="section-when"  className="when-new">
            <p className="when-new__title title">
              Когда пора внедрять битрикс24?{" "}
            </p>
            <div className="when-new__wrapper">
              <div className="when-new__item">
                <div className="new__item_container">
                  <div className="when-new__item-top">
                    <img
                      src="./when-b241.svg"
                      className="when-new__img"
                      alt=""
                    />
                    <p className="when-new__item-title">
                      Отсутствие единого центра управления
                    </p>
                  </div>
                  <div className="when-new__text">
                    <span className="when-new__text-item">Если</span>
                    <span className="when-new__text-item">
                      ваши бизнес-процессы разрознены и неэффективны
                    </span>
                    <span className="when-new__text-item">
                      – Битрикс24 объединит все в одном месте, обеспечив полный
                      контроль и прозрачность.
                    </span>
                  </div>
                </div>
              </div>
              <div className="when-new__item">
                <div className="new__item_container">
                  <div className="when-new__item-top">
                    <img
                      src="./when-b242.svg"
                      className="when-new__img"
                      alt=""
                    />
                    <p className="when-new__item-title">
                      Сложности с коммуникацией
                    </p>
                  </div>
                  <div className="when-new__text">
                    <span className="when-new__text-item">Если</span>
                    <span className="when-new__text-item">
                      ваши сотрудники тратят много времени на переписку и звонки{" "}
                    </span>
                    <span className="when-new__text-item">
                      – Битрикс24 обеспечит мгновенную и эффективную коммуникацию
                      через чат, видеозвонки и группы.
                    </span>
                  </div>
                </div>
              </div>
              <div className="when-new__item">
                <div className="new__item_container">
                  <div className="when-new__item-top">
                    <img
                      src="./when-b243.svg"
                      className="when-new__img"
                      alt=""
                    />
                    <p className="when-new__item-title">
                      Проблемы с управлением проектами
                    </p>
                  </div>
                  <div className="when-new__text">
                    <span className="when-new__text-item">Если</span>
                    <span className="when-new__text-item">
                      проекты не укладываются в сроки{" "}
                    </span>
                    <span className="when-new__text-item">
                      – Битрикс24 поможет автоматизировать управление проектами и
                      следить за дедлайнами.
                    </span>
                  </div>
                </div>
              </div>
              <div className="when-new__item">
                <div className="new__item_container">
                  <div className="when-new__item-top">
                    <img
                      src="./when-b244.svg"
                      className="when-new__img"
                      alt=""
                    />
                    <p className="when-new__item-title">
                      Отсутствие прозрачности
                    </p>
                  </div>
                  <div className="when-new__text">
                    <span className="when-new__text-item">Если</span>
                    <span className="when-new__text-item">
                      вы не видите, как выполняются задачи
                    </span>
                    <span className="when-new__text-item">
                      – Битрикс24 обеспечит полную прозрачность и контроль над
                      процессами.
                    </span>
                  </div>
                </div>
              </div>
              <div className="when-new__item">
                <div className="new__item_container">
                  <div className="when-new__item-top">
                    <img
                      src="./when-b245.svg"
                      className="when-new__img"
                      alt=""
                    />
                    <p className="when-new__item-title">
                      Проблемы с управлением клиентами
                    </p>
                  </div>
                  <div className="when-new__text">
                    <span className="when-new__text-item">Если</span>
                    <span className="when-new__text-item">
                      вы не можете эффективно управлять клиентской базой
                    </span>
                    <span className="when-new__text-item">
                      – Битрикс24 обеспечит мощные CRM-инструменты для улучшения
                      взаимодействия с клиентами.
                    </span>
                  </div>
                </div>
              </div>
              <div className="when-new__item">
                <div className="new__item_container">
                  <div className="when-new__item-top">
                    <img
                      src="./when-b246.svg"
                      className="when-new__img"
                      alt=""
                    />
                    <p className="when-new__item-title">
                      Сложности с управлением продажами
                    </p>
                  </div>
                  <div className="when-new__text">
                    <span className="when-new__text-item">Если</span>
                    <span className="when-new__text-item">
                      вы не можете эффективно управлять процессом продаж
                    </span>
                    <span className="when-new__text-item">
                      – Битрикс24 обеспечит мощные инструменты для управления
                      продажами и аналитики.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  id="section-services"  className="our-services">
            <p className="our-services__title">Наши услуги</p>
            <div className="our-services__wrapper">
              <div className="our-services__item">
                <div className="our-services__item-content">
                  <div className="our-services__item-content-container">
                    <p className="our-services__item-content-num">01</p>
                    <div className="our-services__item-text">
                      <p className="our-services__item-content-title">
                        Автоматизация бизнес-процессов
                      </p>
                      <div className="our-services__item-content-line"></div>
                      <p className="our-services__item-content-description">
                        Мы предлагаем услуги по автоматизации бизнес-процессов с
                        помощью Битрикс24. Это включает в себя настройку
                        автоматических рассылок, обработку сделок, согласование
                        договоров и многое другое. Автоматизация позволяет
                        сократить время на выполнение рутинных задач и повысить
                        общую эффективность работы компании.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="./bitrix1.png"
                  className="our-services__item-img"
                  alt=""
                />
              </div>
              <div className="our-services__item">
                <div className="our-services__item-content">
                  <div className="our-services__item-content-container">
                    <p className="our-services__item-content-num">02</p>
                    <div className="our-services__item-text">
                      <p className="our-services__item-content-title">
                        Интеграция с 1С
                      </p>
                      <div className="our-services__item-content-line"></div>
                      <p className="our-services__item-content-description">
                        Мы осуществляем интеграцию Битрикс24 с 1С, что позволяет
                        синхронизировать данные между системами и
                        автоматизировать обмен информацией. Это обеспечивает
                        более точное и оперативное управление финансовыми и
                        складскими операциями.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="./bitrix2.png"
                  className="our-services__item-img"
                  alt=""
                />
              </div>
              <div className="our-services__item">
                <div className="our-services__item-content">
                  <div className="our-services__item-content-container">
                    <p className="our-services__item-content-num">03</p>
                    <div className="our-services__item-text">
                      <p className="our-services__item-content-title">
                        Внедрение и настройка Битрикс24
                      </p>
                      <div className="our-services__item-content-line"></div>
                      <p className="our-services__item-content-description">
                        Наши специалисты помогут вам внедрить и настроить
                        Битрикс24 облачной и коробочной редакции в соответствии
                        с потребностями вашего бизнеса. Мы проведем анализ
                        текущих процессов, настроим систему под ваши задачи и
                        обучим сотрудников работе с платформой.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="./bitrix3.png"
                  className="our-services__item-img"
                  alt=""
                />
              </div>
              <div className="our-services__item">
                <div className="our-services__item-content">
                  <div className="our-services__item-content-container">
                    <p className="our-services__item-content-num">04</p>
                    <div className="our-services__item-text">
                      <p className="our-services__item-content-title">
                        Поддержка и доработка Битрикс24
                      </p>
                      <div className="our-services__item-content-line"></div>
                      <p className="our-services__item-content-description">
                        Мы предлагаем услуги по поддержке и доработке Битрикс24
                        облачной и коробочной редакции. Это включает в себя
                        техническую поддержку, обновление системы, разработку
                        дополнительных модулей и интеграций. Мы гарантируем
                        высокое качество обслуживания и оперативное решение
                        любых возникающих вопросов.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="./bitrix4.png"
                  className="our-services__item-img"
                  alt=""
                />
              </div>
            </div>
          </div>
          <button        onClick={() => {
              setModal(true);
              setBodyScroll(true);
            }} className="role__button service-button flare-button">
            Получить консультацию
          </button>
          <div  id="section-why"  className="why-auto">
            <div className="why-auto__left">
              <img src="./why-bitrix.png" className="why-auto__img" alt="" />
              <p className="why-auto__title">
                Почему стоит внедрять Битрикс24 в бизнес
              </p>
            </div>
            <div className="why-auto__wrapper">
              <div className="why-auto__item">
                <p className="why-auto__text">
                  <span className="why-auto__item-title">
                    Сократить время на выполнение рутинных задач:{" "}
                  </span>
                  <span className="why-auto__description">
                    Автоматизация процессов освобождает время для более важных
                    задач.
                  </span>
                </p>
              </div>
              <div className="why-auto__item">
                <p className="why-auto__text">
                  <span className="why-auto__item-title">
                    Повысить продуктивность команды:{" "}
                  </span>
                  <span className="why-auto__description">
                    Все инструменты для работы находятся в одном месте, что
                    упрощает доступ к информации и улучшает координацию.
                  </span>
                </p>
              </div>
              <div className="why-auto__item">
                <p className="why-auto__text">
                  <span className="why-auto__item-title">
                    Улучшить качество обслуживания клиентов:{" "}
                  </span>
                  <span className="why-auto__description">
                    CRM-система помогает лучше понимать потребности клиентов и
                    оперативно реагировать на их запросы.
                  </span>
                </p>
              </div>
              <div className="why-auto__item">
                <p className="why-auto__text">
                  <span className="why-auto__item-title">
                    Снизить затраты на IT-инфраструктуру:{" "}
                  </span>
                  <span className="why-auto__description">
                    Битрикс24 предлагает облачное решение, что позволяет
                    сократить расходы на серверы и программное обеспечение.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <button        onClick={() => {
              setModal(true);
              setBodyScroll(true);
            }} className="role__button service-button flare-button">
            Бесплатная консультация
          </button>
          <div className="why-us">
            <p className="why-us__title">Почему выбирают нас?</p>
            <div className="why-us__content">
              <div className="why-us__wrapper">
                <div className="why-us__item">
                  <p className="why-us__item-title">Опыт и профессионализм</p>
                  <p className="why-us__description">
                    Наши специалисты имеют богатый опыт работы с Битрикс24 и
                    готовы предложить решения, которые максимально соответствуют
                    вашим потребностям.
                  </p>
                  <div className="why-us__line"></div>
                </div>
                <div className="why-us__item">
                  <p className="why-us__item-title">Индивидуальный подход</p>
                  <p className="why-us__description">
                    Мы учитываем особенности вашего бизнеса и предлагаем
                    индивидуальные решения для каждой компании.
                  </p>
                  <div className="why-us__line"></div>
                </div>
                <div className="why-us__item">
                  <p className="why-us__item-title">Качество и надежность</p>
                  <p className="why-us__description">
                    Мы гарантируем высокое качество предоставляемых услуг и
                    надежность всех внедряемых решений.
                  </p>
                  <div className="why-us__line"></div>
                </div>
                <div className="why-us__item">
                  <p className="why-us__item-title">Поддержка на всех этапах</p>
                  <p className="why-us__description">
                    Мы сопровождаем вас на всех этапах работы с Битрикс24 — от
                    внедрения до постоянной поддержки и доработки системы.
                  </p>
                  <div className="why-us__line"></div>
                </div>
              </div>
              <img src="./why-us6.png" className="why-us__img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <SectionNav />
    </div>
  );
}
