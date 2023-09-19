import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProduitsUne from '../components/ProduitsUne'

function MainPage({openNav, setOpenNav}) {

  const [open, setOpen] = useState(false)

  return (
    <div className='h-[400vh]' >
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        <Hero/>
        <ProduitsUne/>
        <div className='m-[100px] flex flex-col gap-1' >
            <div onClick={() => setOpen(!open)}  className='h-[30px] w-[200px] bg-white border border-[#009864] flex items-center justify-between py-2 px-4' >
              <p className='text-black' >categorie</p>
              <img src="/images/dropDown.png" alt="" className='w-4 h-4' />
            </div>
            <div className={`w-[200px] bg-white  ${open?'border border-[#009864]': 'h-0'} py-2 px-4 `} >
              <p className={`${open?'flex':'hidden'}`} >Solution Injectable</p>
              <p className={`${open?'flex':'hidden'}`} >Solution orale</p>
              <p className={`${open?'flex':'hidden'}`} >Poudre Oral</p>
              <p className={`${open?'flex':'hidden'}`} >Vaccins</p>
            </div>
        </div>
    </div>
  )
}

export default MainPage