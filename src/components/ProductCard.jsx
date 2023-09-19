import React, { useState } from 'react'
import '../App.css'

function ProductCard({img, name}) {

  const [hovered, setHovered] = useState(false)

  return (
    <div  className='h-[370px] w-[300px] lg:w-[calc(100%/3-24px)] xl:w-[calc(100%/4-24px)] bg-white rounded-md shadow flex-shrink-0' >
        <img src={`/images/${img}.png`} alt="" className='w-full h-[200px] object-contain p-4' />
        <div className='flex flex-col gap-4 p-4 mt-4' >
            <p className='font-bold  text-[24px] text-[#009864] text-center' >{name}</p>
            <button onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)} className='group flex justify-center items-center gap-4 p-3 bg-white hover:bg-[#009864] border border-[#009864] rounded-md transition duration-300' >
                <img src={`${hovered?'/images/white-eye.png':'/images/green-eye.png'}`} alt="" className='h-7 w-7' />
                <p className='font-semibold text-[#009864] group-hover:text-white' >Plus de Détail</p>
            </button>
        </div>
    </div>
  )
}

export default ProductCard