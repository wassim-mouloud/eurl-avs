import React from 'react'

function ContactCard({img, title, detail, href}) {
  return (
    <a href={href} target='_blank'>
        <div className='flex flex-col gap-8 justify-center items-center border border-[#009864] bg-white w-[90vw] md:w-[400px] h-[230px] lg:h-[250px] lg:w-[320px] xl:w-[400px] rounded-xl' >
            <div className='flex items-center justify-center rounded-full h-[60px] w-[60px] bg-[rgba(0,152,100,0.2)]' >
                <img src={`/images/${img}.png`} alt="" className='w-8 h-8'/>
            </div>
            <div className='flex flex-col items-center gap-3' >
                <p className='font-semibold text-[22px] tracking-[2px]' >{title}</p>
                <p className='font-medium tracking-[1px] text-center' >{detail}</p>
            </div>
        </div>
    </a>
  )
}

export default ContactCard