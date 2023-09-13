import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProduitsUne from '../components/ProduitsUne'

function MainPage({openNav, setOpenNav}) {
  return (
    <div>
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        <Hero/>
        <ProduitsUne/>
    </div>
  )
}

export default MainPage