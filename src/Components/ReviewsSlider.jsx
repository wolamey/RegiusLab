// src/Components/ReviewsSlider/ReviewsSlider.jsx
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ReviewsSlider.scss';

// PDF файлы отзывов
import review1 from '../assets/review1.pdf';
import review2 from '../assets/review2.pdf';
import review3 from '../assets/review3.pdf';
import review4 from '../assets/review4.pdf';

// Превью (скриншоты PDF) для слайдов
import reviewPreview1 from '../assets/review-preview1.png';
import reviewPreview2 from '../assets/review-preview2.png';
import reviewPreview3 from '../assets/review-preview3.png';
import reviewPreview4 from '../assets/review-preview4.png';

const reviews = [
  {
    id: 1,
    title: 'Отзыв от FITPOINT',
    client: 'Анна Иванова',
    file: review1,
    preview: reviewPreview1,
  },
  {
    id: 2,
    title: 'Отзыв от Life',
    client: 'Сергей Петров',
    file: review2,
    preview: reviewPreview2,
  },
  {
    id: 3,
    title: 'Отзыв от КОМПАНИЯ 7',
    client: 'Мария Сидорова',
    file: review3,
    preview: reviewPreview3,
  },
  {
    id: 4,
    title: 'Отзыв от Active CLOUD',
    client: 'Дмитрий Козлов',
    file: review4,
    preview: reviewPreview4,
  },
  {
    id: 5,
    title: 'Отзыв от FITPOINT',
    client: 'Анна Иванова',
    file: review1,
    preview: reviewPreview1,
  },
  {
    id: 6,
    title: 'Отзыв от Life',
    client: 'Сергей Петров',
    file: review2,
    preview: reviewPreview2,
  },
  {
    id:7,
    title: 'Отзыв от КОМПАНИЯ 7',
    client: 'Мария Сидорова',
    file: review3,
    preview: reviewPreview3,
  },
  {
    id: 8,
    title: 'Отзыв от Active CLOUD',
    client: 'Дмитрий Козлов',
    file: review4,
    preview: reviewPreview4,
  },
];

export default function ReviewsSlider() {
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

  const renderSlides = () =>
    reviews.map((review) => (
      <SwiperSlide key={review.id}>
        <div
          className="reviews__slide"
          onClick={() => openPdfModal(review.file)}
        >
          <div className="reviews__slide-inner">
            <img
              src={review.preview}
              alt={review.title}
              className="reviews__slide-image"
            />
            <div className="reviews__slide-overlay">
              <p className="reviews__slide-title">{review.title}</p>
              {/* <p className="reviews__slide-client">{review.client}</p> */}
              <span className="reviews__slide-view">Нажмите для просмотра</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ));

  // Мобильная версия — 1 слайд
  if (isMobile) {
    return (
      <div className="reviews reviews--mobile">
        <div className="reviews__container">
          <p className="reviews__title">Отзывы клиентов</p>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: '.reviews__arrow-prev',
              nextEl: '.reviews__arrow-next',
            }}
            pagination={{
              el: '.reviews__dots',
              clickable: true,
              bulletClass: 'reviews__dot',
              bulletActiveClass: 'reviews__dot-active',
            }}
            loop={true}
            speed={500}
            className="reviews__swiper"
          >
            {renderSlides()}
          </Swiper>

          <div className="reviews__controls">
            <button className="reviews__arrow reviews__arrow-prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="reviews__dots"></div>
            <button className="reviews__arrow reviews__arrow-next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div className="reviews-modal" onClick={closePdfModal}>
            <div
              className="reviews-modal__content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="reviews-modal__close"
                onClick={closePdfModal}
              >
                ✕
              </button>
              <iframe
                src={selectedPdf}
                className="reviews-modal__iframe"
                title="Отзыв"
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Десктопная версия — 3 слайда
  return (
    <div className="reviews">
      <div className="reviews__container">
        <p className="reviews__title">Отзывы клиентов</p>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          navigation={{
            prevEl: '.reviews__arrow-prev',
            nextEl: '.reviews__arrow-next',
          }}
          pagination={{
            el: '.reviews__dots',
            clickable: true,
            bulletClass: 'reviews__dot',
            bulletActiveClass: 'reviews__dot-active',
          }}
          loop={true}
          speed={500}
          className="reviews__swiper"
        >
          {renderSlides()}
        </Swiper>

        <div className="reviews__controls">
          <button className="reviews__arrow reviews__arrow-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="reviews__dots"></div>
          <button className="reviews__arrow reviews__arrow-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="reviews-modal" onClick={closePdfModal}>
          <div
            className="reviews-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="reviews-modal__close"
              onClick={closePdfModal}
            >
              ✕
            </button>
            <iframe
              src={selectedPdf}
              className="reviews-modal__iframe"
              title="Отзыв"
            />
          </div>
        </div>
      )}
    </div>
  );
}