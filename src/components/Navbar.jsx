import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import Searched from "./Searched";
function Navbar({ openNav, setOpenNav, products }) {

  const [openSearch, setOpenSearch]= useState(false)
  const [input, setInput] = useState("")
  const [filtered, setFiltered] = useState([])
  const sleep= ms=> new Promise(resolve => setTimeout(resolve, ms))
  const appear ={
    hidden: { opacity: 0},
    show: { opacity: 1,
            transition:{
                duration:0.7
            }
    }
  }

  const clickBurger = async ()=>{
    setOpenNav(!openNav)
    await sleep(500)
    setOpenSearch(false)
  }

  const inputElement = useRef(null);
  const mobileInputElement = useRef(null);
  
  useEffect(() => {
    if (inputElement.current || mobileInputElement.current) {
      inputElement?.current.focus();
      mobileInputElement?.current.focus();
    }
  }, [openSearch]);
  
  useEffect(() => {
    if (input && products) {
      setFiltered(products.filter(product => product.name.toLowerCase().startsWith(input.toLowerCase())));
    } else {
      setFiltered([]); 
    }
  }, [input, products]);

  useEffect(()=>{
    console.log(filtered)
  }, [input])




  return (
    <div className={` ${openSearch?'bg-[#f5f5f7] h-screen':'h-[100px] bg-white'}  transition-all duration-[700ms] hover:flex-col gap-3  z-[99]`} >
      <div className="relative h-[100px] w-screen  flex p-4 lg:p-3 justify-between items-center ">
        <Link to='/' onClick={() => setOpenNav(false)} >
          <img
            className="h-[50px] ml-5 md:h-[60px] z-[99] p-1"
            src="/images/avs.png"
            alt=""
          />
        </Link>
        <div
          className={`flex flex-col gap-1 w-[30px] cursor-pointer lg:hidden z-[99]`}
          onClick={clickBurger}>
      
          <span
            className={`h-[3px]  bg-[#17a841] rounded-[5px] transition-all ${
              openNav ? "rotate-45 translate-y-[7px] " : ""
            }`}
          ></span>
          <span
            className={`h-[3px]  bg-[#17a841] rounded-[5px] transition-all ${
              openNav ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-[3px]  bg-[#17a841] rounded-[5px] transition-all ${
              openNav ? "-rotate-45 -translate-y-[7px] " : ""
            } `}
          ></span>
        </div>
      
      
        <div
          className={`overflow-x-hidden absolute lg:static top-0 left-0   ${openSearch?'bg-[#f5f5f7]':'bg-white'} flex  flex-col lg:flex-row items-center justify-center lg:justify-end lg:pr-10 w-screen lg:w-[60%] h-screen lg:h-full gap-10 transition-transform lg:transition-all  duration-500 lg:duration-[700ms]  ${
            openNav ? "translate-y-0" : "translate-y-[-100%] lg:translate-y-0"
          }`} >
          <div className={`w-screen flex-col gap-2 ${openSearch?'lg:hidden flex ':'hidden'} ml-5`} >
            <div className="flex items-center w-[90vw] gap-2" >
              <img src="/images/search.png" alt="" className="w-5 h-5 lg:w-7 lg:h-7"/>
              <input onChange={(e)=> setInput(e.target.value)}  ref={mobileInputElement} type="text" placeholder= "Rechercher un produit" className={`w-[250px] outline-[#009864] text-black font-semibold text-[20px] p-4`}/>
            </div>
            <div className="flex flex-col w-[90vw] gap-1 ml-[28px]" >
              {filtered.map((prod)=>{
                return(
                  <Searched name = {prod.name} img = {prod.imgUrl} id={prod.id} setOpenNav={setOpenNav} />
                ) 
              })}
            </div>
          </div>
          <Link to='/' onClick={() => setOpenNav(false)} className="" >
            <p
              className={`nav-element relative text-black lg:text-gray-600 transition-all lg:duration-200 lg:hover:text-black text-[20px] lg:text-[16px] font-bold  cursor-pointer duration-500 ${
                openNav ? "translate-x-0" : "translate-x-[-300%] lg:translate-x-0"
              } ${openSearch?'search':''}` }
            >
              Accueil
            </p>
          </Link>
          <Link to='/AllProducts' onClick={() => setOpenNav(false)}>
            <p
              className={`nav-element relative text-black lg:text-gray-600 transition-all lg:duration-200 lg:hover:text-black text-[20px] lg:text-[16px] font-bold  cursor-pointer duration-500 delay-100 lg:delay-0 ${
                openNav ? "translate-x-0" : "translate-x-[-200%] lg:translate-x-0"
              } ${openSearch?'search':''}`}
            >
              Nos produits
            </p>
          </Link>
          <a href="#Rechercher" onClick={() => setOpenSearch(!openSearch)}>
            <p
              className={`nav-element relative text-black lg:text-gray-600 transition-all lg:duration-200 lg:hover:text-black text-[20px] lg:text-[16px] font-bold  cursor-pointer duration-500 delay-100 lg:delay-0 ${
                openNav ? "translate-x-0" : "translate-x-[-200%] lg:translate-x-0"
              } ${openSearch?'search':''}`}
            >
              Rechercher
            </p>
          </a>
          <a href="#Contact" onClick={() => setOpenNav(false)}>
            <p
              className={`nav-element relative text-black lg:text-gray-600 transition-all lg:duration-200 lg:hover:text-black text-[20px] lg:text-[16px] font-bold  cursor-pointer duration-500 delay-200 lg:delay-0 ${
                openNav ? "translate-x-0" : "translate-x-[-200%] lg:translate-x-0"
              } ${openSearch?'search':''}`}
            >
              Contact
            </p>
          </a>
        </div>
      </div>

      <motion.div initial='hidden' whileInView='show' variants={appear} className={`w-[1000px] h-[70px]  mx-auto  items-center gap-2 hidden ${openSearch?'lg:flex flex-col':''}`} >
            <div className="flex items-center w-full gap-2" >
              <img src="/images/search.png" alt="" className="w-7 h-7" />
              <input onChange={(e)=> setInput(e.target.value)}  ref={inputElement} type="text" placeholder= "Rechercher un produit" className={` w-[calc(100%-28px-8px)] outline-[#009864] text-black font-semibold text-[20px] p-4`}/>
            </div>
            <div className="flex flex-col w-full gap-3" >
              {filtered.map((prod)=>{
                return(
                  <Searched name = {prod.name} img = {prod.imgUrl} id={prod.id} />
                ) 
              })}
            </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
