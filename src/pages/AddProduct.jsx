import React, { useRef, useState } from 'react'
import Authentication from '../components/Authentication'
import { getDocs, collection, addDoc } from 'firebase/firestore'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { storage } from '../config/firebase'
import {v4} from 'uuid'

function AddProduct({openNav, setOpenNav, productsCollectionRef, getProducts}) {

  const [verified, setVerified] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [uploadImg, setUploadImg] = useState(null)
  const [imgUrl, setImgUrl] = useState('')
  const nameRef= useRef(null)
  const categoryRef= useRef(null)
  const descriptionRef= useRef(null)

  const handleAddProduct = async (name, description, category) =>{
    let imageRef
    if(uploadImg!== null){
      imageRef= ref(storage, `products/${uploadImg.name + v4()}`)
      await uploadBytes(imageRef, uploadImg)
    }
    await addDoc(productsCollectionRef, {name: name, desciption: description, imgUrl: await getDownloadURL(imageRef), category:category})
    nameRef.current.value=''
    categoryRef.current.value=''
    descriptionRef.current.value=''
    getProducts()
    alert("Produit ajouté avec succès")
  }

 

  return (
    <div className='flex items-center justify-center h-screen' >
      {
        !verified?(
          <Authentication verified={verified} setVerified={setVerified} />
        ):(
          <div className='flex flex-col items-center justify-center gap-6' >
            <input ref={nameRef} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Nom du produit' className='w-[90vw] p-5 text-[16px] h-[50px] rounded-md border border-[#009864]'/>
            <input ref={categoryRef} onChange={(e)=> setCategory(e.target.value)} type="text" placeholder='Categorie du produit' className='w-[90vw] p-5 text-[16px] h-[50px] rounded-md border border-[#009864]'/>
            <textarea ref={descriptionRef} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder='Description du produit' className='w-[90vw] p-5 text-[16px] h-[200px] rounded-md border border-[#009864]' />
            <input type="file" onChange={(e) => setUploadImg(e.target.files[0])} />
            <button onClick={()=> handleAddProduct(name, description, category)} className='flex items-center justify-center text-white bg-[#009864] rounded-md h-[40px] w-[90vw]' >Ajouter</button>
          </div>
        )
      }
        
    </div>
  )
}

export default AddProduct