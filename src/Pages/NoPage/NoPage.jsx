import React, { useState, useEffect } from 'react';
import './NoPage.scss';
import ServiceForm from '../../Components/ServiceForm/ServiceForm';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NoPage() {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set 404 status code if possible (for SSR environments)
    if (typeof window !== 'undefined' && window.document) {
      document.title = 'Страница не найдена - 404 | RegiusLab';
      
      // Update meta description for SEO
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Страница, которую вы ищете, не существует. Вернитесь на главную страницу RegiusLab.');
      }
    }
  }, []);

  return (
    <div className="no-page">
      <div className="no-page__container">
        <h1 className="no-page__title">404</h1>
        <h2 className="no-page__subtitle">Страница не найдена</h2>
        <p className="no-page__text">
          К сожалению, страница по адресу <strong>{location.pathname}</strong> не существует.
        </p>
        <button className="no-page__button" onClick={() => navigate('/')}>
          Вернуться на главную
        </button>
      </div>
      {/* <button onClick={() => setModal(true)}>form</button>
      {modal && <ServiceForm modal={modal} setModal={setModal} />} */}
    </div>
  );
}
