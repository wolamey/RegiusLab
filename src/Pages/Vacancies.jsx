// Vacancies.js
import React, { useState, useRef, useEffect } from "react";
import "./Vacancies.scss";

// Генерация случайной капчи
const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;
  return { num1, num2, sum: num1 + num2 };
};

const Vacancies = () => {
  // Состояния для вакансий
  const [vacanciesList, setVacanciesList] = useState([]);
  const [loadingVacancies, setLoadingVacancies] = useState(true);
  const [vacanciesError, setVacanciesError] = useState("");

  // Состояния формы
  const [vacancy, setVacancy] = useState("");
  const [vacancyId, setVacancyId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [comment, setComment] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Состояние для кастомного дропдауна
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Refs
  const fileInputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Загрузка вакансий из Битрикс24
  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        setLoadingVacancies(true);
        const response = await fetch(
          "https://b24.regius24.by/rest/4/oe7q0cy3abctuz7y/lists.element.get.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              IBLOCK_TYPE_ID: "lists",
              IBLOCK_ID: 18
            })
          }
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.result && Array.isArray(data.result)) {
          const formattedVacancies = data.result.map(item => ({
            id: item.ID,
            title: item.NAME,
            employment: "Полная занятость",
            location: "Минск / удаленно",
            experience: "с опытом или без",
            icon: getIconForVacancy(item.NAME),
          }));
          
          setVacanciesList(formattedVacancies);
        } else {
          console.error("Неверный формат данных:", data);
          setVacanciesError("Не удалось загрузить список вакансий");
          setVacanciesList(getDefaultVacancies());
        }
      } catch (error) {
        console.error("Error fetching vacancies:", error);
        setVacanciesError("Не удалось загрузить список вакансий");
        setVacanciesList(getDefaultVacancies());
      } finally {
        setLoadingVacancies(false);
      }
    };

    fetchVacancies();
  }, []);

  // Функция для получения вакансий по умолчанию
  const getDefaultVacancies = () => [
    {
      id: "57",
      title: "Менеджер по продажам",
      employment: "Полная занятость",
      location: "Минск / удаленно / гибрид",
      experience: "с опытом или без (обучим)",
      icon: "💼",
    },
    {
      id: "56",
      title: "Помощник руководителя в отдел продаж",
      employment: "Полная занятость",
      location: "Минск (офис)",
      experience: "с опытом или без",
      icon: "📋",
    },
    {
      id: "58",
      title: "1С разработчик",
      employment: "Частичная занятость",
      location: "Удаленно",
      experience: "опыт приветствуется",
      icon: "⚙️",
    },
    {
      id: "55",
      title: "Интегратор Битрикс24",
      employment: "Полная занятость",
      location: "Минск / удаленно",
      experience: "опыт приветствуется",
      icon: "🔄",
    },
  ];

  // Функция для определения иконки по названию вакансии
  const getIconForVacancy = (title) => {
    const iconMap = {
      "Менеджер по продажам": "💼",
      "Помощник руководителя в отдел продаж": "📋",
      "1С разработчик": "⚙️",
      "Интегратор Битрикс24": "🔄",
    };
    return iconMap[title] || "📌";
  };

// Валидация
const validateForm = () => {
  if (!vacancy) return "Выберите желаемую вакансию";
  if (!fullName.trim()) return "Введите ФИО";
  if (!phone.trim()) return "Введите номер телефона";
  
  // Валидация телефона (Россия и Беларусь)
  const phoneRegex = /^(\+7|8|375)[\s\-]?\(?\d{2,3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
  if (!phoneRegex.test(phone)) {
    return "Введите корректный номер телефона (Россия: +7 или 8, Беларусь: 375)";
  }
  
  if (!email.trim()) return "Введите email";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Введите корректный email";
  if (parseInt(captchaAnswer) !== captcha.sum)
    return "Неправильный ответ на капчу";
  return null;
};

// Функция для форматирования номера телефона (опционально)
const formatPhoneNumber = (value) => {
  // Убираем все нецифровые символы
  const numbers = value.replace(/\D/g, '');
  
  // Если начинается с 8, заменяем на +7 для России
  if (numbers.startsWith('8')) {
    return '+7' + numbers.slice(1);
  }
  
  // Если начинается с 375, добавляем +
  if (numbers.startsWith('375')) {
    return '+' + numbers;
  }
  
  // Если начинается с 7, добавляем +
  if (numbers.startsWith('7')) {
    return '+' + numbers;
  }
  
  return value;
};

// Обработчик изменения телефона с форматированием
const handlePhoneChange = (e) => {
  const rawValue = e.target.value;
  // Можно добавить форматирование, но лучше дать пользователю ввести как удобно
  setPhone(rawValue);
};
  // Очистка формы
  const resetForm = () => {
    setVacancy("");
    setVacancyId("");
    setFullName("");
    setPhone("");
    setEmail("");
    setTelegram("");
    setComment("");
    setFile(null);
    setFileName("");
    setCaptcha(generateCaptcha());
    setCaptchaAnswer("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Конвертация файла в base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Убираем префикс (data:application/pdf;base64, и т.д.)
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  // Отправка данных в Битрикс24
  const sendToBitrix24 = async (formData) => {
    // Создаем объект для отправки в JSON
    const dataToSend = {
      fields: {
        ufCrm17_1770821807870: formData.fullName, // ФИО
        ufCrm17_1771321248: formData.vacancyId, // Вакансия
        ufCrm17_1770882906374: formData.phone, // Телефон
        ufCrm17_1770882935940: formData.email, // Email
        ufCrm17_1770882956211: formData.telegram, // Telegram
        ufCrm17_1770881567629: formData.comment, // Комментарий
      },
      entityTypeId: 1148 // ID смарт-процесса
    };

    // Если есть файл в base64, добавляем его
    if (formData.fileBase64 && formData.fileName) {
      dataToSend.fields.ufCrm17_1770882984357 = {
        fileData: [formData.fileName, formData.fileBase64]
      };
    }

    console.log("Отправляемые данные в Битрикс24:", dataToSend);

    const response = await fetch(
      "https://b24.regius24.by/rest/15/pgl7xsysdtvc3njv/crm.item.add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Ошибка от Битрикс24:", errorData);
      throw new Error("Ошибка отправки в Битрикс24");
    }

    return await response.json();
  };

  // Обработчик отправки
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    // Проверяем, что ID вакансии выбран
    if (!vacancyId) {
      setErrorMessage("Ошибка: не выбран ID вакансии");
      return;
    }

    setIsSending(true);

    try {
      let fileBase64 = null;
      let fileName = null;

      // Если есть файл, конвертируем его в base64
      if (file) {
        try {
          fileBase64 = await fileToBase64(file);
          fileName = file.name;
          console.log("Файл сконвертирован в base64");
        } catch (fileError) {
          console.error("File conversion error:", fileError);
          throw new Error("Ошибка конвертации файла");
        }
      }

      // Отправляем данные в Битрикс24
      await sendToBitrix24({
        fullName,
        vacancyId: vacancyId,
        phone,
        email,
        telegram: telegram || "",
        comment: comment || "",
        fileBase64,
        fileName,
      });

      setSuccessMessage("Спасибо! Мы свяжемся с вами в ближайшее время");
      resetForm();
    } catch (error) {
      console.error("Bitrix24 send error:", error);
      setErrorMessage(
        "Произошла ошибка. Попробуйте позже или напишите нам напрямую: hr@regiuslab.by"
      );
    } finally {
      setIsSending(false);
    }
  };

  // Выбор вакансии в кастомном дропдауне
  const selectVacancy = (selectedVacancy) => {
    setVacancy(selectedVacancy.title);
    setVacancyId(selectedVacancy.id);
    setDropdownOpen(false);
    console.log("Выбрана вакансия:", selectedVacancy.title, "ID:", selectedVacancy.id);
  };

  // Обработчик выбора файла
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "");
  };

  if (loadingVacancies && !vacanciesError) {
    return (
      <div className="vacancies-page">
        <div className="loading-spinner">
          <p>Загрузка вакансий...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="vacancies-page">
      {/* Херо-блок на весь экран */}
      <section className="vacancies-hero">
        <div className="vacancies-hero__overlay"></div>
        <div className="vacancies-hero__content">
          <h1 className="vacancies-hero__title">
            Добро пожаловать в <span>RegiusLab</span>
          </h1>
          <p className="vacancies-hero__subtitle">
            Мы ищем людей, которым интересно расти вместе с командой и
            участвовать в создании полезных цифровых продуктов.
          </p>
          <p className="vacancies-hero__text">
            Если вам близок современный подход к работе и живые проекты — будем
            рады знакомству.
          </p>
          <a href="#vacancies-list" className="vacancies-hero__button">
            Смотреть вакансии
          </a>
        </div>
        <div className="vacancies-hero__scroll">↓</div>
      </section>

      {/* Блок вакансий с якорем */}
      <section id="vacancies-list" className="vacancies-list-section">
        <h2 className="vacancies-list-section__title">Активные вакансии</h2>
        {vacanciesError && (
          <div className="vacancies-error">{vacanciesError}</div>
        )}
        <div className="vacancies-grid">
          {vacanciesList.map((vac) => (
            <div key={vac.id} className="vacancy-card">
              <div className="vacancy-card__icon">{vac.icon}</div>
              <h3 className="vacancy-card__title">{vac.title}</h3>
              <div className="vacancy-card__details">
                <span className="vacancy-card__employment">
                  <span className="vacancy-card__label">Занятость:</span>{" "}
                  {vac.employment}
                </span>
                <span className="vacancy-card__location">
                  <span className="vacancy-card__label">Локация:</span>{" "}
                  {vac.location}
                </span>
                <span className="vacancy-card__experience">
                  <span className="vacancy-card__label">Опыт:</span>{" "}
                  {vac.experience}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Форма отклика */}
      <section className="vacancies-form-section">
        <h2 className="vacancies-form-section__title">Откликнуться на вакансию</h2>
        <form className="vacancies-form" onSubmit={handleSubmit}>
          {/* Кастомный выпадающий список */}
          <div className="form-group form-group--dropdown">
            <label>Желаемая вакансия *</label>
            <div
              className={`custom-select ${dropdownOpen ? "open" : ""}`}
              ref={dropdownRef}
            >
              <div
                className="custom-select__trigger"
                onClick={() => !loadingVacancies && setDropdownOpen(!dropdownOpen)}
              >
                <span className="custom-select__selected">
                  {vacancy || (loadingVacancies ? "Загрузка..." : "Выберите вакансию")}
                </span>
                <span className="custom-select__arrow">▼</span>
              </div>
              {dropdownOpen && !loadingVacancies && (
                <div className="custom-select__options">
                  {vacanciesList.map((vac) => (
                    <div
                      key={vac.id}
                      className={`custom-select__option ${
                        vacancy === vac.title ? "selected" : ""
                      }`}
                      onClick={() => selectVacancy(vac)}
                    >
                      {vac.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ФИО */}
          <div className="form-group">
            <label htmlFor="fullName">ФИО *</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

     {/* Телефон */}
<div className="form-group">
  <label htmlFor="phone">Номер телефона *</label>
  <input
    type="tel"
    id="phone"
    value={phone}
    onChange={handlePhoneChange}
    placeholder="+7 (999) 123-45-67 или 375 29 123-45-67"
    required
  />
  <small className="phone-hint">
    Форматы: +7XXXXXXXXXX, 8XXXXXXXXXX (Россия) или 375XXXXXXXXX (Беларусь)
  </small>
</div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telegram">Telegram (необязательно)</label>
            <input
              type="text"
              id="telegram"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="comment">Комментарий (необязательно)</label>
            <textarea
              id="comment"
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="resume">Резюме (pdf, doc, docx)</label>
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            {fileName && <small>Выбран файл: {fileName}</small>}
          </div>

          <div className="form-group form-captcha">
            <label>
              Защита от спама: сколько будет {captcha.num1} + {captcha.num2}? *
            </label>
            <input
              type="number"
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              required
            />
          </div>

          {errorMessage && (
            <div className="form-message error">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="form-message success">{successMessage}</div>
          )}

          <button type="submit" className="flare-button" disabled={isSending || loadingVacancies}>
            {isSending ? "Отправка..." : "Откликнуться"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Vacancies;