// src/Components/CertificatesSlider/CertificatesMobileSwiper.jsx
import React, { useState, useEffect, useRef } from 'react';
import CertificateCard from './CertificateCard';
import { certificates } from './certificatesData';

const AUTOPLAY_MS = 3500;
const SNAP_DURATION = 350; // мс анимации «магнита» к слайду

export default function CertificatesMobileSwiper() {
  const [flippedId, setFlippedId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const offsetRef = useRef(0);       // текущее смещение ленты в px
  const itemWidthRef = useRef(0);    // ширина одной карточки + gap
  const viewportWidthRef = useRef(0);

  // drag state
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const lastMoveXRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const dragVelocityRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // autoplay state
  const autoplayTimerRef = useRef(null);
  const autoplayEnabledRef = useRef(true); // выключается после первого ручного касания
  const flippedIdRef = useRef(null);

  // snap animation
  const snapRafRef = useRef(null);

  // ---------- центрирование текущего слайда ----------
  const getOffsetForIndex = (index) => {
    const itemW = itemWidthRef.current;
    const viewW = viewportWidthRef.current;
    if (!itemW || !viewW) return 0;
    // центрируем карточку index
    return viewW / 2 - itemW / 2 - index * itemW;
  };

  const setTrackOffset = (px) => {
    offsetRef.current = px;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${px}px, 0, 0)`;
    }
  };

  // ---------- измерение ----------
  const measure = () => {
    if (!viewportRef.current || !trackRef.current) return;
    viewportWidthRef.current = viewportRef.current.clientWidth;

    const firstItem = trackRef.current.children[0];
    if (firstItem) {
      // ширина карточки + gap (gap берём из computedStyle)
      const style = window.getComputedStyle(trackRef.current);
      const gap = parseFloat(style.columnGap || style.gap || '0') || 0;
      itemWidthRef.current = firstItem.getBoundingClientRect().width + gap;
    }

    // пересчитываем смещение под текущий activeIndex
    setTrackOffset(getOffsetForIndex(activeIndex));
  };

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  // ---------- snap к слайду ----------
  const snapToIndex = (index, animate = true) => {
    const target = getOffsetForIndex(index);
    const start = offsetRef.current;
    const delta = target - start;

    if (snapRafRef.current) cancelAnimationFrame(snapRafRef.current);

    if (!animate || Math.abs(delta) < 1) {
      setTrackOffset(target);
      return;
    }

    const startTime = performance.now();
    const step = (now) => {
      const t = Math.min((now - startTime) / SNAP_DURATION, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setTrackOffset(start + delta * eased);
      if (t < 1) {
        snapRafRef.current = requestAnimationFrame(step);
      } else {
        snapRafRef.current = null;
      }
    };
    snapRafRef.current = requestAnimationFrame(step);
  };

  // ---------- автопрокрутка ----------
  const startAutoplay = () => {
    stopAutoplay();
    if (!autoplayEnabledRef.current) return;
    if (flippedIdRef.current !== null) return; // открыт сертификат

    autoplayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % certificates.length;
        return next;
      });
    }, AUTOPLAY_MS);
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

  // activeIndex изменился → snap
  useEffect(() => {
    snapToIndex(activeIndex, true);
  }, [activeIndex]);

  // flippedId изменился → пауза/возобновление автопрокрутки
  useEffect(() => {
    flippedIdRef.current = flippedId;
    if (flippedId !== null) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flippedId]);

  // старт автопрокрутки при монтировании
  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---------- drag ----------
  const handlePointerDown = (e) => {
    if (e.button && e.button !== 0) return;

    isDraggingRef.current = true;
    hasDraggedRef.current = false;

    startXRef.current = e.clientX;
    startOffsetRef.current = offsetRef.current;
    lastMoveXRef.current = e.clientX;
    lastMoveTimeRef.current = performance.now();
    dragVelocityRef.current = 0;

    // отключаем автопрокрутку навсегда после первого касания
    autoplayEnabledRef.current = false;
    stopAutoplay();

    if (snapRafRef.current) {
      cancelAnimationFrame(snapRafRef.current);
      snapRafRef.current = null;
    }

    if (e.currentTarget.setPointerCapture) {
      try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
    }
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;

    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 5 && !hasDraggedRef.current) {
      hasDraggedRef.current = true;

      // если открыт сертификат — закрываем при свайпе
      if (flippedIdRef.current !== null) {
        setFlippedId(null);
      }
    }

    setTrackOffset(startOffsetRef.current + dx);

    const now = performance.now();
    const dt = now - lastMoveTimeRef.current;
    if (dt > 0) {
      const v = (e.clientX - lastMoveXRef.current) / dt;
      dragVelocityRef.current = dragVelocityRef.current * 0.7 + v * 0.3;
    }
    lastMoveXRef.current = e.clientX;
    lastMoveTimeRef.current = now;
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    // вычисляем, к какому слайду «магнититься»
    const itemW = itemWidthRef.current;
    if (!itemW) return;

    // текущий «виртуальный» индекс по смещению
    const viewW = viewportWidthRef.current;
    const rawIndex = (viewW / 2 - itemW / 2 - offsetRef.current) / itemW;

    // инерция свайпа: если скорость большая — сдвигаем индекс на 1 в нужную сторону
    const v = dragVelocityRef.current; // px/ms (положительная — свайп вправо)
    let targetIndex = Math.round(rawIndex);
    if (Math.abs(v) > 0.5) {
      // свайп вправо (v>0) → предыдущий слайд; влево (v<0) → следующий
      targetIndex = Math.round(rawIndex) + (v > 0 ? -1 : 1);
    }

    // ограничиваем
    if (targetIndex < 0) targetIndex = 0;
    if (targetIndex > certificates.length - 1) targetIndex = certificates.length - 1;

    if (targetIndex === activeIndex) {
      snapToIndex(targetIndex, true);
    } else {
      setActiveIndex(targetIndex);
    }
  };

  const handlePointerCancel = () => {
    isDraggingRef.current = false;
    snapToIndex(activeIndex, true);
  };

  // ---------- клик по карточке ----------
  const handleToggle = (cert) => {
    if (hasDraggedRef.current) return;
    setFlippedId((prev) => (prev === cert.id ? null : cert.id));
  };

  return (
    <div className="certificates certificates--mobile">
      <div className="certificates__container">
        <p className="certificates__title">Наши сертификаты</p>

        <div
          ref={viewportRef}
          className="certificates-mobile__viewport"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onPointerLeave={() => {
            if (isDraggingRef.current) handlePointerUp();
          }}
        >
          <div className="certificates-mobile__track" ref={trackRef}>
            {certificates.map((cert) => (
              <div className="certificates-mobile__item" key={cert.id}>
                <CertificateCard
                  cert={cert}
                  onToggle={handleToggle}
                  isFlipped={flippedId === cert.id}
                />
              </div>
            ))}
          </div>
        </div>

        {/* точки-индикаторы (необязательно) */}
        <div className="certificates-mobile__dots">
          {certificates.map((_, i) => (
            <span
              key={i}
              className={`certificates-mobile__dot ${i === activeIndex ? 'is-active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}