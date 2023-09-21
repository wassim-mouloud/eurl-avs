import React, { useState } from 'react'
import FilterItem from './FilterItem'

function Filter({}) {
   
  const [open, setOpen] = useState(false)

  return (
    <div className='flex flex-col gap-2 my-4 ' >
        <div onClick={() => setOpen(!open)}  className='h-[40px] w-[200px] lg:w-[300px] bg-white border border-[#009864] flex items-center justify-between py-2 px-4 rounded-[20px] z-[99]' >
          <p className='text-black' >categorie</p>
          <img src="/images/dropDown.png" alt="" className='w-4 h-4' />
        </div>
        <div className={`w-[200px] lg:w-[300px] bg-white  ${open?'border border-[#009864]': 'h-0'} py-4 rounded-[20px] flex flex-col gap-2 justify-center`} >
          <FilterItem open={open} category='Solution Injectable'/>
          <FilterItem open={open} category='Solution Orale'/>
          <FilterItem open={open} category='Poudre Orale'/>
          <FilterItem open={open} category='Vaccins'/>
        </div>
    </div>

  )
}

export default Filter