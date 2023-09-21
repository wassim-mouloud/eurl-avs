import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProduitsUne from '../components/ProduitsUne'
import Why from '../components/Why'
import Contact from '../components/Contact'

function MainPage({openNav, setOpenNav}) {

  const [open, setOpen] = useState(false)

  return (
    <div className='h-[400vh]' >
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        <Hero/>
        <Why/>
        <Contact/>
    </div>
  )
}

export default MainPage