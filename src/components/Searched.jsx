import React from 'react'

function Searched({name, img}) {
  return (
    <div className='flex items-center gap-4' >
        <img src={img} alt="" className='h-[70px]'/>
        <p className='font-semibold text-black ' >{name}</p>
    </div>
  )
}

export default Searched