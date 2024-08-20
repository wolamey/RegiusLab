import React from 'react';
import '../../style/Rules.scss';
export default function CookieSettings() {
  return (
    <div className="rules">
      <p className="rules__title  ">Обработка файлов cookie</p>
      <p className="rules__subtitle">1. Что такое файлы cookie?</p>
      <p className="rules__text">
        Куки (англ. cookies) являются текстовым файлом, сохраненным в браузере
        компьютера (мобильного устройства) пользователя официального
        интернет-сайта Национального центра защиты персональных данных (далее –
        сайт) при его посещении пользователем для отражения совершенных им
        действий. Этот файл позволяет не вводить заново или выбирать те же
        параметры при повторном посещении сайта, например, выбор языковой
        версии. Целью обработки куки является обеспечение удобства пользователей
        сайта и повышение качества его функционирования. Мы не передаем куки
        третьим лицам и не используем их для идентификации субъектов
        персональных данных.
      </p>

      <p className="rules__subtitle">
        2. На сайте обрабатываются следующие типы куки:
      </p>
      <p className="rules__text">
        функциональные – позволяют обеспечить индивидуальный опыт использования
        сайта и устанавливаются в ответ на действия субъекта персональных
        данных; статистические – позволяют хранить историю посещений страниц
        сайта в целях повышения качества его функционирования, чтобы определить
        наиболее и наименее популярные страницы.
      </p>

      <p className="rules__subtitle">
        3. На сайте обрабатываются следующие куки и устанавливаются сроки их
        хранения:
      </p>
      <p className="rules__text">
        выбор версии для слабовидящих (функциональные), часть из которых
        хранится во время пользования сайтом, а остальные – не более суток;
        выбор языковых предпочтений (функциональные), хранятся не более года;
        необходимые для функционирования веб-аналитической платформы Matomo
        (статистические), установлены на сайте и не передаются третьим лицам,
        часть из которых хранится во время пользования сайтом, а остальные – не
        более года.
      </p>

      <p className="rules__subtitle">
        4. Пользователи могут «Принять все» или «Отклонить все» обрабатываемые
        на сайте куки.
      </p>
      <p className="rules__text">
        При этом корректная работа сайта возможна только в случае использования
        функциональных куки. В случае их отключения может потребоваться
        совершать повторный выбор предпочтений куки, языковой версии сайта, а
        также могут некорректно отображаться версии страниц для слабовидящих.
        Отключение статистических куки не позволяет определять предпочтения
        пользователей сайта, в том числе наиболее и наименее популярные страницы
        и принимать меры по совершенствованию работы сайта исходя из
        предпочтений пользователей.
      </p>

      <p className="rules__subtitle">
        5. Помимо настроек куки на сайте субъекты персональных данных могут
        принять или отклонить сбор всех или некоторых куки в настройках своего
        браузера.
      </p>
      <p className="rules__text">
        При этом некоторые браузеры позволяют посещать интернет-сайты в режиме
        «инкогнито», чтобы ограничить хранимый на компьютере объем информации и
        автоматически удалять сессионные куки. Кроме того, субъект персональных
        данных может удалить ранее сохраненные куки, выбрав соответствующую
        опцию в истории браузера. Подробнее о параметрах управления куки можно
        ознакомиться, перейдя по внешним ссылкам, ведущим на соответствующие
        страницы сайтов основных браузеров:
        <br />
        <br />
        <a
          href="https://support.mozilla.org/ru/kb/udalenie-kukov-dlya-udaleniya-informacii-kotoruyu-"
          className="rules__link"
        >
          Firefox
        </a>
        <br />
        <a
          href="https://support.google.com/chrome/answer/95647?hl=ru"
          className="rules__link"
        >
          Chrome
        </a>
        <br />
        <a
          href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac"
          className="rules__link"
        >
          Safari
        </a>
        <br />
        <a
          href="https://help.opera.com/ru/latest/web-preferences/#%D0%A3%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0%D0%BC%D0%B8-cookie"
          className="rules__link"
        >
          Opera
        </a>
        <br />
        <a
          href="https://support.microsoft.com/ru-ru/microsoft-edge/%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2-cookie-%D0%B2-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
          className="rules__link"
        >
          Microsoft Edge
        </a>
        <br />
        <a
          href="https://support.microsoft.com/ru-ru/windows/%D1%83%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2-cookie-%D0%B8-%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%BC%D0%B8-168dab11-0753-043d-7c16-ede5947fc64d"
          className="rules__link"
        >
          Internet Explorer
        </a>
        <br />
      </p>
    </div>
  );
}
