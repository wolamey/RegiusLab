import './Footer.scss';
import logoPic from '../../assets/logo.png';
import soc12 from '../../assets/soc12.png';
import soc22 from '../../assets/soc22.png';
import soc32 from '../../assets/soc32.png';
import soc42 from '../../assets/soc42.png';
import soc1 from '../../assets/soc1.png';
import soc2 from '../../assets/soc2.png';
import soc3 from '../../assets/soc3.png';
import soc4 from '../../assets/soc4.png';
import inst1 from '../../assets/inst1.png';
import inst2 from '../../assets/inst2.png';
export default function Footer() {
  return (
    <div id="footer" className="footer">
      <a href="/" className="footer__logo">
        <img src={logoPic} alt="" className="footer__logo-pic" />
      </a>

      <div className="footer__column">
        <div className="footer__social-med">
          <a
            href="https://www.linkedin.com/company/regiuslab/"
            className="footer__item-soc"
          >
            <img src={soc1} alt="" className="footer__soc-img" />
            <img src={soc12} alt="" className="footer__soc-img-hover" />
          </a>
          {/* <a href="https://t.me/RegiuslabBot" className="footer__item-soc">
            <img src={soc2} alt="" className="footer__soc-img" />
            <img src={soc22} alt="" className="footer__soc-img-hover" />
          </a> */}
          <a
            href="https://www.instagram.com/regiuslab_it/
"
            className="footer__item-soc"
          >
            <img src={inst2} alt="" className="footer__soc-img" />
            <img src={inst1} alt="" className="footer__soc-img-hover" />
          </a>
          {/* <a href="" className="footer__item-soc">
            <img src={soc4} alt="" className="footer__soc-img" />
            <img src={soc42} alt="" className="footer__soc-img-hover" />
          </a> */}
        </div>

        <a
          href="tel:+375447980498"
          onClick={() => window.fbq('track', 'Contact')}
          className="footer__tel"
        >
          Тел: +375447980498
        </a>
           <a
          href="tel:+375447041787"
          onClick={() => window.fbq('track', 'Contact')}
          className="footer__tel"
        >
          Тел: +375447041787
        </a>
        <a href="mailto:sales@regiuslab.by" className="footer__tel">
          sales@regiuslab.by
        </a>
      
      </div>
      <div className="footer__column">
        <p className="footer__info">ООО "РЕГИУСЛАБ"</p>
        <p className="footer__info">УНП: 193776565</p>
        <a href="/terms" className="footer__link">
          Условия обслуживания
        </a>
      </div>
      <div className="footer__column">
        <p className="footer__info">
          Юр. адрес: 220083 г.Минск пр.Газеты Правды 9 оф. 5Н
        </p>
        <p className="footer__info">Офис: Тимирязева 65, помещение 202-5</p>
        <a href="/privacy" className="footer__link">
          Политика конфиденциальности
        </a>
          <a href="/cookie-settings" className="footer__link">
          Настройки cookie
        </a>
      </div>
    </div>
  );
}
