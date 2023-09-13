import React from 'react'
import '../App.css'

function ProductCard({img, name, price}) {
  return (
    <div className='h-[370px] w-[300px] bg-white rounded-md shadow flex-shrink-0' >
        <img src={`/images/${img}.png`} alt="" className='w-full h-[200px] object-contain p-4' />
        <div className='flex flex-col gap-4 p-4 mt-4' >
            <p className='font-bold  text-[24px] text-[#009864] text-center' >{name}</p>
            {/* <div className='flex gap-3' >
                <p className='text-black text-[20px] font-semibold' >Prix :</p>
                <p className='text-black font-semibold text-[20px]' >{price} DA</p>
            </div> */}
            <button className='flex justify-center items-center gap-4 p-3 bg-white border border-[#009864] rounded-md' >
                <img src="/images/green-eye.png" alt="" className='h-7 w-7' />
                <p className='font-semibold text-[#009864]' >Plus de Détail</p>
            </button>
        </div>
    </div>
  )
}

export default ProductCard