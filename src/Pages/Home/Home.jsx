import { useState } from "react";
import "./Home.scss";
import arrowDownImg from "../../assets/arrow-down-right.png";
import arrowBlack from "../../assets/arrow-down-right-black.png";
import "../../style/fonts/fonts.scss";
import pegasusLeft from "../../assets/PegasusLeft.png";
import Marquee from "../../Components/Marquee/Marquee";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner6 from "../../assets/partner6.png";
import partner7 from "../../assets/partner7.png";
import partner8 from "../../assets/partner8.png";

import Services from "../../Components/Services/Services";

import arrowDownMain from "../../assets/main__arrow.png";

import bro from "../../assets/bro.png";
import FAQ from "../../Components/FAQ/FAQ";
import SwiperTestimonails from "../../Components/SwiperTestimonails/SwiperTestimonails";
import Clients from "../../Components/Clients/Clients";
import CertificatesSlider from "../../Components/CertificatesSlider";

// Импорты видео
import videoMaster from "../../assets/regiuslab-cube-assembly-master.mp4";
import videoMobile from "../../assets/regiuslab-cube-assembly-mobile.mp4";
import videoDefault from "../../assets/regiuslab-cube-assembly.mp4";
import videoWebm from "../../assets/regiuslab-cube-assembly.webm";
import videoCycle from "../../assets/regiuslab-cube-cycle.mp4";
import ReviewsSlider from "../../Components/ReviewsSlider";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [thanks, setThanks] = useState(false);

  const [captchaVerified, setCaptchaVerified] = useState(true);

  const handleCaptchaVerify = (value) => {
    if (value) {
      setCaptchaVerified(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Пожалуйста, пройдите капчу");
      return;
    }

    // Проверка перед вызовом Facebook Pixel
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    } else {
      console.warn("Facebook Pixel отключен или не загружен");
    }

    const data = {
      name,
      email,
      phone,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // console.log(JSON.stringify(data));

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setThanks(true);
      await response.json();
      // console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const handleChange = (e) => {
    const value = e.target.value;

    const digits = value.replace(/\D/g, "");

    setPhone(`+${digits}`);
  };

  return (
    <div>
      <div className="main">
        {/* Заменяем img на видео */}
        <video
          className="main__back"
          autoPlay
          muted
          loop
          playsInline
          poster={videoDefault} // fallback-изображение, если видео не загрузится
        >
          {/* Несколько источников для кросс-браузерности */}
          <source src={videoWebm} type="video/webm" />
          <source src={videoMaster} type="video/mp4" />
          <source src={videoDefault} type="video/mp4" />
          <source src={videoMobile} type="video/mp4" />
          <source src={videoCycle} type="video/mp4" />
          {/* fallback текст, если браузер не поддерживает видео */}
          Ваш браузер не поддерживает видео.
        </video>

        <div className="main__content">
          <p className="main__company-name">REGIUSLAB</p>
          <h1 className="main__title">IT ПРОДУКТЫ ДЛЯ ВАШЕГО БИЗНЕСА</h1>
          <a href="#form" className="main__contact">
            <p className="main__contact-link">СВЯЗАТЬСЯ</p>
            <img src={arrowDownImg} alt="" className="main__contact-img" />
            <img src={arrowBlack} className="main__contact-img-black" alt="" />
          </a>
          <a href="#services" className="main__arrow-link">
            <img src={arrowDownMain} className="main__arrow" alt="" />
          </a> 
        </div>
      </div>

      <Services />
      <Marquee />

      <div id="about" className="about">
        <img src={pegasusLeft} alt="  " className="about__pegas-left" />
        <img src={pegasusLeft} alt="  " className="about__pegas-right" />

        <div className="about__container">
          <p className="about__button-text title">О нас</p>

          <p className="about__description">
            Мы — команда высококвалифицированных профессионалов. <br />
            <br /> Наша цель — создавать индивидуальные решения для каждого
            клиента. Мы не просто автоматизируем бизнес-процессы, но и находим
            оптимальные пути для роста и развития вашего бизнеса. Наш широкий
            спектр услуг позволяет реализовать проекты под любые цели. Выбирайте
            нас, чтобы вместе достичь новых высот!
          </p>

          <button
            className="about__button"
            onClick={() => window.open("/RegiusLab_Creds.pdf", "_blank")}
          >
            Презентация компании
          </button>
        </div>
      </div>
      <div className="partners">
        <div className="partners__container">
          <img src={partner1} className="partners__item" alt="" />
          <img src={partner2} className="partners__item" alt="" />
          <img src={partner3} className="partners__item" alt="" />
          <img src={partner4} className="partners__item" alt="" />
          <img src={partner6} className="partners__item" alt="" />
          <img src={partner7} className="partners__item" alt="" />
          <img src={partner8} className="partners__item" alt="" />
        </div>
      </div>
      <div id="form" className="consultation">
        <div className="consultation__shadow"></div>
        <div className="consultation__container">
          <img src={bro} className="consultation__img" alt="" />
          <div className="consultation__right">
            <div
              style={{
                opacity: thanks === true ? "1" : "0",
                visibility: thanks === true ? "visible" : "hidden",
              }}
              className="consultation__thanks"
            >
              <p className="consultation__title consultation__title-thank">
                Спасибо за вашу заявку, мы свяжемся с вами в ближайшее время!
              </p>
            </div>

            <p
              style={{
                opacity: thanks === false ? "1" : "0",
                visibility: thanks === false ? "visible" : "hidden",
              }}
              className="consultation__title"
            >
              Запросить консультацию
            </p>
            <form
              style={{
                opacity: thanks === false ? "1" : "0",
                visibility: thanks === false ? "visible" : "hidden",
              }}
              onSubmit={handleSubmit}
              className="consultation__form"
            >
              <input
                required
                type="text"
                className="consultation__name"
                name="name"
                placeholder="Имя"
                value={name}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[A-Za-zА-Яа-яЁё\s]*$/.test(value)) {
                    setName(value);
                  }
                }}
              />
              <input
                required
                value={phone}
                type="tel"
                name="phone"
                className="consultation__tel"
                placeholder="+375 (__) ___-__-__"
                onChange={handleChange}
              />
              <input
                required
                type="email"
                className="consultation__email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                placeholder="Электронная почта"
              />
              <label className="form__checkbox">
                <input required type="checkbox" id="consent" name="consent" />
                <span className="form__checkbox-text">
                  Нажимая на кнопку "Отправить", я даю свое согласие на
                  обработку моих персональных данных для получения обратной
                  связи в соответствии с
                  <a className="form__checkbox-link" href="/privacy">
                    Политикой обработки персональных данных
                  </a>
                </span>
              </label>

              <input
                type="submit"
                className="consultation__submit"
                value="Отправить"
              />
            </form>
          </div>
        </div>
      </div>

      {/* <SwiperTestimonails /> */}

      <p className="title clients_title services__title">Партнеры и Клиенты</p>
      <Clients />
     
      <CertificatesSlider />

<ReviewsSlider/>

      <FAQ />
    </div>
  );
}