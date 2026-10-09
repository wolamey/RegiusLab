import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "section-theory",   label: "Что такое" },
  { id: "section-role",     label: "Роль в бизнесе" },
  { id: "section-when",     label: "Когда внедрять" },
  { id: "section-services", label: "Наши услуги" },
  { id: "section-cases",    label: "Кейсы" },
  { id: "section-why",      label: "Почему мы" },
];
export default function SectionNav() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);

      const offsets = SECTIONS.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: Infinity };
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <aside
      className={`section-nav ${visible ? "section-nav--visible" : ""} ${open ? "is-open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      aria-label="Навигация по разделам"
    >
      {/* Кнопка-триггер (виден всегда, когда блок свёрнут) */}
      <button
        type="button"
        className="section-nav__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Развернуть навигацию"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {/* Компас */}
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M15.5 8.5L13.5 13.5L8.5 15.5L10.5 10.5L15.5 8.5Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>

        {/* Мини-индикаторы активного раздела (видны только когда свёрнут) */}
        <span className="section-nav__mini-dots" aria-hidden="true">
    {/* Мини-индикаторы активного раздела (столбик полосок) */}
<span className="section-nav__mini-bars" aria-hidden="true">
  {SECTIONS.map((s) => (
    <span
      key={s.id}
      className={`section-nav__mini-bar ${active === s.id ? "is-active" : ""}`}
    />
  ))}
</span>
        </span>
      </button>

      {/* Выпадающий список (виден при наведении) */}
      <div className="section-nav__panel">
        <div className="section-nav__title">Навигация</div>
        <ul className="section-nav__list">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                className={`section-nav__item ${active === s.id ? "is-active" : ""}`}
                onClick={() => scrollTo(s.id)}
                type="button"
              >
                <span className="section-nav__dot" />
                <span className="section-nav__label">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}