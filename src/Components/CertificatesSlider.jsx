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

export default function CertificatesSlider() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closePdfModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

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
                <div
                  className="certificates__slide"
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
              </SwiperSlide>
            ))}
               {certificates.map((cert) => (
              <SwiperSlide key={cert.id}>
                <div
                  className="certificates__slide"
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
              <div
                className="certificates__slide"
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
            </SwiperSlide>
          ))}
                 {certificates.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div
                className="certificates__slide"
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