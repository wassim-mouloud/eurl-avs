import React from 'react'

function Reason({icon, title, paragraph}) {
  return (
    <div className='w-[90vw] sm:w-[550px] md:w-[370px] xl:w-[440px] flex flex-col gap-4' >
        <img src={`/images/${icon}.png`} alt="" className='w-[60px] sm:w-[70px] xl:w-[80px] h-[60px] sm:h-[70px] xl:h-[80px]' />
        <h2 className='text-white text-[24px] sm:text-[26px] md:text-[24px] xl:text-[28px] font-semibold' >{title}</h2>
        <p className='text-white xl:text-[18px]' >{paragraph}</p>
    </div>
  )
}

export default Reason