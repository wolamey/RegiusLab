// src/Components/CertificatesSlider/CertificatesMarquee.jsx
import React, { useEffect, useRef, useState } from 'react';
import CertificateCard from './CertificateCard';
import { certificates } from './certificatesData';

export default function CertificatesMarquee({ isMobile }) {
  const [flippedId, setFlippedId] = useState(null);

  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(0);
  const targetSpeedRef = useRef(0);
  const lastTimeRef = useRef(0);
  const halfWidthRef = useRef(0);
  const flippedIdRef = useRef(null);

  // drag state (используется только на мобилке)
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const lastMoveXRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const dragVelocityRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  const BASE_SPEED = isMobile ? 0.04 : 0.05;

  // синхронизация flippedId → ref + пауза/возобновление
  useEffect(() => {
    flippedIdRef.current = flippedId;
    if (flippedId !== null) {
      targetSpeedRef.current = 0;
    } else {
      targetSpeedRef.current = BASE_SPEED;
    }
  }, [flippedId, BASE_SPEED]);

  // измерение половины ленты
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      halfWidthRef.current = trackRef.current.scrollWidth / 2;
    };
    const id = requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', measure);
    };
  }, [isMobile]);

  // анимационный цикл
  useEffect(() => {
    const tick = (time) => {
      const last = lastTimeRef.current || time;
      const dt = Math.min(time - last, 50);
      lastTimeRef.current = time;

      const target = flippedIdRef.current !== null ? 0 : targetSpeedRef.current;
      const cur = speedRef.current;
      const ease = 0.008 * dt;
      speedRef.current = cur + (target - cur) * Math.min(ease, 1);

      offsetRef.current -= speedRef.current * dt;

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

  /* ---------- Hover-пауза (только десктоп) ---------- */
  const handleMouseEnter = () => {
    if (isMobile) return;
    if (flippedIdRef.current !== null) return;
    targetSpeedRef.current = 0;
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    if (flippedIdRef.current !== null) return;
    targetSpeedRef.current = BASE_SPEED;
  };

  /* ---------- Drag (только мобилка) ---------- */
  const handlePointerDown = (e) => {
    if (!isMobile) return;
    if (e.button && e.button !== 0) return;

    isDraggingRef.current = true;
    hasDraggedRef.current = false;

    startXRef.current = e.clientX;
    startOffsetRef.current = offsetRef.current;
    lastMoveXRef.current = e.clientX;
    lastMoveTimeRef.current = performance.now();
    dragVelocityRef.current = 0;

    targetSpeedRef.current = 0;

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }

    if (e.currentTarget.setPointerCapture) {
      try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
    }
  };

  const handlePointerMove = (e) => {
    if (!isMobile) return;
    if (!isDraggingRef.current) return;

    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 5 && !hasDraggedRef.current) {
      hasDraggedRef.current = true;

      if (flippedIdRef.current !== null) {
        setFlippedId(null);
      }
    }

    offsetRef.current = startOffsetRef.current + dx;

    const half = halfWidthRef.current;
    if (half > 0) {
      offsetRef.current = offsetRef.current % half;
      if (offsetRef.current > 0) offsetRef.current -= half;
    }

    const now = performance.now();
    const dt = now - lastMoveTimeRef.current;
    if (dt > 0) {
      const v = (e.clientX - lastMoveXRef.current) / dt;
      dragVelocityRef.current = dragVelocityRef.current * 0.7 + v * 0.3;
    }
    lastMoveXRef.current = e.clientX;
    lastMoveTimeRef.current = now;

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  };

  const handlePointerUp = () => {
    if (!isMobile) return;
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const v = -dragVelocityRef.current;
    speedRef.current = Math.max(-2, Math.min(2, v));

    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      if (flippedIdRef.current === null) {
        targetSpeedRef.current = BASE_SPEED;
      }
    }, 400);
  };

  const handlePointerCancel = () => {
    if (!isMobile) return;
    isDraggingRef.current = false;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      if (flippedIdRef.current === null) {
        targetSpeedRef.current = BASE_SPEED;
      }
    }, 200);
  };

  // Клик по карточке.
  // На десктопе drag не работает → hasDraggedRef всегда false → клик всегда проходит.
  // На мобилке проверяем, был ли реальный свайп.
  const handleToggle = (cert) => {
    if (isMobile && hasDraggedRef.current) return;
    setFlippedId((prev) => (prev === cert.id ? null : cert.id));
  };

  const copies = isMobile ? 2 : 4;
  const loopItems = Array.from({ length: copies }).flatMap(() => certificates);

  return (
    <div className={`certificates ${isMobile ? 'certificates--mobile' : 'certificates--desktop'}`}>
      <div className="certificates__container">
        <p className="certificates__title">Наши сертификаты</p>

        <div
          className="certificates__viewport"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onPointerDown={isMobile ? handlePointerDown : undefined}
          onPointerMove={isMobile ? handlePointerMove : undefined}
          onPointerUp={isMobile ? handlePointerUp : undefined}
          onPointerCancel={isMobile ? handlePointerCancel : undefined}
          onPointerLeave={isMobile ? () => {
            if (isDraggingRef.current) handlePointerUp();
          } : undefined}
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