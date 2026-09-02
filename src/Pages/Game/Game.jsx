import React, { useState } from "react";
import four0four from "/img/four0four.svg";
import sadRobot from "/img/sadRobot.svg";
import { useNavigate } from "react-router-dom";
import VantaBackground from "../../Components/VantaBackgtound";
import { useCookies } from "react-cookie";
export default function Game() {
  const [popup, setPopup] = useState(false);
  const [cookie, setCookie] = useCookies(["is_overed_game"]);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      serviceName: "ai conference 2025",
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setCookie("is_overed_game", true, {
        path: "/",
        expires: new Date("2099-12-31"),
      });
      navigate("/thanks");

      await response.json();
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
    <div className="fixed h-screen w-screen flex justify-center items-center bg-black top-0 left-0 right-0 bottom-0">
      <div className="  absolute h-full w-full opacity-50 overflow-hidden ">
        <VantaBackground />
      </div>
      <div className="relative">
        <div className="max-h-[120px] flex items-center justify-center">
          <img
            className="w-full   object-cover object-center"
            src={four0four}
            alt=""
          />
        </div>
        <p className="text-white mt-[20px] leading-[24px] font-semibold text-center w-[90%] !m-auto text-[20px]  tracking-[1.2px]">
          Упс, кажется, ты сломал AI робота...
        </p>

        <div className="bg-[#41928977] rounded-[10px] !p-[6px_20px] w-[90%] max-w-[450px] text-white font-semibold text-[20px] text-center leading-[24px] tracking-[1.2px] !m-[25px_auto_0px_auto] border-1 border-[#72FFEC] backdrop-blur-[2px] shadow-[0px_0px_48.7px_0px_rgba(114,_255,_236,_0.66)]">
          Но ты можешь спасти робота всего в пару кликов!
        </div>

        <div className="relative !h-[185px] flex items-end  !w-[90%] !m-auto  max-w-[350px]">
          <button
            className="cursor-pointer bg-[#5BD3C3] rounded-[100px] !p-[11px_35px] whitespace-nowrap text-[26px] font-bold uppercase text-white animate__animated  animate__infinite animate__pulse"
            onClick={() => setPopup(true)}
          >
            Спасти робота
          </button>

          <img
            src={sadRobot}
            className="absolute right-0 top-0 outline-0 animate__animated animate__pulse animate__infinite"
            alt=""
          />
        </div>
      </div>

      <div
        className={`${
          !popup ? "top-[-100%]" : "top-[50%]"
        } max-w-[600px] max-h-[600px] flex flex-col justify-center items-center absolute translate-x-[-50%] translate-y-[-50%]
 w-[95%] h-[80%]  left-[50%] border-1 border-[#72FFEC] shadow-[0px_0px_44.3px_0px_rgba(255,_255,_255,_0.34)_inset] bg-[#627e7bd1] rounded-[18px] backdrop-blur-[5px] !p-[30px_20px] `}
      >
        <div className="absolute top-[5%]" onClick={() => setPopup(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.7071 0.292893C16.0976 0.683417 16.0976 1.31658 15.7071 1.70711L1.70711 15.7071C1.31658 16.0976 0.683417 16.0976 0.292893 15.7071C-0.0976311 15.3166 -0.0976311 14.6834 0.292893 14.2929L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893Z"
              fill="white"
            />
          </svg>
        </div>

        <p className="text-white text-[26px] text-center  leading-[28px] !mb-[40px] ">
          Заполните эти поля и спасите робота!
        </p>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-[20px]"
        >
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
            className="outline-none !text-white !p-[10px_20px] w-full  border-1 border-[#FFF] rounded-[15px] bg-white/30 focus-visible:bg-white/10  !placeholder-white/70 "
          />
          <input
            type="tel"
            required
            onChange={handleChange}
            value={phone}
            placeholder="Номер телефона"
            className="outline-none !text-white !p-[10px_20px] w-full  border-1 border-[#FFF] rounded-[15px] bg-white/30 focus-visible:bg-white/10  !placeholder-white/70 "
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            placeholder="Email"
            className="outline-none !text-white !p-[10px_20px] w-full  border-1 border-[#FFF] rounded-[15px] bg-white/30 focus-visible:bg-white/10  !placeholder-white/70 "
          />
          <div className="w-fit flex justify-center items-center gap-[20px]">
            <input
              required
              className="custom-checkbox text-white "
              type="checkbox"
              id="checkbox2"
            />
            <label
              className=" text-white  leading-[18px] text-[14px]"
              htmlFor="checkbox2"
            >
              Нажимая "Спасти робота" вы соглашаетесь с обработкой персональных
              данных
            </label>
          </div>

          <input
            type="submit"
            className="cursor-pointer bg-[#5BD3C3] rounded-[100px] !p-[11px_20px] whitespace-nowrap text-[20px] font-bold uppercase text-white animate__animated  animate__infinite animate__pulse"
            value={"   Спасти робота"}
          />
        </form>
      </div>
    </div>
  );
}
