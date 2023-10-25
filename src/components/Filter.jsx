import React, { useState } from 'react'
import FilterItem from './FilterItem'

function Filter({category, setCategory}) {
   
  const [open, setOpen] = useState(false)

  const handleClick = (category) =>{
    setCategory(category)
    setOpen(false)
  }

  return (
    <div className='z-0 flex flex-col gap-2 my-4' >
        <div onClick={() => setOpen(!open)}  className='h-[40px] w-[200px] lg:w-[300px] bg-white border border-[#009864] flex items-center justify-between py-2 px-4 rounded-[20px] z-[99]' >
          <p className='text-black' >{category}</p>
          <img src="/images/dropDown.png" alt="" className='w-4 h-4' />
        </div>
        <div className={`w-[200px] lg:w-[300px] bg-white  ${open?'border border-[#009864]': 'h-0'} py-4 rounded-[20px] flex flex-col gap-2 justify-center`} >
          <FilterItem open={open} category='Tous les produits' handleClick = {handleClick} />
          <FilterItem open={open} category='Solution Injectable' handleClick = {handleClick} />
          <FilterItem open={open} category='Solution Orale' handleClick = {handleClick} />
          <FilterItem open={open} category='Poudre Orale' handleClick = {handleClick} />
          <FilterItem open={open} category='Vaccins' handleClick = {handleClick} />
          <FilterItem open={open} category='Suspension injectable' handleClick = {handleClick} />
        </div>
    </div>

  )
}

export default Filter