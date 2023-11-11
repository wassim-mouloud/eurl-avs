import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProduitsUne from '../components/ProduitsUne'
import Why from '../components/Why'
import Contact from '../components/Contact'
import SocialMedia from '../components/SocialMedia'

function MainPage({openNav, setOpenNav, products}) {


  return (
    <div className='' >
        <Navbar openNav={openNav} setOpenNav={setOpenNav} products={products} />
        <Hero/>
        <Why/>
        <Contact/>
        <SocialMedia/>
    </div>
  )
}

export default MainPage