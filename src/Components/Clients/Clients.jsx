

import { useEffect } from 'react';
import './Clients.scss'; // Import the CSS file

import stack1 from '../../assets/client1.png';
import stack2 from '../../assets/client2.svg';
import stack3 from '../../assets/client3.png';
import stack4 from '../../assets/client4.png';
import stack5 from '../../assets/client5.png';
import stack6 from '../../assets/client6.svg';
import stack7 from '../../assets/client7.png';
import stack8 from '../../assets/client8.jpg';
import stack9 from '../../assets/client9.svg';
import stack10 from '../../assets/client10.svg';


const Clients = () => { 
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed2 = getComputedStyle(root).getPropertyValue(
      '--marquee-elements-displayed2'
    );
    const marqueeContent2 = document.querySelector('ul.marquee-content2');

    root.style.setProperty(
      '--marquee-elements2',
      marqueeContent2.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed2; i++) {
      marqueeContent2.appendChild(marqueeContent2.children[i].cloneNode(true));
    }
  }, []);

  return (
    
    <div className="marquee2">
      <ul className="marquee-content2">
        <li>
          <img src={stack1} alt="" className="fab2 " />
        </li>
        <li>
          <img src={stack2} alt="" className="fab2 " />
        </li>
        <li>
          <img src={stack3} alt="" className="fab2 " />
        </li>
        <li>
          <img src={stack4} alt="" className="fab2 " />
        </li>
    <li>
          <img src={stack5} alt="" className="fab2 " />
        </li>
            <li>
          <img src={stack6} alt="" className="fab2 " />
        </li>
            <li>
          <img src={stack7} alt="" className="fab2 " />
        </li>
            <li>
          <img src={stack8} alt="" className="fab2 " />
        </li>
            <li>
          <img src={stack9} alt="" className="fab2 " />
        </li>
            <li>
          <img src={stack10} alt="" className="fab2 " />
        </li>
      
      </ul>
    </div>
  );
};

export default Clients;
