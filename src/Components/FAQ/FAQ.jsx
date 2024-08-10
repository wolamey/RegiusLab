import { useState } from 'react';
import faqArrow from '../../assets/faq-arrow.png';
import './FAQ.scss';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="faq">
      <p className="faq__title">
        Остались вопросы? <br /> Мы готовы помочь Вам.
      </p>
      <div className="faq__wrapper">
        {[
          {
            question: '  Какие услуги вы предоставляете? ',
            answer:
              'Мы предоставляем услуги по автоматизации бизнес-процессов, документооборота, производства и интернет-торговли, включая мониторинг цен конкурентов, автоматический расчет цен, синхронизацию товаров и автоматическую загрузку товаров в интернет-магазины. Также мы разрабатываем Telegram-ботов для различных задач, таких как боты-магазины, информационные боты, чат-боты и боты с искусственным интеллектом. В области 1С мы занимаемся настройкой логики, оптимизацией быстродействия, разработкой модулей и интеграцией с другими системами. В сфере блокчейн мы предлагаем разработку Smart контрактов, создание криптобирж, майнинг пулов и интеграцию блокчейн сетей. Для CMS Magento мы разрабатываем системы электронной коммерции, интегрируем их с ERP и POS системами, создаем PWA приложения и модули, а также занимаемся оптимизацией и поддержкой сайтов.',
          },
          {
            question: 'Сколько стоят ваши услуги? ',
            answer:
              'Стоимость наших услуг зависит от сложности и объема проекта. Мы предлагаем индивидуальный подход к каждому клиенту, поэтому для получения точной информации о стоимости, пожалуйста, свяжитесь с нами для обсуждения ваших требований и получения персонализированного предложения. Мы всегда готовы предложить оптимальные решения, соответствующие вашему бюджету и потребностям.',
          },
          {
            question: 'Каковы основные преимущества ваших продуктов?',
            answer:
              'Наши продукты и услуги обладают рядом ключевых преимуществ: Автоматизация и оптимизация: Мы помогаем сократить время на выполнение рутинных задач, повысить производительность и снизить затраты. Интеграция: Наши решения легко интегрируются с существующими системами, обеспечивая бесшовную работу и совместимость. Безопасность: Мы применяем современные методы шифрования и защиты данных, что гарантирует безопасность и конфиденциальность информации. Индивидуальный подход: Мы предлагаем персонализированные решения, адаптированные под конкретные потребности и цели вашего бизнеса. Техническая поддержка: Мы предоставляем техническую поддержку, чтобы помочь вам с любыми вопросами и проблемами. Инновации: Мы используем передовые технологии, такие как блокчейн и искусственный интеллект, чтобы предложить вам самые современные и эффективные решения.',
          },
          {
            question: ' Как вы защищаете данные клиентов?',
            answer:
              'Мы применяем комплексный подход к защите данных клиентов, используя современные методы и технологии. Вот основные меры, которые мы принимаем: Шифрование данных: Все данные, передаваемые и хранящиеся в наших системах, шифруются с использованием передовых алгоритмов шифрования, что обеспечивает их защиту от несанкционированного доступа. Аутентификация и авторизация: Мы используем многофакторную аутентификацию и строгие процедуры авторизации для контроля доступа к данным. Мониторинг и аудит: Наша система постоянно мониторит активность и проводит регулярные аудиты безопасности для выявления и предотвращения потенциальных угроз. Обновления и патчи: Мы регулярно обновляем наше программное обеспечение и применяем все необходимые патчи для защиты от известных уязвимостей. Политика конфиденциальности: Мы строго соблюдаем политику конфиденциальности и обеспечиваем, чтобы все данные клиентов использовались только в рамках согласованных целей. Обучение сотрудников: Наши сотрудники проходят регулярное обучение по вопросам безопасности данных и соблюдению лучших практик. Эти меры помогают нам обеспечить высокий уровень безопасности и защитить данные наших клиентов от любых угроз.',
          },
          {
            question:
              'Как осуществляется интеграция ваших решений с существующими системами?',
            answer:
              'Интеграция наших решений с существующими системами начинается с детального анализа ваших текущих систем и бизнес-процессов, чтобы понять ваши потребности. Затем мы разрабатываем план интеграции, создаем индивидуальные решения и проводим тщательное тестирование. После успешного тестирования мы внедряем решения в вашу инфраструктуру, включая настройку и конфигурацию всех компонентов. После внедрения мы продолжаем мониторинг работы интеграционных решений и проводим регулярные оптимизации для обеспечения их максимальной эффективности и надежности. Такой подход позволяет нам обеспечить успешную интеграцию с минимальными рисками и стабильной работой.',
          },
          {
            question: ' Какие гарантии вы предоставляете на свои услуги?',
            answer:
              'Мы гарантируем работоспособность всех разрабатываемых нами продуктов и решений. На первых этапах реализации проекта мы предоставляем техническую поддержку, чтобы помочь вам с любыми возникающими вопросами и обеспечить плавное внедрение. Мы также стремимся к тому, чтобы наши услуги соответствовали оптимальному соотношению цены и качества, предлагая эффективные и надежные решения, которые удовлетворяют потребности вашего бизнеса. Наши гарантии основаны на нашем опыте и стремлении к высокому уровню обслуживания клиентов.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="faq__item"
            onClick={() => toggleFAQ(index)}
            style={{
              border:
                openIndex === index
                  ? '2px solid #AF7B20'
                  : ' 2px solid #FFFFFF66',
            }}
          >
            <p className="faq__num">{String(index + 1).padStart(2, '0')}</p>
            <div className="faq__text">
              <p className="faq__question">{item.question}</p>
              <p
                className="faq__answer"
                style={{ maxHeight: openIndex === index ? '1000px' : '0' }}
              >
                {item.answer}
              </p>
            </div>
            <img
              src={faqArrow}
              className="faq__arrow"
              style={{ transform: openIndex === index ? 'scaleY(-1)' : 'none' }}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// <div className="faq">
//   <p className="faq__title">
//     Остались вопросы? <br /> Мы готовы помочь Вам.
//   </p>

//   <div className="faq__wrapper">
//     <div className="faq__item">
//       <p className="faq__num">01</p>
//       <div className="faq__text">
//         <p className="faq__question">Какие услуги вы предоставляете?</p>
//         <p className="faq__answer">
//           Мы предоставляем услуги по автоматизации бизнес-процессов,
//           документооборота, производства и интернет-торговли, включая
//           мониторинг цен конкурентов, автоматический расчет цен,
//           синхронизацию товаров и автоматическую загрузку товаров в
//           интернет-магазины. Также мы разрабатываем Telegram-ботов для
//           различных задач, таких как боты-магазины, информационные боты,
//           чат-боты и боты с искусственным интеллектом. В области 1С мы
//           занимаемся настройкой логики, оптимизацией быстродействия,
//           разработкой модулей и интеграцией с другими системами. В сфере
//           блокчейн мы предлагаем разработку Smart контрактов, создание
//           криптобирж, майнинг пулов и интеграцию блокчейн сетей. Для CMS
//           Magento мы разрабатываем системы электронной коммерции,
//           интегрируем их с ERP и POS системами, создаем PWA приложения и
//           модули, а также занимаемся оптимизацией и поддержкой сайтов.
//         </p>
//       </div>

//       <img src={faqArrow} className="faq__arrow" alt="" />
//     </div>

//     <div className="faq__item">
//       <p className="faq__num">02</p>
//       <div className="faq__text">
//         <p className="faq__question"> Сколько стоят ваши услуги? </p>
//         <p className="faq__answer">
//           Стоимость наших услуг зависит от сложности и объема проекта.
//           Мы предлагаем индивидуальный подход к каждому клиенту, поэтому
//           для получения точной информации о стоимости, пожалуйста,
//           свяжитесь с нами для обсуждения ваших требований и получения
//           персонализированного предложения. Мы всегда готовы предложить
//           оптимальные решения, соответствующие вашему бюджету и
//           потребностям.
//         </p>
//       </div>

//       <img src={faqArrow} className="faq__arrow" alt="" />
//     </div>

//     <div className="faq__item">
//       <p className="faq__num">03</p>
//       <div className="faq__text">
//         <p className="faq__question">
//           Каковы основные преимущества ваших продуктов?
//         </p>
//         <p className="faq__answer">
//           Наши продукты и услуги обладают рядом ключевых преимуществ:
//           Автоматизация и оптимизация: Мы помогаем сократить время на
//           выполнение рутинных задач, повысить производительность и
//           снизить затраты. Интеграция: Наши решения легко интегрируются
//           с существующими системами, обеспечивая бесшовную работу и
//           совместимость. Безопасность: Мы применяем современные методы
//           шифрования и защиты данных, что гарантирует безопасность и
//           конфиденциальность информации. Индивидуальный подход: Мы
//           предлагаем персонализированные решения, адаптированные под
//           конкретные потребности и цели вашего бизнеса. Техническая
//           поддержка: Мы предоставляем техническую поддержку, чтобы
//           помочь вам с любыми вопросами и проблемами. Инновации: Мы
//           используем передовые технологии, такие как блокчейн и
//           искусственный интеллект, чтобы предложить вам самые
//           современные и эффективные решения.
//         </p>
//       </div>

//       <img src={faqArrow} className="faq__arrow" alt="" />
//     </div>

//     <div className="faq__item">
//       <p className="faq__num">04</p>
//       <div className="faq__text">
//         <p className="faq__question">
//           Как вы защищаете данные клиентов?
//         </p>
//         <p className="faq__answer">
//           Мы применяем комплексный подход к защите данных клиентов,
//           используя современные методы и технологии. Вот основные меры,
//           которые мы принимаем: Шифрование данных: Все данные,
//           передаваемые и хранящиеся в наших системах, шифруются с
//           использованием передовых алгоритмов шифрования, что
//           обеспечивает их защиту от несанкционированного доступа.
//           Аутентификация и авторизация: Мы используем многофакторную
//           аутентификацию и строгие процедуры авторизации для контроля
//           доступа к данным. Мониторинг и аудит: Наша система постоянно
//           мониторит активность и проводит регулярные аудиты безопасности
//           для выявления и предотвращения потенциальных угроз. Обновления
//           и патчи: Мы регулярно обновляем наше программное обеспечение и
//           применяем все необходимые патчи для защиты от известных
//           уязвимостей. Политика конфиденциальности: Мы строго соблюдаем
//           политику конфиденциальности и обеспечиваем, чтобы все данные
//           клиентов использовались только в рамках согласованных целей.
//           Обучение сотрудников: Наши сотрудники проходят регулярное
//           обучение по вопросам безопасности данных и соблюдению лучших
//           практик. Эти меры помогают нам обеспечить высокий уровень
//           безопасности и защитить данные наших клиентов от любых угроз.
//         </p>
//       </div>

//       <img src={faqArrow} className="faq__arrow" alt="" />
//     </div>

//     <div className="faq__item">
//       <p className="faq__num">05</p>
//       <div className="faq__text">
//         <p className="faq__question">
//           {' '}
//           Как осуществляется интеграция ваших решений с существующими
//           системами?
//         </p>
//         <p className="faq__answer">
//           Интеграция наших решений с существующими системами начинается
//           с детального анализа ваших текущих систем и бизнес-процессов,
//           чтобы понять ваши потребности. Затем мы разрабатываем план
//           интеграции, создаем индивидуальные решения и проводим
//           тщательное тестирование. После успешного тестирования мы
//           внедряем решения в вашу инфраструктуру, включая настройку и
//           конфигурацию всех компонентов. После внедрения мы продолжаем
//           мониторинг работы интеграционных решений и проводим регулярные
//           оптимизации для обеспечения их максимальной эффективности и
//           надежности. Такой подход позволяет нам обеспечить успешную
//           интеграцию с минимальными рисками и стабильной работой.
//         </p>
//       </div>

//       <img src={faqArrow} className="faq__arrow" alt="" />
//     </div>

//     <div className="faq__item">
//       <p className="faq__num">06</p>
//       <div className="faq__text">
//         <p className="faq__question">
//           {' '}
//           Какие гарантии вы предоставляете на свои услуги?
//         </p>
//         <p className="faq__answer">
//           Мы гарантируем работоспособность всех разрабатываемых нами
//           продуктов и решений. На первых этапах реализации проекта мы
//           предоставляем техническую поддержку, чтобы помочь вам с любыми
//           возникающими вопросами и обеспечить плавное внедрение. Мы
//           также стремимся к тому, чтобы наши услуги соответствовали
//           оптимальному соотношению цены и качества, предлагая
//           эффективные и надежные решения, которые удовлетворяют
//           потребности вашего бизнеса. Наши гарантии основаны на нашем
//           опыте и стремлении к высокому уровню обслуживания клиентов.
//         </p>
//       </div>

//       <img src={faqArrow} className="faq__arrow" alt="" />
//     </div>
//   </div>
// </div>;
