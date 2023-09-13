import React, { useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div
      id="Acceuil"
      className="flex flex-col items-center justify-center gap-8 lg:mb-[80px] lg:mt-[80px]"
    >
      <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:gap-10  w-screen md:w-[80vw] lg:w-[90vw] lg:mx-auto gap-6 p-6 lg:p-0 ">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:w-[50%] flex flex-col items-center gap-6 lg:items-start "
        >
          <motion.h1 className="text-black text-center lg:text-left font-bold text-[28px] md:text-[36px] lg:text-[36px] xl:text-[42px] ">
            <span className="text-[#009864]" >Algerian</span> Veterinary Service : Toujours au <span className="text-[#009864]">service</span>{" "}
            de l'humanité{" "}
          </motion.h1>
          <motion.p className="text-center  lg:text-left text-[#2F4858] text-[12px] md:text-[16px] lg:text-[16px]  font-medium w-[80%]">
                Nous sommes une société algérienne de distribution de produits vétérinaires depuis 2005 à laquelle la communauté peut se fier. Située dans la ville de Blida , notre équipe aimable et compétente fournit aux clients les médicaments adéquats ainsi que d'autres produits pharmaceutiques à usage vétérinaire . 
          </motion.p>
          <motion.div className="flex gap-6 lg:gap-8 md:gap-14">
            <a
              href="/reservation"
              className={`b1 p-1 font-semibold text-[12px] text-white lg:text-[14px]  hover:text-[#009864] flex justify-center items-center w-[140px] lg:w-[190px] h-[45px] bg-[#009864] hover:bg-white rounded-md transition-all duration-300 border border-solid   hover:border-[#009864]  `}
            >
              Produits à la une
            </a>
            <a href="#Programme">
              <button
                className={`b2 p-1 font-semibold text-[12px] lg:text-[14px] text-[#009864] hover:text-white flex justify-center items-center w-[140px] lg:w-[190px] h-[45px] bg-white hover:bg-[#009864] rounded-md border-[1px] border-solid border-[#009864] hover:border-white transition-all duration-300 `}
              >
                Nous contacter
              </button>
            </a>
          </motion.div>
        </motion.div>
        <motion.img
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src="./images/cat.png"
          alt="rocket launch"
          className="lg:max-h-[400px] xl:max-h-[500px] my-auto rounded-md"
        />
      </div>

    </div>
  );
}

export default Hero;
