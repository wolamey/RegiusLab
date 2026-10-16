// src/Components/CertificatesSlider/CertificatesSlider.jsx
import React, { useState, useEffect, useRef } from 'react';
import './CertificatesSlider.scss';

// Превью-картинки сертификатов
import certPreview1 from '../assets/cert-preview1.png';
import certPreview2 from '../assets/cert-preview2.png';
import certPreview3 from '../assets/cert-preview3.png';
import certPreview4 from '../assets/cert-preview4.png';
import certPreview5 from '../assets/cert-preview5.png';

const certificates = [
  { id: 1, title: 'Сертификат соответствия', preview: certPreview1 },
  { id: 2, title: 'Сертификат о присвоении компетенции "Коробочная версия"', preview: certPreview2 },
  { id: 3, title: 'Сертификат "Золотой партнер"', preview: certPreview3 },
  { id: 4, title: 'Сертификат о присвоении компетенции "Автоматизация"', preview: certPreview4 },
  { id: 5, title: 'Сертификат о присвоении компетенции "CRM"', preview: certPreview5 },
];

/* ---------- Лицевая сторона (SVG-обложка) ---------- */
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

      <rect x="14" y="14" width="272" height="372" rx="16" ry="16"
        fill="none" stroke="url(#goldSoft)" strokeWidth="1.2" opacity="0.7" />
      <rect x="22" y="22" width="256" height="356" rx="12" ry="12"
        fill="none" stroke="url(#goldSoft)" strokeWidth="0.6" opacity="0.4" />

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

      <path d="M110 232 L150 260 L190 232 L190 300 L150 276 L110 300 Z"
        fill="url(#goldSoft)" opacity="0.9" />
      <path d="M110 232 L150 260 L190 232"
        fill="none" stroke="#7a5410" strokeWidth="1" />

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

/* ---------- Карточка с переворотом ---------- */
function CertificateCard({ cert, onToggle, isFlipped }) {
  return (
    <div
      className={`certificates__card ${isFlipped ? 'is-flipped' : ''}`}
      onClick={() => onToggle(cert)}
    >
      <div className="certificates__card-inner">
        {/* Лицевая сторона */}
        <div className="certificates__card-face certificates__card-face--front">
          <CertCover />
          <div className="certificates__card-overlay">
            <p className="certificates__card-title">{cert.title}</p>
            <span className="certificates__card-btn">Посмотреть</span>
          </div>
        </div>

        {/* Обратная сторона — картинка-превью */}
        <div className="certificates__card-face certificates__card-face--back">
          <img
            src={cert.preview}
            alt={cert.title}
            className="certificates__card-preview"
            draggable={false}
          />
          <div className="certificates__card-overlay certificates__card-overlay--back">
            <p className="certificates__card-title certificates__card-title--back">
              {cert.title}
            </p>
            <span className="certificates__card-btn certificates__card-btn--back">
              Вернуться
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Основной компонент ---------- */
export default function CertificatesSlider() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  const [flippedId, setFlippedId] = useState(null);

  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const offsetRef = useRef(0);     // текущее смещение в px
  const speedRef = useRef(0);      // текущая скорость px/ms
  const targetSpeedRef = useRef(0); // целевая скорость (0 при hover, базовая иначе)
  const lastTimeRef = useRef(0);
  const hoverRef = useRef(false);
  const halfWidthRef = useRef(0);

  // базовая скорость ленты (px/ms). 0.05 ≈ 50px в секунду
const BASE_SPEED = 0.05;


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Пересчёт ширины половины ленты (одного набора карточек) для бесшовного цикла
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      // первая половина трека (оригинальные слайды)
      const firstHalf = trackRef.current.children[0];
      if (!firstHalf) return;
      const total = trackRef.current.scrollWidth;
      halfWidthRef.current = total / 2;
    };
    // даём браузеру отрисовать, потом меряем
    const id = requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', measure);
    };
  }, [isMobile]);

  // Анимационный цикл
 // Анимационный цикл
useEffect(() => {
  const tick = (time) => {
    const last = lastTimeRef.current || time;
    // ограничиваем dt, чтобы после фоновой вкладки не было скачка
    const dt = Math.min(time - last, 50);
    lastTimeRef.current = time;

    const target = targetSpeedRef.current;
    const cur = speedRef.current;

    const ease = 0.008 * dt;
    speedRef.current = cur + (target - cur) * Math.min(ease, 1);

    // двигаем ленту
    offsetRef.current -= speedRef.current * dt;

    // бесшовный цикл без скачков на границе
    const half = halfWidthRef.current;
    if (half > 0) {
      offsetRef.current = offsetRef.current % half;
      if (offsetRef.current > 0) offsetRef.current -= half;
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }

    rafRef.current = requestAnimationFrame(tick);
  };

  rafRef.current = requestAnimationFrame(tick);
  return () => {
    cancelAnimationFrame(rafRef.current);
    lastTimeRef.current = 0;
  };
}, []);

  // Наведение — плавно тормозим/разгоняем
  const handleMouseEnter = () => {
    hoverRef.current = true;
    targetSpeedRef.current = 0;
  };
  const handleMouseLeave = () => {
    hoverRef.current = false;
    targetSpeedRef.current = BASE_SPEED;
  };

  // Стартовая целевая скорость
  useEffect(() => {
    targetSpeedRef.current = BASE_SPEED;
  }, []);

  const handleToggle = (cert) => {
    setFlippedId((prev) => (prev === cert.id ? null : cert.id));
  };

  // Дублируем массив, чтобы лента была бесконечной
  const loopItems = [...certificates, ...certificates,...certificates,...certificates];

  return (
    <div className={`certificates ${isMobile ? 'certificates--mobile' : ''}`}>
      <div className="certificates__container">
        <p className="certificates__title">Наши сертификаты</p>

        <div
          className="certificates__viewport"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="certificates__track" ref={trackRef}>
            {loopItems.map((cert, idx) => (
              <div className="certificates__item" key={`${cert.id}-${idx}`}>
                <CertificateCard
                  cert={cert}
                  onToggle={handleToggle}
                  isFlipped={flippedId === cert.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}