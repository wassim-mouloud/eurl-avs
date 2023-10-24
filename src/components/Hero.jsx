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
      className="flex flex-col items-center justify-center  gap-[50px] lg:gap-[40px] lg:my-[60px]"
    >
      <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:gap-10  w-screen md:w-[80vw] lg:w-[970px] xl:w-[1200px] lg:mx-auto gap-6 p-6 lg:p-0 ">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:w-[450px] xl:w-[610px] flex flex-col items-center gap-6 lg:items-start "
        >
          <motion.h1 className="text-black text-center lg:text-left font-bold text-[28px] md:text-[36px] lg:text-[32px] xl:text-[42px] ">
            <span className="text-[#17a841]" >Toujours</span > au service de la profession Notre <span className="text-[#17a841]" >expérience</span> de 25 ans Marché vétérinaire 
          </motion.h1>
          <motion.p className="text-center  lg:text-left text-[#2F4858] text-[12px] md:text-[16px] lg:text-[16px]  font-normal ">
            Nous sommes une société algérienne de distribution de produits vétérinaires à laquelle la communauté peut se fier. Située dans la ville de Blida , notre équipe aimable et compétente fournit aux clients les médicaments adéquats ainsi que d'autres produits à usage vétérinaire .          </motion.p>

        </motion.div>
        <motion.img
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src="./images/kelb.jpg"
          alt=""
          className="lg:w-[480px] xl:w-[550px] "
        />
      </div>

    </div>
  );
}

export default Hero;
