import React, { useState, useRef } from 'react'
import ProductCard from './ProductCard'

function ProduitsUne() {

    const [slider, setSlider] = useState([0,1,2,3,4,5,6,7])
    const [index, setIndex] = useState(0);
    const sliderRef = useRef(null);

    const handlePrev = () => {
        let size = sliderRef.current.offsetWidth;
        let halfSize = size / 2;
        let newIndex = index === 0 ? -3 : index + 1;
        setIndex(newIndex);
        sliderRef.current.style.transition = "transform 0.7s linear";
        sliderRef.current.style.transform =
          "translateX(" + halfSize * newIndex + "px)";
      };
      const handleNext = () => {
        let size = sliderRef.current.offsetWidth;
        let halfSize = size / 2;
        let newIndex = index === -3 ? 0 : index - 1;
        setIndex(newIndex);
        sliderRef.current.style.transition = "transform 0.7s linear";
        sliderRef.current.style.transform =
          "translateX(" + halfSize * newIndex + "px)";
      };

  return (
    <div className='flex flex-col items-center' >
        <h2 className='my-6 font-bold text-center text-black text-[24px]' >Produits à la une</h2>
        <div className='relative overflow-x-hidden h-[395px] w-screen  lg:w-[1000px] xl:w-[1400px] flex items-center justify-center ' >
            <button onClick={handlePrev} className=' hidden lg:flex justify-center items-center w-[50px]  bg-[#009864]  h-[50px] rounded-full absolute left-0  top-[50%] centerY z-[99]' >
                <img src="/images/left-chevron.png" alt="" className='w-6 h-6' />
            </button>
      
            <div ref={sliderRef} className='flex items-center h-[390px] w-full gap-6 overflow-x-scroll lg:overflow-x-visible px-4' >
                {slider.map((card =>{
                    return (
                        <ProductCard img='med' name='Pharmasin' price='2500' />
                    )
                }))}
            </div>
            <button onClick={handleNext} className=' hidden lg:flex justify-center items-center w-[50px]  bg-[#009864]  h-[50px] rounded-full absolute right-0  top-[50%] centerY z-[99]' >
                <img src="/images/right-chevron.png" alt="" className='w-6 h-6' />
            </button>
        </div>
    </div>
  )
}

export default ProduitsUne