import React, { useState } from "react";

export default function Cases({ setModal, setBodyScroll }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  const cases = [
    // ============ КЕЙС 1: AI-снабжение ============
    {
      icon: "📦",
      accent: "#f5a623",
      title: "AI-снабжение — Интеллектуальная автоматизация заказов и снабжения в Telegram",
      subtitle:
        "Корпоративный AI-бот для управления внутренними заказами · 1С + Telegram",
      situation:
        "Менеджеры компании тратили часы на ручной цикл: поиск контрагента → сверка остатков в 1С → мучительный подбор аналогов при дефиците → ручное заполнение ТТН. Это приводило к ошибкам в документах, заказам «в минус» и колоссальным потерям времени.",
      solutions: [
        {
          title: "1. Старт и идентификация в чате",
          text: "Бот доступен с телефона и ПК 24/7. При нажатии «Обработать новый заказ» система мгновенно создаёт запись и ведёт менеджера по шагам:",
          list: [
            { b: "Черновик заказа:", t: " автоматически создаётся в системе." },
            { b: "Выбор контрагента:", t: " ИИ ищет совпадения в базе и предлагает варианты для подтверждения." },
            { b: "Логистика:", t: " в один клик выбирается способ получения (Доставка или Самовывоз)." },
          ],
        },
        {
          title: "2. Интеллектуальный парсинг и подбор",
          text: "Менеджеру не нужно искать артикулы — он просто пишет: «iphone 18 15шт, тмин 5кг».",
          list: [
            { b: "ИИ-анализ (NLP):", t: " бот разбирает строку, сопоставляет с номенклатурой и подтягивает актуальные цены и остатки." },
            { b: "Умные аналоги:", t: " если товара нет или мало — ИИ на основе данных 1С предлагает подходящие аналоги." },
          ],
        },
        {
          title: "3. Работа с «умной корзиной» прямо в чате",
          text: "В интерфейсе Telegram-бота формируется интерактивный список. Менеджер может:",
          list: [
            { t: "Редактировать количество или удалять позиции." },
            { t: "В один клик заменить товар на предложенный системой аналог." },
            { t: "Дошлифовать заказ до финального вида, не переключаясь между программами." },
          ],
        },
        {
          title: "4. Документооборот и снабжение",
          text: "После подтверждения бот автоматически формирует ТТН в нужном формате на основе данных из 1С. Документ мгновенно улетает в отдел снабжения и ответственным сотрудникам в Telegram или на e-mail.",
        },
      ],
      table: {
        head: ["Параметр", "Ручное оформление", "AI-Снабжение"],
        rows: [
          ["Время на обработку 1 заказа", "15–20 минут", "2–3 минуты"],
          ["Подбор аналогов", "Ручной поиск (10 мин)", "Мгновенно (AI)"],
          ["Ошибки в документах", "Часто (ручной перенос)", "0% (автогенерация)"],
          ["Доступ к остаткам 24/7", "Нет (только из офиса)", "Да (с любого смартфона)"],
          ["Точность подбора (качество)", "40%", "96%"],
        ],
      },
      highlight: (
        <>
          Бот бесшовно синхронизируется с 1С, Битрикс24 и другими системами через API.
          Это гарантирует работу строго по актуальным остаткам (никаких заказов «в минус»)
          и исключение лишних согласований.
        </>
      ),
      tech: [
        "Внедрение системы занимает от 2-х недель.",
        "Работает поверх существующей инфраструктуры 1С — без замены учётной системы.",
        "Доступ с любого устройства: мобильное рабочее место в Telegram.",
      ],
      result:
        "AI-Снабжение — это не просто бот, а мобильное рабочее место, которое делает процесс снабжения прозрачным и молниеносным. Окупается за счёт высвобождения времени ключевых сотрудников.",
      cta: "Автоматизировать внутренние заказы",
    },

    // ============ КЕЙС 2: AI-Заявки (Telegram-реализация) ============
    {
      icon: "✉️",
      accent: "#4facfe",
      title:
        "AI-Заявки — интеллектуальная обработка писем, подбор товаров и создание заказов в 1С",
      subtitle:
        "Рабочее место менеджера в виде Telegram-бота · 1С остаётся учётной системой",
      situation:
        "Основной канал поступления заявок — электронная почта. Письма оформляются по-разному и не всегда содержат слово «заявка». Сотрудники вручную просматривают почту, определяют, где заявка, а где обычная переписка. После обнаружения заявки начинается второй трудоёмкий этап — подбор товаров из номенклатуры в 3 млн вариантов.",
      solutions: [
        {
          title: "1. Автоматическое выявление заявок",
          text: "Система подключается к почтовым ящикам и анализирует входящий поток. ИИ определяет тип каждого сообщения:",
          list: [
            { t: "новая заявка;" },
            { t: "продолжение переписки / уточнение по заказу;" },
            { t: "документ или счёт;" },
            { t: "информационное или нецелевое письмо." },
          ],
        },
        {
          title: "2. Интеллектуальный разбор заявки",
          text: "ИИ обрабатывает текст письма, таблицы, PDF-файлы и другие вложения. Из заявки извлекаются наименование товара, количество, размеры, единицы измерения, сроки, реквизиты клиента, комментарии. Если данных нет — система не угадывает, а выделяет для проверки менеджером.",
        },
        {
          title: "3. Подбор товаров по номенклатуре 1С",
          text: "При ассортименте в несколько миллионов вариантов ИИ не выбирает товар без контроля специалиста. Система:",
          list: [
            { b: "Извлекает:", t: " название и требуемые характеристики." },
            { b: "Преобразует:", t: " параметры в структурированный запрос к номенклатуре 1С." },
            { b: "Сужает:", t: " перечень вариантов и показывает наиболее подходящие позиции." },
            { b: "Финальный выбор:", t: " за менеджером." },
          ],
        },
        {
          title: "4. Рабочее место менеджера в Telegram",
          text: "Все шаги обработки — от карточки заявки до подбора аналогов и подтверждения заказа — доступны прямо в чат-боте. Менеджер работает с телефона или ПК, не переключаясь между почтой, 1С и веб-интерфейсами.",
          list: [
            { b: "Умная корзина:", t: " подтвердить позицию, изменить количество, заменить аналогом, добавить вручную." },
            { b: "История обработки:", t: " все изменения фиксируются в карточке заявки." },
            { b: "Альтернатива:", t: " если Битрикс24 избыточен — тот же сценарий реализуется в Telegram." },
          ],
        },
        {
          title: "5. Создание заказа в 1С",
          text: "1С остаётся основной учётной системой компании. После подтверждения менеджером система передаёт в 1С контрагента, номенклатуру, количество и цены — в 1С создаётся черновик заказа. Дальше документы, счета и складские операции оформляются по существующим правилам компании.",
        },
      ],
      table: {
        head: ["Параметр", "Ручная обработка", "AI-Заявки (Telegram)"],
        rows: [
          ["Поиск заявок в потоке", "Просмотр каждого письма", "Автоклассификация, проверка спорных"],
          ["Время первичного разбора", "Полностью вручную", "Сокращение на 50–80%"],
          ["Поиск товара", "Ручной просмотр номенклатуры", "Автосужение списка вариантов"],
          ["Перенос данных в 1С", "Повторный ручной ввод", "Сокращение ручных операций на 70–90%"],
          ["Ошибки переноса", "Возможны при вводе", "Снижение типовых ошибок на 30–60%"],
          ["Скорость обработки заявок", "Ограничена загрузкой", "Рост пропускной способности на 50–150%"],
        ],
      },
      highlight: (
        <>
          <strong>1С остаётся основной учётной системой</strong> компании. Проект не
          предполагает её замены — Telegram-бот выступает рабочим окном менеджера,
          а данные передаются в 1С после подтверждения заказа.
        </>
      ),
      tech: [
        "Альтернативные интерфейсы: Telegram-бот, веб-интерфейс или Битрикс24 — на выбор.",
        "Работа с локальной моделью внутри закрытого контура или через облачный API с анонимизацией.",
        "Гибридная схема: чувствительные данные заменяются маркерами, таблица соответствий остаётся внутри компании.",
      ],
      result:
        "AI-Заявки — это единая система, которая превращает входящее письмо в проверенный заказ: находит заявку в общем потоке, извлекает потребность клиента, помогает подобрать точные товары и аналоги, после чего создаёт заказ в 1С. Telegram-бот делает это рабочее место доступным с любого устройства 24/7.",
      cta: "Автоматизировать обработку заявок",
    },
  ];

  return (
    <section id="section-cases" className="bitrix-cases">
      <div className="bitrix-cases__glow" aria-hidden="true" />

      <div className="bitrix-cases__header">
        <span className="bitrix-cases__kicker">Портфолио RegiusLab</span>
        <h3 className="bitrix-cases__section-title">Кейсы, с которыми мы работали</h3>
        <p className="bitrix-cases__lead">
          AI-боты для снабжения, продаж и обработки заявок — рабочее место в Telegram
        </p>
      </div>

      <div className="bitrix-cases__wrapper">
        {cases.map((c, i) => {
          const isOpen = openIndex === i;
          return (
            <article
              key={i}
              className={`bitrix-case ${isOpen ? "is-open" : ""}`}
              style={{ "--accent": c.accent }}
            >
              {/* ---------- Header ---------- */}
              <button
                className="bitrix-case__head"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <div className="bitrix-case__head-left">
                  <div className="bitrix-case__icon" aria-hidden="true">
                    <span>{c.icon}</span>
                  </div>
                  <div className="bitrix-case__head-text">
                    <span className="bitrix-case__badge">
                      Кейс {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="bitrix-case__title">{c.title}</h4>
                    <p className="bitrix-case__subtitle">
                      Разработчик: RegiusLab · {c.subtitle}
                    </p>
                  </div>
                </div>

                <div
                  className={`bitrix-case__toggle ${isOpen ? "is-open" : ""}`}
                  aria-hidden="true"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M5 8.5L11 14.5L17 8.5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* ---------- Body ---------- */}
              <div className="bitrix-case__collapse">
                <div className="bitrix-case__body">
                  {/* Ситуация */}
                  <div className="bitrix-case__block">
                    <h5 className="bitrix-case__block-title">
                      <span className="bitrix-case__block-dot" />
                      Ситуация
                    </h5>
                    <p className="bitrix-case__text">{c.situation}</p>
                  </div>

                  {/* Решение */}
                  <div className="bitrix-case__block">
                    <h5 className="bitrix-case__block-title">
                      <span className="bitrix-case__block-dot" />
                      Решение
                    </h5>

                    <div className="bitrix-case__solutions">
                      {c.solutions.map((s, si) => (
                        <div key={si} className="bitrix-case__solution-item">
                          <div className="bitrix-case__solution-num">{si + 1}</div>
                          <div className="bitrix-case__solution-content">
                            <h6 className="bitrix-case__solution-title">{s.title}</h6>
                            {s.text && <p className="bitrix-case__text">{s.text}</p>}
                            {s.list && (
                              <ul className="bitrix-case__list">
                                {s.list.map((item, li) => (
                                  <li key={li}>
                                    {item.b && <strong>{item.b}</strong>}
                                    {item.t}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Таблица */}
                  {c.table && (
                    <div className="bitrix-case__block">
                      <h5 className="bitrix-case__block-title">
                        <span className="bitrix-case__block-dot" />
                        Эффективность: сравнение процессов
                      </h5>
                      <div className="bitrix-case__table-wrap">
                        <table className="bitrix-case__table">
                          <thead>
                            <tr>
                              {c.table.head.map((h, hi) => (
                                <th key={hi}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {c.table.rows.map((row, ri) => (
                              <tr key={ri}>
                                {row.map((cell, ci) => (
                                  <td
                                    key={ci}
                                    className={
                                      ci === row.length - 1
                                        ? "bitrix-case__table-best"
                                        : ""
                                    }
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {c.highlight && (
                        <p className="bitrix-case__text bitrix-case__text--highlight">
                          {c.highlight}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Если нет таблицы, но есть highlight — рендерим отдельно */}
                  {!c.table && c.highlight && (
                    <p className="bitrix-case__text bitrix-case__text--highlight">
                      {c.highlight}
                    </p>
                  )}

                  {/* Технические особенности */}
                  {c.tech && (
                    <div className="bitrix-case__block">
                      <h5 className="bitrix-case__block-title">
                        <span className="bitrix-case__block-dot" />
                        Технические особенности
                      </h5>
                      <ul className="bitrix-case__list">
                        {c.tech.map((t, ti) => (
                          <li key={ti}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Roadmap */}
                  {c.roadmap && (
                    <div className="bitrix-case__block">
                      <h5 className="bitrix-case__block-title">
                        <span className="bitrix-case__block-dot" />
                        Будущее проекта (Roadmap)
                      </h5>
                      <ul className="bitrix-case__list">
                        {c.roadmap.map((r, ri) => (
                          <li key={ri}>
                            {r.b && <strong>{r.b}</strong>}
                            {r.t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Итог */}
                  <div className="bitrix-case__result">
                    <div className="bitrix-case__result-icon" aria-hidden="true">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path
                          d="M14 2L17.5 10.5L26 12L19.5 18L21.5 27L14 22.5L6.5 27L8.5 18L2 12L10.5 10.5L14 2Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                          fill="rgba(175,123,32,0.15)"
                        />
                      </svg>
                    </div>
                    <p className="bitrix-case__result-text">{c.result}</p>
                    <button
                      onClick={() => {
                        setModal(true);
                        setBodyScroll(true);
                      }}
                      className="bitrix-case__cta role__button flare-button"
                    >
                      {c.cta}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}