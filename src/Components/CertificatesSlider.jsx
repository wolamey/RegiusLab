// src/Components/CertificatesSlider/CertificatesSlider.jsx
import React, { useState, useEffect } from 'react';
import CertificatesMarquee from './CertificatesMarquee';
import './CertificatesSlider.scss';

export default function CertificatesSlider() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <CertificatesMarquee isMobile={isMobile} />;
}