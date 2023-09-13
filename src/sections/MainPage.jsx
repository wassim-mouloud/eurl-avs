import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

function MainPage({openNav, setOpenNav}) {
  return (
    <div>
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        <Hero/>
    </div>
  )
}

export default MainPage