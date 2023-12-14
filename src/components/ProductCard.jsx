import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function ProductCard({img, name, id}) {

  const [hovered, setHovered] = useState(false)

  return (
    <Link to={`/ProductDetail/${id}`} className='h-[400px] w-[300px] lg:w-[calc(100%/3-24px)] xl:w-[calc(100%/4-24px)] bg-white rounded-md shadow flex-shrink-0 flex flex-col justify-start' >
        <img src={img} alt="" className='w-full h-[220px] object-cover object-center' />
        <div className='flex flex-col gap-4 p-4 mt-4' >
            <p className='font-bold text-[18px] md:text-[24px] text-[#009864] text-center' >{name}</p>
            <button onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)} className='group flex justify-center items-center gap-4 p-3 bg-white hover:bg-[#009864] border border-[#009864] rounded-md transition duration-300' >
                <img src={`${hovered?'/images/white-eye.png':'/images/green-eye.png'}`} alt="" className='h-7 w-7' />
                <p className='font-semibold text-[#009864] group-hover:text-white' >Plus de Détail</p>
            </button>
        </div>
    </Link>
  )
}

export default ProductCard