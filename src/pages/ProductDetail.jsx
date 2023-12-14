import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { doc, getDoc} from "firebase/firestore";
import {db} from '../config/firebase'
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import SocialMedia from '../components/SocialMedia';

function ProductDetail({openNav, setOpenNav, products}) {

    const [product, setProduct] = useState({})
    const {id} = useParams()

    async function getDetail(){
        try{
            const docRef = doc(db, 'Products', id)
            const docSnap = await getDoc(docRef)
            setProduct(docSnap.data())
        }catch(e){
            console.log("No such document!");
        }
    }
    
    useEffect(()=>{
          getDetail()
      }, [])

  return (
    <div>
        <Navbar openNav={openNav} setOpenNav={setOpenNav} products={products} />
        <div className='flex flex-col items-center justify-center gap-6 lg:flex-row ' >
            <img src={product.imgUrl} alt="" className='w-[100vw]  md:w-[400px] lg:w-[450px] xl:w-[450px] max-h-[500px] lg:max-h-[700px] object-cover' />
            <div className='flex flex-col gap-2 p-4' >
                <div className='flex items-center gap-3 mb-4 lg:mb-0 max-w-[600px]' >
                    <span className='bg-[#17a841] w-[5px] h-[40px] ' ></span>
                    <h1 className='text-black font-bold text-[22px] md:text-[38px] lg:text-[40px] xl:text-[44px] tracking-[3px]' >{product.name}</h1>
                </div>
                <div className='flex justify-center items-center gap-3 w-[90vw] md:w-[400px] py-1 rounded-[14px] bg-[#17a841]' >
                    <img src="/images/available.png" alt="" className='w-5 h-5 lg:w-6 lg:h-6' />
                    <p className='text-white font-semibold text-[16px] lg:text-[16px]' >En Stock</p>
                </div>
                <p className='text-black md:text-[18px] lg:text-[18px] max-w-[700px]' ><span className='text-[#17a841] text-[25px] font-bold' >•</span> {product.category}</p>
                <p className='text-black md:text-[18px] lg:text-[18px] max-w-[700px]' ><span className='text-[#17a841] text-[25px] font-bold' >•</span> {product.composition}</p>
                <p className='text-black md:text-[18px] lg:text-[18px] max-w-[700px]' ><span className='text-[#17a841] text-[25px] font-bold' >•</span> {product.propriete}</p>
                <p className='text-black md:text-[18px] lg:text-[18px] max-w-[700px]' ><span className='text-[#17a841] text-[25px] font-bold' >•</span> {product.voie}</p>
                <p className='text-black md:text-[18px] lg:text-[18px] max-w-[700px]' ><span className='text-[#17a841] text-[25px] font-bold' >•</span> {product.indications}</p>
                <p className='text-black md:text-[18px] lg:text-[18px] max-w-[700px]' ><span className='text-[#17a841] text-[25px] font-bold' >•</span> {product.especes}</p>
                <p className='text-black md:text-[18px] lg:text-[18px] max-w-[700px]' ><span className='text-[#17a841] text-[25px] font-bold' >•</span> {product.dosage}</p>
                <p className='text-black md:text-[18px] lg:text-[18px] max-w-[700px]' ><span className='text-[#17a841] text-[25px] font-bold' >•</span> {product.attente}</p>
        </div>
        </div>
        <Contact />
        <SocialMedia/>
    </div>
  )
}

export default ProductDetail