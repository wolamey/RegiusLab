import React, { useEffect, useRef, useState } from "react";
import { ICONS } from "./icons";
import "./RoleWhenBlocks.scss";

/* ============================================================
   Уникальный подбор иконки по смыслу заголовка.
   Каждому тексту — своя иконка (без повторов внутри блока).
   ============================================================ */
const RULES = [
  [/\bрутин[аеы]\b|перегружен|освобожда/i, "routine"],
  [/точност|ошибк/i, "precision"],
  [/прогноз|управлять ресурсами|ресурс/i, "forecast"],
  [/увелич.*продаж|повыш.*продаж|раст.*продаж|\bпродажи\b|рост.*продаж/i, "sales"],
  [/удержан|retention/i, "retention"],
  [/сервис|поддержк/i, "service"],
  [/бот|робот/i, "robot"],
  [/затрат|стоимост|дешевл|снижен.*затр/i, "costDown"],
  [/вовлеч/i, "engagement"],
  [/задач|координац/i, "tasks"],
  [/документ|теря|утрат|утечк/i, "lostData"],
  [/интеграц|связ[аи]н|разрознен|другими системами/i, "integrate"],
  [/рынк|аудитори|глобальн/i, "market"],
  [/взаимодейств|ответ|быстрых|общени|переписк|мессенджер/i, "interact"],
  [/покупк|конверси|лидов|потеря.*клиент/i, "buy"],
  [/бренд|имидж|репутаци/i, "brand"],
  [/команд|сотрудник|персонал|люд/i, "team"],
  [/воронк/i, "funnel"],
  [/повторн/i, "repeatSales"],
  [/аналитик|отчетн|отчётн|дашборд/i, "analytics"],
  [/контроль|контролир|прозрачн|вид(еть|но)/i, "control"],
  [/автоматизац/i, "automation"],
  [/масштаб|поддерживает рост|не поддерживает|ограничен/i, "growthLimit"],
  [/обновл|долго загружается|тормоз|скорост/i, "slow"],
  [/напоминан|забыва/i, "forget"],
  [/склад/i, "warehouse"],
  [/бухгалтер|учет|учёт/i, "accounting"],
  [/мобильн/i, "mobile"],
  [/доступ/i, "access"],
  [/облачн|cloud/i, "cloud"],
  [/законодательств|стандарт|норматив|требован|соответств/i, "compliance"],
  [/конфиденц|данных|персональных/i, "protectData"],
  [/угроз|атак|инцидент|взлом/i, "threat"],
  [/информаци|знани|нет данных|доступ к информ/i, "info"],
  [/сайты?|лендинг|страниц/i, "dashboard"],
];

/* Эвристический подбор; если совпадение уже использовано —
   берём следующее подходящее, иначе запасную уникальную иконку. */
function pickIcon(title, usedSet, fallbackPool) {
  const t = String(title || "");
  for (const [re, name] of RULES) {
    if (re.test(t)) {
      if (!usedSet.has(name) && ICONS[name]) {
        usedSet.add(name);
        return name;
      }
    }
  }
  // свободная иконка из общего пула — гарантируем отсутствие повторов
  for (const name of fallbackPool) {
    if (!usedSet.has(name)) {
      usedSet.add(name);
      return name;
    }
  }
  return null;
}

export function RwbIcon({ name, size = 24 }) {
  if (!name || !ICONS[name]) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

/* Появление карточек при скролле (IntersectionObserver, без библиотек) */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

function RoleWhenSection({ currentInfo, onConsult, showButton }) {
  const [gridRef, visible] = useReveal();

  const roleItems = currentInfo?.["role-wrapper"] || [];
  const whenItems = currentInfo?.when || [];

  /* Иконки подбираем один раз на рендер блока, следим за уникальностью */
  const used = new Set();
  const pool = Object.keys(ICONS);
  const roleIcons = roleItems.map((r) => pickIcon(r["role-item-title"], used, pool));
  const whenIcons = whenItems.map((w) => pickIcon(w.title, used, pool));

  return (
    <>
      {/* ============ РОЛЬ В БИЗНЕСЕ ============ */}
      <section id="section-role" className="rwb rwb--role">
        <h2 className="rwb__title">{currentInfo?.["role-title"]}</h2>
        <div
          ref={gridRef}
          className={`rwb__grid rwb__grid--role${visible ? " is-visible" : ""}`}
        >
          {roleItems.map((role, index) => (
            <div
              className="rwb__card rwb__card--role"
              key={index}
              style={{ "--d": `${index * 70}ms` }}
            >
              <span className="rwb__icon">
                <RwbIcon name={roleIcons[index]} />
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
        <WhenGrid
          title={currentInfo?.["when-title"]}
          items={whenItems}
          icons={whenIcons}
        />
      </section>
    </>
  );
}

function WhenGrid({ title, items, icons }) {
  const [gridRef, visible] = useReveal();
  return (
    <>
      <h2 className="rwb__title">{title}</h2>
      <div
        ref={gridRef}
        className={`rwb__grid rwb__grid--when${visible ? " is-visible" : ""}`}
      >
        {items.map((when, index) => (
          <article
            className="rwb__card rwb__card--when"
            key={index}
            style={{ "--d": `${index * 60}ms` }}
          >
            <span className="rwb__num">{String(index + 1).padStart(2, "0")}</span>
            <header className="rwb__card-top">
              <span className="rwb__icon">
                <RwbIcon name={icons[index]} />
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
    </>
  );
}

export default function RoleWhenBlocks({
  currentInfo,
  onConsult,
  showButton = true,
}) {
  return <RoleWhenSection currentInfo={currentInfo} onConsult={onConsult} showButton={showButton} />;
}
