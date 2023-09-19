import React from 'react'

function CategoryButton({category}) {
  return (
    <button className='group hover:bg-[#009864] w-[200px] h-[40px] rounded-[12px]  border-[#009864] border-[1.5px] flex justify-center items-center my-4 transition duration-300' >
        <p className='font-medium text-[16px] text-[#009864] group-hover:text-white' >{category}</p>
    </button>
  )
}

export default CategoryButton