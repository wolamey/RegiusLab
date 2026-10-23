import React from "react";
import "./RoleWhenBlocks.scss";

/* Единый набор SVG-иконок в одном стиле (stroke, currentColor). */
const ICON_PATHS = [
  // 0: рост / эффективность
  <path key="growth" d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6M3 21h18" />,
  // 1: связь с клиентами (диалог)
  <path
    key="chat"
    d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8zM8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"
  />,
  // 2: автоматизация (шестерёнка)
  <path
    key="gear"
    d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.5-2.3 1a7 7 0 0 0-2.1-1.2L14.2 3h-4.4l-.3 2.6a7 7 0 0 0-2.1 1.2l-2.3-1-2 3.5 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.5 2.3-1a7 7 0 0 0 2.1 1.2l.3 2.6h4.4l.3-2.6a7 7 0 0 0 2.1-1.2l2.3 1 2-3.5-2-1.5c.1-.4.1-.8.1-1.2z"
  />,
  // 3: аналитика (диаграмма)
  <path key="chart" d="M4 20V10M10 20V4M16 20v-8M22 20H2" />,
  // 4: мишень / фокус
  <path
    key="target"
    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
  />,
  // 5: щит / безопасность
  <path
    key="shield"
    d="M12 3l8 3v6c0 4.5-3.5 7.5-8 9-4.5-1.5-8-4.5-8-9V6l8-3zM9 12l2 2 4-4"
  />,
  // 6: молния / скорость
  <path key="bolt" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  // 7: интеграции (кубы)
  <path
    key="puzzle"
    d="M4 4h6v6H4V4zM14 4h6v6h-6V4zM4 14h6v6H4v-6zM14 14h6v6h-6v-6zM10 7h4M7 10v4M17 10v4M10 17h4"
  />,
  // 8: люди / команда
  <path
    key="users"
    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
  />,
  // 9: уведомления / напоминания
  <path
    key="bell"
    d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9zM10.3 21a1.94 1.94 0 0 0 3.4 0"
  />,
  // 10: база данных
  <path
    key="db"
    d="M12 8c4.97 0 9-1.34 9-3s-4.03-3-9-3-9 1.34-9 3 4.03 3 9 3zM21 5v14c0 1.66-4.03 3-9 3s-9-1.34-9-3V5M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3"
  />,
];

export function RoleIcon({ index = 0, size = 26 }) {
  const i = ((index % ICON_PATHS.length) + ICON_PATHS.length) % ICON_PATHS.length;
  return (
    <svg
      className="rwb-icon-svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICON_PATHS[i]}
    </svg>
  );
}

/* Подбор иконки по смыслу заголовка when-карточки */
function pickWhenIcon(title = "", fallbackIndex = 0) {
  const t = title.toLowerCase();
  if (/теря|переписк|мессенджер/.test(t)) return 1; // чат
  if (/прозрачн|дашборд|вид(еть|но)|контроль/.test(t)) return 3; // аналитика
  if (/забыва|напоминан|клиент/.test(t)) return 9; // колокольчик
  if (/разрознен|интеграц|связан|1с|1c/.test(t)) return 7; // интеграции
  if (/автоматизац|робот|скорост|быстр/.test(t)) return 6; // молния
  if (/безопас|защит|утечк/.test(t)) return 5; // щит
  if (/рост|масштаб|эффективн/.test(t)) return 0; // рост
  return fallbackIndex % 4 === 0 ? 4 : fallbackIndex % ICON_PATHS.length;
}

export default function RoleWhenBlocks({
  currentInfo,
  onConsult,
  showButton = true,
}) {
  const roleItems = currentInfo?.["role-wrapper"] || [];
  const whenItems = currentInfo?.when || [];

  return (
    <>
      {/* ============ РОЛЬ В БИЗНЕСЕ ============ */}
      <section id="section-role" className="rwb rwb--role">
        <h2 className="rwb__title">{currentInfo?.["role-title"]}</h2>
        <div className="rwb__grid rwb__grid--role">
          {roleItems.map((role, index) => (
            <div className="rwb__card rwb__card--role" key={index}>
              <span className="rwb__icon rwb__icon--role">
                <RoleIcon index={index} />
              </span>
              <p className="rwb__card-text">{role["role-item-title"]}</p>
            </div>
          ))}
        </div>
        {showButton && (
          <button
            onClick={onConsult}
            className="rwb__button flare-button"
            type="button"
          >
            получить бесплатную консультацию
          </button>
        )}
      </section>

      {/* ============ КОГДА ВНЕДРЯТЬ ============ */}
      <section id="section-when" className="rwb rwb--when">
        <h2 className="rwb__title">{currentInfo?.["when-title"]}</h2>
        <div className="rwb__grid rwb__grid--when">
          {whenItems.map((when, index) => (
            <article className="rwb__card rwb__card--when" key={index}>
              <header className="rwb__card-top">
                <span className="rwb__icon">
                  <RoleIcon index={pickWhenIcon(when.title, index)} />
                </span>
                <h3 className="rwb__card-title">{when.title}</h3>
              </header>
              <p className="rwb__card-desc">
                {(when.description || []).map((text, i) => (
                  <span key={i} className={i === 1 ? "rwb__hl" : undefined}>
                    {text}{" "}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
