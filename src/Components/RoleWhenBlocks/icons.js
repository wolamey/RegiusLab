/* ============================================================
   Единый набор SVG-иконок для блоков «Роль» и «Когда внедрять».
   Стиль: тонкий контур (stroke 1.7), скруглённые концы, сетка 24px.
   Каждая иконка уникальна — подбирается по смыслу заголовка.
   ============================================================ */

export const ICONS = {
  /* --- общие бизнес-смыслы --- */
  routine: (
    <path d="M3 12a9 9 0 1 0 9-9M3 12v-4m0 4h4M12 8v4l2.5 1.5" />
  ),
  precision: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  forecast: (
    <>
      <path d="M3 15c3-6 6-9 9-9s6 3 9 9" />
      <path d="M3 19h18" />
      <path d="M12 6V3M17 8l1.5-1.5M7 8L5.5 6.5" />
    </>
  ),
  sales: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
      <path d="M3 21h18" />
    </>
  ),
  retention: (
    <>
      <path d="M12 21C7 17.5 4 14 4 10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 4-3 7.5-8 11z" />
      <path d="M9.5 10.5l1.8 1.8 3.4-3.4" />
    </>
  ),
  service: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M4 13v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H4zM20 13v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3z" />
    </>
  ),
  robot: (
    <>
      <rect x="5" y="8" width="14" height="10" rx="2.5" />
      <path d="M12 8V4M9 4h6" />
      <circle cx="9.5" cy="12.5" r=".8" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="12.5" r=".8" fill="currentColor" stroke="none" />
      <path d="M9.5 15.5h5" />
    </>
  ),
  costDown: (
    <>
      <path d="M3 7l6 6 4-4 8 8" />
      <path d="M21 13v4h-4" />
      <path d="M3 3v4M3 3h4" opacity=".55" />
    </>
  ),
  engagement: (
    <>
      <path d="M12 21C7 17.5 4 14 4 10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 4-3 7.5-8 11z" />
      <path d="M12 8.5v4M10 10.5h4" />
    </>
  ),
  resources: (
    <>
      <path d="M4 18V10M10 18V4M16 18v-6M22 18H2" />
      <path d="M4 10l6-6 6 6" opacity=".55" />
    </>
  ),
  tasks: (
    <>
      <path d="M9 6h11M9 12h11M9 18h11" />
      <path d="M3.5 6l1.3 1.3L7 5M3.5 12l1.3 1.3L7 11M3.5 18l1.3 1.3L7 17" />
    </>
  ),
  accuracy: (
    <>
      <path d="M5 3h11l3 3v15H5z" />
      <path d="M9 13l2 2 4-4" />
    </>
  ),
  integrate: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M14 6.5h3.5A2.5 2.5 0 0 1 20 9v3.5M10 17.5H6.5A2.5 2.5 0 0 1 4 15v-3.5" />
    </>
  ),
  market: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </>
  ),
  interact: (
    <>
      <path d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
    </>
  ),
  buy: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
      <path d="M3 4h2l2.6 12h9.8L21 8H6" />
    </>
  ),
  brand: (
    <>
      <path d="M12 3l2.3 4.9 5.2.6-3.9 3.6 1.1 5.2L12 14.7 7.3 17.3l1.1-5.2L4.5 8.5l5.2-.6z" />
      <path d="M12 21v-2" opacity=".55" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M17.5 14.4A6.5 6.5 0 0 1 21.5 20" />
    </>
  ),
  funnel: (
    <path d="M3 4h18l-6.5 8v6l-5 2.5V12z" />
  ),
  repeatSales: (
    <>
      <path d="M20 11a8 8 0 1 0-2.3 6.3" />
      <path d="M21 5v6h-6" opacity=".55" />
      <path d="M12 8v4l3 1.5" opacity=".55" />
    </>
  ),
  analytics: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
      <circle cx="16" cy="8" r="2" opacity=".55" />
    </>
  ),
  /* --- кибербезопасность / данные --- */
  protectData: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.5 7.5-8 9-4.5-1.5-8-4.5-8-9V6z" />
      <path d="M9 11.5h6M9 14.5h4" opacity=".7" />
    </>
  ),
  leak: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.5 7.5-8 9-4.5-1.5-8-4.5-8-9V6z" />
      <path d="M12 8v4M12 15h.01" />
    </>
  ),
  compliance: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 14l2 2 4-4" />
    </>
  ),
  threat: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5M12 15h.01" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18a4.5 4.5 0 0 1-.4-9A6 6 0 0 1 18 9.6 3.5 3.5 0 0 1 17.5 18z" />
      <path d="M9 14l2 2 4-4" opacity=".55" />
    </>
  ),
  access: (
    <>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 7.5-2" />
      <path d="M12 14v2.5" />
    </>
  ),
  incident: (
    <>
      <path d="M12 4l9 16H3z" />
      <path d="M12 10v4M12 17h.01" />
    </>
  ),
  attacks: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.5 7.5-8 9-4.5-1.5-8-4.5-8-9V6z" />
      <path d="M8.5 12l2 2 5-5" />
    </>
  ),
  /* --- проблемы / «когда» --- */
  overload: (
    <>
      <path d="M12 4v9M8.5 7.5 12 4l3.5 3.5" transform="rotate(180 12 8)" opacity=".55" />
      <rect x="4" y="13" width="16" height="7" rx="2" />
      <path d="M8 16.5h8" />
    </>
  ),
  lostData: (
    <>
      <path d="M12 8c4.97 0 9-1.34 9-3s-4.03-3-9-3-9 1.34-9 3 4.03 3 9 3z" opacity=".55" />
      <path d="M21 5v6M3 5v6c0 1.66 4.03 3 9 3" />
      <path d="M16 18l6 6M22 18l-6 6" />
    </>
  ),
  slow: (
    <>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2.5" />
      <path d="M9 2h6" opacity=".55" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="5" rx="1.5" />
      <rect x="13" y="10" width="8" height="11" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
    </>
  ),
  forget: (
    <>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9z" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      <path d="M9.5 6.5l5 5M14.5 6.5l-5 5" opacity=".7" />
    </>
  ),
  scattered: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <circle cx="17.5" cy="6.5" r="3" />
      <path d="M6.5 14v7" strokeDasharray="2 2.5" />
    </>
  ),
  control: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.5 7.5-8 9-4.5-1.5-8-4.5-8-9V6z" opacity=".55" />
      <path d="M7 12h10M12 7v10" opacity=".4" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  automation: (
    <>
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </>
  ),
  growthLimit: (
    <>
      <path d="M3 20h18" />
      <path d="M6 20v-6M11 20v-9M16 20v-4" />
      <path d="M16 11l4-6M20 5h-4M20 5v4" />
    </>
  ),
  update: (
    <>
      <path d="M20 11A8 8 0 1 0 18.5 15" />
      <path d="M21 5v6h-6" />
      <path d="M12 8v4l3 2" opacity=".55" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  warehouse: (
    <>
      <path d="M3 21V9l9-5 9 5v12" />
      <path d="M3 21h18" />
      <rect x="9" y="13" width="6" height="8" />
      <path d="M9 17h6" opacity=".55" />
    </>
  ),
  accounting: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8 11h3M13 11h3M8 15h3M13 15h3" opacity=".8" />
    </>
  ),
};
