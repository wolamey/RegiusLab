import "./App.scss";
import Header from "../Components/Header/Header";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";
import Cookies from "../Components/Cookies/Cookies";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import NoPage from "../Pages/NoPage/NoPage";
import Privacy from "../Pages/Pivacy/Privacy";
import Terms from "../Pages/Terms/Terms";
import CookieSettings from "../Pages/CookieSettings/CookieSettings";
import serviceDb from "../data/services.json";
// import Service from '../Pages/Service/Service';
import Blockchain from "../Pages/Blockchain/Blockchain";
import Automatization from "../Pages/Automatization/Automatization";
import TelegramBots from "../Pages/TelegramBots/TelegramBots";
import Game from "../Pages/Game/Game";
import Questions from "../Pages/Questions/Questions";
import Thanks from "../Pages/Thanks/Thanks";
import OneCDev from "../Pages/OneCDev/OneCDev";
import SitesDev from "../Pages/SitesDev/SitesDev";
import Bitrix24 from "../Pages/Bitrix24/Bitrix24";
import ChatGPT from "../Pages/ChatGPT/ChatGPT";
import CyberSecurity from "../Pages/CyberSecurity/CyberSecurity";
import { useCookies } from "react-cookie";
function App() {
  const [bodyScroll, setBodyScroll] = useState(true);
  useEffect(() => {
    document.querySelector("body").style.overflow = bodyScroll
      ? "visible"
      : "hidden";
  }, [bodyScroll]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  const navigate = useNavigate();
  // const [cookie, setCookie] = useCookies(["is_overed_game"]);
  // useEffect(() => {
  //   if (!cookie.is_overed_game) {
  //     navigate("/game");
  //   }
  // }, []);

  return (
    <div className="app">
      <div className="app__container">
        <Header bodyScroll={bodyScroll} setBodyScroll={setBodyScroll} />

        <Routes>
          <Route path="/" element={<Home serviceDb={serviceDb} />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-settings" element={<CookieSettings />} />

          <Route path="/blockchain&web3" element={<Blockchain />} />
          <Route path="/automatization" element={<Automatization />} />
          <Route path="/telegram-bots" element={<TelegramBots />} />
          <Route path="/1c-development" element={<OneCDev />} />
          <Route path="/sites-dev" element={<SitesDev />} />
          <Route path="/b24" element={<Bitrix24 />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
         
          {/*  <Route path="/chat-Rgpt" element={<ChatGPT />} /> */}
          
          <Route path="/noPage" element={<NoPage />} />

          {/* <Route path="/game" element={<Game />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/questions" element={<Questions />} /> */}

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />

        <Cookies />
      </div>
    </div>
  );
}

export default App;
