import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { doc, getDoc} from "firebase/firestore";
import {db} from '../config/firebase'
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
function ProductDetail({openNav, setOpenNav}) {

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
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        <div className='flex flex-col items-center justify-center gap-6 ' >
            <img src={product.imgUrl} alt="" className='w-[90vw] md:w-[400px] lg:w-[400px] xl:w-[500px] object-contain' />
            <div className='flex flex-col gap-3 p-4' >
                <div className='flex items-center gap-3' >
                    <span className='bg-[#17a841] w-[5px] h-[40px] ' ></span>
                    <h1 className='text-black font-bold text-[28px] md:text-[38px] lg:text-[40px] xl:text-[44px] tracking-[3px]' >{product.name}</h1>
                </div>
                <div className='flex items-center gap-3' >
                    <span className='text-[#17a841] text-[30px] font-bold' >•</span>
                    <p className='text-black md:text-[18px] lg:text-[20px]' >{product.category}</p>
                </div>
                <div className='flex items-center gap-3' >
                    <span className='text-[#17a841] text-[30px] font-bold' >•</span>
                    <p className='text-black md:text-[18px] lg:text-[20px]' >{product.composition}</p>
                </div>
                <div className='flex items-center gap-3' >
                    <span className='text-[#17a841] text-[30px] font-bold' >•</span>
                    <p className='text-black md:text-[18px] lg:text-[20px]' >{product.propriete}</p>
                </div>
                <div className='flex items-center gap-3' >
                    <span className='text-[#17a841] text-[30px] font-bold' >•</span>
                    <p className='text-black md:text-[18px] lg:text-[20px]' >{product.voie}</p>
                </div>
                <div className='flex items-center gap-3' >
                    <span className='text-[#17a841] text-[30px] font-bold' >•</span>
                    <p className='text-black md:text-[18px] lg:text-[20px]' >{product.indications}</p>
                </div>
                
                <div className='flex items-center gap-3' >
                    <span className='text-[#17a841] text-[30px] font-bold' >•</span>
                    <p className='text-black md:text-[18px] lg:text-[20px]' >{product.especes}</p>
                </div>
                
                <div className='flex items-center gap-3' >
                    <span className='text-[#17a841] text-[30px] font-bold' >•</span>
                    <p className='text-black md:text-[18px] lg:text-[20px]' >{product.dosage}</p>
                </div>
                <div className='flex items-center gap-3' >
                    <span className='text-[#17a841] text-[30px] font-bold' >•</span>
                    <p className='text-black md:text-[18px] lg:text-[20px]' >{product.attente}</p>
                </div>
            </div>
        </div>
        <Contact />
    </div>
  )
}

export default ProductDetail