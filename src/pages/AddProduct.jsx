import React, { useState } from 'react'
import Authentication from '../components/Authentication'

function AddProduct({openNav, setOpenNav}) {

  const [verified, setVerified] = useState(false)

  return (
    <div className='flex items-center justify-center h-screen' >
      {
        !verified?(
          <Authentication verified={verified} setVerified={setVerified} />
        ):(
          <div className='flex flex-col items-center justify-center gap-6' >
            <input type="text" placeholder='Nom du produit' className='w-[90vw] p-5 text-[16px] h-[50px] rounded-md border border-[#009864]'/>
            <textarea type="text" placeholder='Description du produit' className='w-[90vw] p-5 text-[16px] h-[200px] rounded-md border border-[#009864]' />
            <input type="file" />
            <button className='flex items-center justify-center text-white bg-[#009864] rounded-md h-[40px] w-[90vw]' >Ajouter</button>
          </div>
        )
      }
        
    </div>
  )
}

export default AddProduct