import { useEffect, useRef, useState } from 'react';
import './Clients.scss';

import stack1 from '../../assets/client1.png';
import stack2 from '../../assets/client2.svg';
import stack3 from '../../assets/client3.png';
import stack5 from '../../assets/client5.png';
import stack6 from '../../assets/client6.svg';
import stack7 from '../../assets/client7.svg';
import stack8 from '../../assets/client8.jpg';
import stack9 from '../../assets/client9.svg';
import stack10 from '../../assets/client10.svg';
import stack11 from '../../assets/client11.svg';
import stack12 from '../../assets/client12.svg';

const clients = [stack1, stack2, stack3, stack5, stack6, stack7, stack8, stack9, stack10, stack11, stack12];

// один непрерывный список: оригинал + точная копия
const items = [...clients, ...clients];

const SPEED = 60; // px/сек

const Clients = () => {
  const listRef = useRef(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const [ready, setReady] = useState(false);

  // 1. ждём загрузки ВСЕХ картинок, потом меряем половину ширины списка
  useEffect(() => {
    const list = listRef.current;
    const imgs = Array.from(list.querySelectorAll('img'));

    const measure = () => {
      // ширина всего списка (оригинал + копия) делённая на 2
      halfWidthRef.current = list.scrollWidth / 2;
      setReady(true);
    };

    const promises = imgs.map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise((res) => {
            img.addEventListener('load', res, { once: true });
            img.addEventListener('error', res, { once: true });
          })
    );

    Promise.all(promises).then(measure);

    // держим ширину актуальной при ресайзе / смене брейкпоинтов
    const ro = new ResizeObserver(() => {
      halfWidthRef.current = list.scrollWidth / 2;
    });
    ro.observe(list);

    return () => ro.disconnect();
  }, []);

  // 2. сама анимация — стартует только когда ширина уже известна
  useEffect(() => {
    if (!ready) return;
    const list = listRef.current;

    const tick = (time) => {
      if (lastTimeRef.current == null) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const half = halfWidthRef.current;
      if (half > 0) {
        let next = offsetRef.current - SPEED * dt;
        // модульная перемотка — работает всегда корректно, без "рывка назад"
        if (next <= -half) next += half;
        offsetRef.current = next;
        list.style.transform = `translate3d(${next}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [ready]);

  return (
    <div className="marquee2">
      <ul className="marquee-content2" ref={listRef} style={{ opacity: ready ? 1 : 0 }}>
        {items.map((src, i) => (
          <li key={i} aria-hidden={i >= clients.length}>
            <img src={src} alt="" className="fab2" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;