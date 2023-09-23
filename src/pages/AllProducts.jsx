import React from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import CategoryButton from '../components/CategoryButton'
import Filter from '../components/Filter'

function AllProducts({openNav, setOpenNav, products}) {

    
  return (
    <div className='flex flex-col items-center w-screen' >
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        <div className='w-[90vw] flex flex-col items-center lg:items-start' >
            <h1 className='text-center lg:text-left my-6 font-bold text-[24px]' >Nos Produits</h1>
            <Filter/>
            <div className='flex flex-wrap justify-center w-full gap-4 mx-auto lg:justify-start' >
                {products.map(product=>{
                    return(
                        <ProductCard img={product.imgUrl} name={product.name}  />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default AllProducts