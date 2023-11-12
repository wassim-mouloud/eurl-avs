import React from 'react'

function Searched({name, img}) {
  return (
    <div className='flex items-center w-full gap-4 mt-4 rounded-md cursor-pointer hover:bg-white ml-9' >
        <img src={img} alt="" className='h-[100px] rounded-md'/>
        <p className='font-semibold text-black ' >{name}</p>
    </div>
  )
}

export default Searched