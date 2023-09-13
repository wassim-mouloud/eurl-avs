import React, { useState } from 'react'
import ProductCard from './ProductCard'

function ProduitsUne() {

    const [slider, setSlider] = useState([0,1,2,3,4,5,6,7])

  return (
    <div className='' >
        <h2 className='my-6 font-bold text-center text-black text-[24px]' >Produits à la une</h2>
        <div className='' >
            <div className='flex items-center h-[390px] gap-4 overflow-x-scroll p-4' >
                {slider.map((card =>{
                    return (
                        <ProductCard img='med' name='Pharmasin' price='2500' />
                    )
                }))}
            </div>
        </div>
    </div>
  )
}

export default ProduitsUne