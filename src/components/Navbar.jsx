import React from "react";
import "../App.css";

function Navbar({ openNav, setOpenNav }) {
  return (
    <div className="relative h-[8vh] w-screen bg-white flex p-5 lg:p-3 justify-between items-center ">
      <img
        className="h-[50px] md:h-[60px] z-[99] p-1"
        src="./images/logo.png"
        alt=""
      />
      <div
        className={`flex flex-col gap-1 w-[30px] cursor-pointer lg:hidden z-[99]`}
        onClick={() => setOpenNav(!openNav)}
      >
        <span
          className={`h-[3px]  bg-[#306DC9] rounded-[5px] transition-all ${
            openNav ? "rotate-45 translate-y-[7px] " : ""
          }`}
        ></span>
        <span
          className={`h-[3px]  bg-[#306DC9] rounded-[5px] transition-all ${
            openNav ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-[3px]  bg-[#306DC9] rounded-[5px] transition-all ${
            openNav ? "-rotate-45 -translate-y-[7px] " : ""
          } `}
        ></span>
      </div>
      <div
        className={`absolute lg:static top-0 left-0  bg-white flex flex-col lg:flex-row items-center justify-center lg:justify-end lg:pr-10 w-screen lg:w-[60%] h-screen lg:h-full gap-10 transition-transform duration-500  ${
          openNav ? "translate-y-0" : "translate-y-[-100%] lg:translate-y-0"
        }`}
      >
        <a href="#Acceuil" onClick={() => setOpenNav(false)}>
          <p
            className={`nav-element relative text-black lg:text-gray-600 transition-all lg:duration-200 lg:hover:text-black text-[20px] lg:text-[16px] font-bold  cursor-pointer duration-500 ${
              openNav ? "translate-x-0" : "translate-x-[-300%] lg:translate-x-0"
            }`}
          >
            Accueil
          </p>
        </a>
        <a href="#Programme" onClick={() => setOpenNav(false)}>
          <p
            className={`nav-element relative text-black lg:text-gray-600 transition-all lg:duration-200 lg:hover:text-black text-[20px] lg:text-[16px] font-bold  cursor-pointer duration-500 delay-100 lg:delay-0 ${
              openNav ? "translate-x-0" : "translate-x-[-200%] lg:translate-x-0"
            }`}
          >
            Programme
          </p>
        </a>
        <a href="#Enseignants">
          <p
            className={`nav-element relative text-black lg:text-gray-600 transition-all lg:duration-200 lg:hover:text-black text-[20px] lg:text-[16px] font-bold  cursor-pointer duration-500 delay-200 lg:delay-0 ${
              openNav ? "translate-x-0" : "translate-x-[-200%] lg:translate-x-0"
            }`}
          >
            Enseignants
          </p>
        </a>
        <a href="#Galerie" onClick={() => setOpenNav(false)}>
          <p
            className={`nav-element relative text-black lg:text-gray-600 transition-all lg:duration-200 lg:hover:text-black text-[20px] lg:text-[16px] font-bold  cursor-pointer duration-500 delay-300 lg:delay-0 ${
              openNav ? "translate-x-0" : "translate-x-[-200%] lg:translate-x-0"
            }`}
          >
            Galerie
          </p>
        </a>
        <p
          className={`nav-element relative text-black lg:text-gray-600 transition-all lg:duration-200 lg:hover:text-black text-[20px] lg:text-[16px] font-bold  cursor-pointer duration-500 delay-300 lg:delay-0 ${
            openNav ? "translate-x-0" : "translate-x-[-200%] lg:translate-x-0"
          }`}
        >
          Inscription
        </p>
      </div>
    </div>
  );
}

export default Navbar;
