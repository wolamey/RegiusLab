// src/Components/CertificatesSlider/CertificateCard.jsx
import React from 'react';
import CertCover from './CertCover';

export default function CertificateCard({ cert, onToggle, isFlipped }) {
  return (
    <div
      className={`certificates__card ${isFlipped ? 'is-flipped' : ''}`}
      onClick={() => onToggle(cert)}
    >
      <div className="certificates__card-inner">
        <div className="certificates__card-face certificates__card-face--front">
          <CertCover />
          <div className="certificates__card-overlay">
            <p className="certificates__card-title">{cert.title}</p>
            <span className="certificates__card-btn">Посмотреть</span>
          </div>
        </div>

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