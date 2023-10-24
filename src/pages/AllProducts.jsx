import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import CategoryButton from '../components/CategoryButton'
import Filter from '../components/Filter'

function AllProducts({openNav, setOpenNav, products}) {

    const [filtered, setFiltered] = useState([]);
    const [category, setCategory] = useState("Tous les produits")

    useEffect(()=>{
        setFiltered(products)
        console.log(products)
    }, [products])


    useEffect(() => {
        // This function filters products based on the provided category
        const filterProducts = (category) => {
          if (category!== "Tous les produits") {
            const lowerCategory = category.toLowerCase().trim();
            console.log(lowerCategory)
            const filteredProducts = products.filter(product => product.category.toLowerCase().trim() === lowerCategory);
            setFiltered(filteredProducts);
          } else {
            // If no category is provided, set the entire products array as filtered
            setFiltered(products);
          }
        };
    
        // Call the filterProducts function with the desired category (e.g., "Solution injectable")
        filterProducts(category);
    
      }, [category]);
    
  return (
    <div className='flex flex-col items-center w-screen' >
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        <div className='w-[90vw] flex flex-col items-center lg:items-start' >
            <h1 className='text-center lg:text-left my-6 font-bold text-[24px]' >Nos Produits</h1>
            <Filter category={category} setCategory={setCategory} />
            <div className='flex flex-wrap justify-center w-full gap-4 mx-auto lg:justify-start' >
                {filtered.map(product=>{
                    return(
                        <ProductCard img={product.imgUrl} name={product.name} id= {product.id}  />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default AllProducts