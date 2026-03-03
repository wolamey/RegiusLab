import React from 'react';
import './ServiceForm.scss';
import { useState, useEffect } from 'react';
import closeCross from '../../assets/cross.png';

export default function ServiceForm({
  modal,
  setModal,
  setIsScrollDisabled,
  serviceName,
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [thanks, setThanks] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка перед вызовом Facebook Pixel
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    } else {
      console.warn("Facebook Pixel отключен или не загружен");
    }

    const data = {
      name,
      phone,
      email,
      comment,
      serviceName,
    };

    try {
      const response = await fetch("https://b24-lead.regiuslab.by", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // console.log(JSON.stringify(data));

      setThanks(true);
console.log(response)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      // console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;

    const digits = value.replace(/\D/g, '');

    setPhone(`+${digits}`);
  };

  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (thanks === true) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(timer);
            setThanks(false);
            setModal(false);
            setIsScrollDisabled(false);

            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [thanks, setThanks, setModal]);

  return (
    <div
      onClick={() => {
        setModal(false);
        setIsScrollDisabled(false);
      }}
      className="service-form"
    >
      <div
        style={{
          opacity: thanks === true ? '1' : '0',
          visibility: thanks === true ? 'visible' : 'hidden',
        }}
        className="consultation__thanks"
      >
        <p className="consultation__title consultation__title-thank">
          Спасибо за вашу заявку, мы свяжемся с вами в ближайшее время!
        </p>
        {thanks && <p className="consultation__timer"> {countdown} </p>}
      </div>
      <form
        onClick={(event) => event.stopPropagation()}
        className="service-form__form"
        style={{
          opacity: thanks === false ? '1' : '0',
          visibility: thanks === false ? 'visible' : 'hidden',
        }}
        onSubmit={handleSubmit}
      >
        <img
          onClick={() => {
            setModal(false);
            setIsScrollDisabled(false);
          }}
          src={closeCross}
          className="service-form__close-cross"
          alt=""
        />
        <p className="service-form__title">
          Заполните форму и мы свяжемся с вами в ближайшее время!
        </p>
        <input
          required
          type="text"
          className="service-form__name"
          name="name"
          placeholder="*Имя"
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
          type="tel"
          name="phone"
          className="service-form__tel"
          placeholder="*+375 (__) ___-__-__"
          value={phone}
          onChange={handleChange}
        />
        <input
          required
          type="email"
          className="service-form__email"
          name="email"
          placeholder="*Электронная почта"
          value={email}
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              document.querySelector('.service-form__comment').focus();
            }
          }}
        />
        <textarea
          type="text"
          className="service-form__comment"
          placeholder="Комментарий"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <label className="consent-checkbox">
          <input required type="checkbox" id="consent" name="consent" />
          <span>
            Нажимая на кнопку "Отправить", я даю свое согласие на обработку моих
            персональных данных для получения обратной связи в соответствии с
            <a className="consent-checkbox-link" href="/privacy">
              Политикой обработки персональных данных
            </a>
          </span>
        </label>

        <input
          type="submit"
          className="service-form__submit"
          value="Отправить"
        />
      </form>
    </div>
  );
}