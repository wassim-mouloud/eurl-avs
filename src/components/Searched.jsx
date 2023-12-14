import React from 'react'
import { Link } from 'react-router-dom'

function Searched({name, img, id, setOpenNav}) {
  return (
    <Link onClick={()=> setOpenNav(false)} to={`/ProductDetail/${id}`} className='flex items-center gap-4 mt-4 bg-white rounded-md cursor-pointer lg:ml-9 w-[calc(100%-28px-8px)]' >
        <img src={img} alt="" className='h-[70px] lg:h-[100px] rounded-md'/>
        <p className='font-semibold text-black text-[16px] md:text-[18px] lg:text-[22px]' >{name}</p>
    </Link>
  )
}

export default Searched