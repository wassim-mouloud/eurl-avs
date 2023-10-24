import React from 'react'

function FilterItem({open, category, handleClick}) {
  return (
    <div onClick={() => handleClick(category)} className={`flex items-center  h-[40px] ${open?"hover:bg-[rgba(0,0,0,0.1)]":""} p-4 rounded-[20px]`} >
      <p className={`${open?'flex':'hidden'}`  } >{category}</p>
    </div>
  )
}

export default FilterItem