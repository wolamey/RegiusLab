// src/Components/CertificatesSlider/CertificatesSlider.jsx
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CertificatesSlider.scss';

// Импортируйте ваши PDF файлы
import cert1 from '../assets/cert1.pdf';
import cert2 from '../assets/cert2.pdf';
import cert3 from '../assets/cert3.pdf';
import cert4 from '../assets/cert4.pdf';
import cert5 from '../assets/cert5.pdf';

// Импортируйте превью изображения для сертификатов (скриншоты PDF)
import certPreview1 from '../assets/cert-preview1.png';
import certPreview2 from '../assets/cert-preview2.png';
import certPreview3 from '../assets/cert-preview3.png';
import certPreview4 from '../assets/cert-preview4.png';
import certPreview5 from '../assets/cert-preview5.png';

const certificates = [
  {
    id: 1,
    title: 'Сертификат соответствия',
    file: cert1,
    preview: certPreview1,
  },
  {
    id: 2,
    title: 'Сертификат о присвоении компетенции "Коробочная версия"',
    file: cert2,
    preview: certPreview2,
  },
  {
    id: 3,
    title: 'Сертификат "Золотой партнер"',
    file: cert3,
    preview: certPreview3,
  },
  {
    id: 4,
    title: 'Сертификат о присвоении компетенции "Автоматизация"',
    file: cert4,
    preview: certPreview4,
  },
  {
    id: 5,
    title: 'Сертификат о присвоении компетенции "CRM"',
    file: cert5,
    preview: certPreview5,
  },
];
function CertCover() {
  return (
    <svg
      className="certificates__cover-svg"
      viewBox="0 0 300 400"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="35%" r="80%">
          <stop offset="0%" stopColor="#1c1c1c" />
          <stop offset="60%" stopColor="#0f0f0f" />
          <stop offset="100%" stopColor="#050505" />
        </radialGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4D77A" />
          <stop offset="45%" stopColor="#AF7B20" />
          <stop offset="100%" stopColor="#7a5410" />
        </linearGradient>
        <linearGradient id="goldSoft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E7C66B" />
          <stop offset="100%" stopColor="#AF7B20" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#AF7B20" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#AF7B20" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="300" height="400" fill="url(#bgGrad)" />
      <circle cx="150" cy="150" r="130" fill="url(#glow)" />

      {/* рамки */}
      <rect x="14" y="14" width="272" height="372" rx="16" ry="16"
        fill="none" stroke="url(#goldSoft)" strokeWidth="1.2" opacity="0.7" />
      <rect x="22" y="22" width="256" height="356" rx="12" ry="12"
        fill="none" stroke="url(#goldSoft)" strokeWidth="0.6" opacity="0.4" />

      {/* угловые орнаменты */}
      {[
        [26, 26, 1, 1],
        [274, 26, -1, 1],
        [26, 374, 1, -1],
        [274, 374, -1, -1],
      ].map(([x, y, sx, sy], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${sx} ${sy})`}>
          <path d="M0 0 L26 0 M0 0 L0 26" stroke="url(#goldSoft)"
            strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="6" cy="6" r="1.6" fill="#AF7B20" />
        </g>
      ))}

      {/* лучи */}
      <g opacity="0.35">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={150 + Math.cos(a) * 70}
              y1={150 + Math.sin(a) * 70}
              x2={150 + Math.cos(a) * 130}
              y2={150 + Math.sin(a) * 130}
              stroke="#AF7B20" strokeWidth="0.8" strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* лента */}
      <path d="M110 232 L150 260 L190 232 L190 300 L150 276 L110 300 Z"
        fill="url(#goldSoft)" opacity="0.9" />
      <path d="M110 232 L150 260 L190 232"
        fill="none" stroke="#7a5410" strokeWidth="1" />

      {/* медаль */}
      <g className="certificates__medal">
        <circle cx="150" cy="150" r="58" fill="url(#gold)" />
        <circle cx="150" cy="150" r="58" fill="none" stroke="#7a5410" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="48" fill="none" stroke="#3a2a08" strokeWidth="1" opacity="0.6" />
        <g opacity="0.9">
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i * 15 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={150 + Math.cos(a) * 58}
                y1={150 + Math.sin(a) * 58}
                x2={150 + Math.cos(a) * 63}
                y2={150 + Math.sin(a) * 63}
                stroke="#7a5410" strokeWidth="1.4" strokeLinecap="round"
              />
            );
          })}
        </g>
        <path
          d="M150 118 L158 140 L182 140 L163 154 L170 176 L150 163 L130 176 L137 154 L118 140 L142 140 Z"
          fill="#3a2a08" opacity="0.85"
        />
        <circle cx="150" cy="150" r="10" fill="none" stroke="#3a2a08" strokeWidth="1.4" opacity="0.7" />
      </g>

      {/* частицы */}
      <g className="certificates__particles">
        {[
          [60, 90], [240, 110], [80, 300], [230, 320],
          [50, 200], [255, 200], [120, 60], [190, 70],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.6" fill="#E7C66B" opacity="0.7" />
        ))}
      </g>
    </svg>
  );
}
export function OpenSeal() {
  return (
    <div className="certificates-open-seal">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sealGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#F4D77A" />
            <stop offset="50%"  stopColor="#AF7B20" />
            <stop offset="100%" stopColor="#7a5410" />
          </linearGradient>
          <radialGradient id="sealGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#AF7B20" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#AF7B20" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* внешнее свечение */}
        <circle cx="100" cy="100" r="90" fill="url(#sealGlow)" />

        {/* раскрывающееся внешнее кольцо */}
        <circle
          className="seal-ring seal-ring--outer"
          cx="100" cy="100" r="70"
          fill="none"
          stroke="url(#sealGold)"
          strokeWidth="2"
          strokeDasharray="10 6"
        />

        {/* вращающееся кольцо */}
        <circle
          className="seal-ring seal-ring--spin"
          cx="100" cy="100" r="56"
          fill="none"
          stroke="#AF7B20"
          strokeWidth="1.4"
          strokeDasharray="4 10"
          opacity="0.8"
        />

        {/* центральная печать */}
        <circle
          className="seal-core"
          cx="100" cy="100" r="40"
          fill="url(#sealGold)"
        />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#7a5410" strokeWidth="1.5" />

        {/* галочка */}
        <path
          className="seal-check"
          d="M82 102 L95 115 L120 88"
          fill="none"
          stroke="#3a2a08"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}


function CertificateCard({ cert, onOpen, isFlipping }) {
  return (
    <div
      className={`certificates__slide ${isFlipping ? 'is-flipping' : ''}`}
      onClick={() => onOpen(cert)}
    >
      <div className="certificates__slide-inner">
        {/* лицевая сторона — SVG-обложка */}
        <div className="certificates__slide-face certificates__slide-face--front">
          <CertCover />
          <div className="certificates__slide-overlay">
            <p className="certificates__slide-title">{cert.title}</p>
            <span className="certificates__slide-btn">Посмотреть</span>
          </div>
        </div>

        {/* обратная сторона — SVG-анимация раскрытия */}
        <div className="certificates__slide-face certificates__slide-face--back">
          <OpenSeal />
        </div>
      </div>
    </div>
  );
}
// Показывать во время перехода (flippingId !== null)


export default function CertificatesSlider() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
const [pdfLoaded, setPdfLoaded] = useState(false);       // PDF готов
const [isClosing, setIsClosing] = useState(false);   
const [flippingId, setFlippingId] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



const closePdfModal = () => {
  setIsClosing(true);
  setTimeout(() => {
    setIsModalOpen(false);
    setIsClosing(false);
    setSelectedPdf(null);
    setPdfLoaded(false);
    document.body.style.overflow = 'auto';
  }, 450);
};


  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closePdfModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

const openPdfModal = (cert) => {
  if (isModalOpen) return;
  setFlippingId(cert.id);           // 1. переворот карточки
  setPdfLoaded(false);

  setTimeout(() => {
    setSelectedPdf(cert.file);      // 2. показываем модалку
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, 500);

  setTimeout(() => {
    setFlippingId(null);            // 3. карточка вернулась
  }, 1000);
};
  // Модальное окно выносим отдельно, чтобы не дублировать
const modal = isModalOpen && (
  <div
    className={`certificates-modal ${isClosing ? 'is-closing' : ''}`}
    onClick={closePdfModal}
  >
    {/* золотые искры по краям */}
    <div className="certificates-modal__sparks" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => (
        <span key={i} className={`spark spark--${i + 1}`} />
      ))}
    </div>

    {/* свечение за окном */}
    <div className="certificates-modal__glow" aria-hidden="true" />

    <div
      className="certificates-modal__content"
      onClick={(e) => e.stopPropagation()}
    >
      {/* бегущий золотой блик по рамке */}
      <div className="certificates-modal__shine" aria-hidden="true" />

      <button className="certificates-modal__close" onClick={closePdfModal}>
        ✕
      </button>

      <iframe
        src={selectedPdf}
        className={`certificates-modal__iframe ${pdfLoaded ? 'is-loaded' : ''}`}
        title="Сертификат"
        onLoad={() => setPdfLoaded(true)}
      />
    </div>
  </div>
);

  // Мобильная версия - слайдер по 1 элементу
  if (isMobile) {
    return (
      <div className="certificates certificates--mobile">
        <div className="certificates__container">
          <p className="certificates__title">Наши сертификаты</p>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: '.certificates__arrow-prev',
              nextEl: '.certificates__arrow-next',
            }}
            pagination={{
              el: '.certificates__dots',
              clickable: true,
              bulletClass: 'certificates__dot',
              bulletActiveClass: 'certificates__dot-active',
            }}
            loop={true}
            speed={500}
            className="certificates__swiper"
          >
            {certificates.map((cert) => (
              <SwiperSlide key={cert.id}>
                <CertificateCard cert={cert} onOpen={openPdfModal} />
              </SwiperSlide>
            ))}
         
          </Swiper>

          <div className="certificates__controls">
            <button className="certificates__arrow certificates__arrow-prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="certificates__dots"></div>
            <button className="certificates__arrow certificates__arrow-next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {modal}
      </div>
    );
  }

  // Десктопная версия - 3 слайда
  return (
    <div className="certificates">
      <div className="certificates__container">
        <p className="certificates__title">Наши сертификаты</p>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          navigation={{
            prevEl: '.certificates__arrow-prev',
            nextEl: '.certificates__arrow-next',
          }}
          pagination={{
            el: '.certificates__dots',
            clickable: true,
            bulletClass: 'certificates__dot',
            bulletActiveClass: 'certificates__dot-active',
          }}
          loop={true}
          speed={500}
          className="certificates__swiper"
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id}>
              <CertificateCard cert={cert} onOpen={openPdfModal} />
            </SwiperSlide>
          ))}
            {certificates.map((cert) => (
            <SwiperSlide key={cert.id}>
              <CertificateCard cert={cert} onOpen={openPdfModal} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="certificates__controls">
          <button className="certificates__arrow certificates__arrow-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="certificates__dots"></div>
          <button className="certificates__arrow certificates__arrow-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {modal}
    </div>
  );
}