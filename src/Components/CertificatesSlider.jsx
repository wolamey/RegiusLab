// src/Components/CertificatesSlider/CertificatesSlider.jsx
import React, { useState, useRef, useEffect } from 'react';
import './CertificatesSlider.scss';
import arrowDownImg from '../assets/arrow-down-right.png';

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
    title: 'Сертификат качества 2024',
    file: cert1,
    preview: certPreview1,
  },
  {
    id: 2,
    title: 'Сертификат соответствия',
    file: cert2,
    preview: certPreview2,
  },
  {
    id: 3,
    title: 'Лицензия на деятельность',
    file: cert3,
    preview: certPreview3,
  },
  {
    id: 4,
    title: 'Сертификат партнера',
    file: cert4,
    preview: certPreview4,
  },
    {
    id: 5,
    title: 'Сертификат партнера',
    file: cert5,
    preview: certPreview5,
  },
];

export default function CertificatesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = certificates.length;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const openPdfModal = (pdfFile) => {
    setSelectedPdf(pdfFile);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePdfModal = () => {
    setIsModalOpen(false);
    setSelectedPdf(null);
    document.body.style.overflow = 'auto';
  };

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closePdfModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  // Для мобильной версии показываем все сертификаты в виде сетки
  if (isMobile) {
    return (
      <div className="certificates-mobile">
        <p className="certificates__title">Наши сертификаты</p>
        <div className="certificates-mobile__grid">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="certificates-mobile__item"
              onClick={() => openPdfModal(cert.file)}
            >
              <div className="certificates-mobile__image-wrapper">
                <img
                  src={cert.preview}
                  alt={cert.title}
                  className="certificates-mobile__image"
                />
                <div className="certificates-mobile__overlay">
                  <p className="certificates-mobile__view-text">Просмотреть</p>
                </div>
              </div>
              <p className="certificates-mobile__item-title">{cert.title}</p>
            </div>
          ))}
        </div>

        {/* Модальное окно для PDF */}
        {isModalOpen && (
          <div className="certificates-modal" onClick={closePdfModal}>
            <div
              className="certificates-modal__content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="certificates-modal__close"
                onClick={closePdfModal}
              >
                ✕
              </button>
              <iframe
                src={selectedPdf}
                className="certificates-modal__iframe"
                title="Сертификат"
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Десктопная версия - слайдер
  return (
    <div className="certificates">
      <div className="certificates__container">
        <p className="certificates__title">Наши сертификаты</p>

        <div className="certificates__slider-wrapper">
          <button className="certificates__arrow certificates__arrow-prev" onClick={goToPrev}>
            <img src={arrowDownImg} alt="Назад" />
          </button>

          <div className="certificates__slider" ref={sliderRef}>
            {certificates.map((cert, index) => {
              let position = index - currentIndex;
              if (position < -1) position += totalSlides;
              if (position > 1) position -= totalSlides;

              let className = 'certificates__slide';
              if (position === 0) className += ' certificates__slide-active';
              else if (position === -1 || position === 1) className += ' certificates__slide-adjacent';
              else className += ' certificates__slide-hidden';

              return (
                <div
                  key={cert.id}
                  className={className}
                  onClick={() => openPdfModal(cert.file)}
                >
                  <div className="certificates__slide-inner">
                    <img
                      src={cert.preview}
                      alt={cert.title}
                      className="certificates__slide-image"
                    />
                    <div className="certificates__slide-overlay">
                      <p className="certificates__slide-title">{cert.title}</p>
                      <span className="certificates__slide-view">Нажмите для просмотра</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="certificates__arrow certificates__arrow-next" onClick={goToNext}>
            <img src={arrowDownImg} alt="Вперед" />
          </button>
        </div>

        <div className="certificates__dots">
          {certificates.map((_, index) => (
            <button
              key={index}
              className={`certificates__dot ${index === currentIndex ? 'certificates__dot-active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Модальное окно для PDF */}
      {isModalOpen && (
        <div className="certificates-modal" onClick={closePdfModal}>
          <div
            className="certificates-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="certificates-modal__close"
              onClick={closePdfModal}
            >
              ✕
            </button>
            <iframe
              src={selectedPdf}
              className="certificates-modal__iframe"
              title="Сертификат"
            />
          </div>
        </div>
      )}
    </div>
  );
}