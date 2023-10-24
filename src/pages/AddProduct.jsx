import React, { useRef, useState } from 'react'
import Authentication from '../components/Authentication'
import { getDocs, collection, addDoc } from 'firebase/firestore'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { storage } from '../config/firebase'
import {v4} from 'uuid'

function AddProduct({openNav, setOpenNav, productsCollectionRef, getProducts}) {


  const [loading, setLoading] = useState(false)
  const [verified, setVerified] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [composition, setComposition] = useState('')
  const [propriete, setPropriete] = useState('')
  const [indications, setIndications] = useState('')
  const [especes, setEspeces] = useState('')
  const [voie, setVoie] = useState('')
  const [dosage, setDosage] = useState('')
  const [attente, setAttente] = useState('')
  const [category, setCategory] = useState('')
  const [uploadImg, setUploadImg] = useState(null)
  const [imgUrl, setImgUrl] = useState('')
  const nameRef= useRef(null)
  const categoryRef= useRef(null)
  const descriptionRef= useRef(null)
  const compositionRef= useRef(null)
  const proprieteRef = useRef(null)
  const indicationsRef = useRef(null)
  const especesRef = useRef(null)
  const voieRef = useRef(null)
  const dosageRef = useRef(null)
  const attenteRef = useRef(null)

  const handleAddProduct = async (name, description, category) =>{

    if (loading) return
    setLoading(true)

    let imageRef
    if(uploadImg!== null){
      imageRef= ref(storage, `products/${uploadImg.name + v4()}`)
      await uploadBytes(imageRef, uploadImg)
    }
    await addDoc(productsCollectionRef, {
      name: name,
      imgUrl: await getDownloadURL(imageRef),
      category: category,
      composition: composition,
      propriete: propriete,
      indications: indications,
      especes: especes,
      voie: voie,
      dosage: dosage,
      attente: attente
    });
        nameRef.current.value=''
    categoryRef.current.value=''
    alert("Produit ajouté avec succès")
    setLoading(false)
  }

    
 

  return (
    <div className='flex items-center justify-center py-5' >
      {
        !verified?(
          <Authentication verified={verified} setVerified={setVerified} />
        ):(
          <div className='flex flex-col items-center justify-center gap-6' >
            <input ref={nameRef} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Nom du produit' className='w-[90vw] p-5 text-[16px] h-[50px] rounded-md border border-[#009864]'/>
            <input ref={categoryRef} onChange={(e)=> setCategory(e.target.value)} type="text" placeholder='Categorie du produit' className='w-[90vw] p-5 text-[16px] h-[50px] rounded-md border border-[#009864]'/>
            <textarea ref={compositionRef} onChange={(e)=> setComposition(e.target.value)} type="text" placeholder='composition du produit' className='w-[90vw] p-5 text-[16px] h-[200px] rounded-md border border-[#009864]' />
            <textarea ref={proprieteRef} onChange={(e)=> setPropriete(e.target.value)} type="text" placeholder='Proprietés du produit' className='w-[90vw] p-5 text-[16px] h-[200px] rounded-md border border-[#009864]' />
            <textarea ref={indicationsRef} onChange={(e)=> setIndications(e.target.value)} type="text" placeholder='Indications du produit' className='w-[90vw] p-5 text-[16px] h-[200px] rounded-md border border-[#009864]' />
            <textarea ref={especesRef} onChange={(e)=> setEspeces(e.target.value)} type="text" placeholder='Especes cibles du produit' className='w-[90vw] p-5 text-[16px] h-[200px] rounded-md border border-[#009864]' />
            <textarea ref={voieRef} onChange={(e)=> setVoie(e.target.value)} type="text" placeholder="Voie d'administration du produit" className='w-[90vw] p-5 text-[16px] h-[200px] rounded-md border border-[#009864]' />
            <textarea ref={dosageRef} onChange={(e)=> setDosage(e.target.value)} type="text" placeholder='Dosage du produit' className='w-[90vw] p-5 text-[16px] h-[200px] rounded-md border border-[#009864]' />
            <textarea ref={attenteRef} onChange={(e)=> setAttente(e.target.value)} type="text" placeholder="Delai d'attente du produit" className='w-[90vw] p-5 text-[16px] h-[200px] rounded-md border border-[#009864]' />

            <input type="file" onChange={(e) => setUploadImg(e.target.files[0])} />
            <button onClick={()=> handleAddProduct(name, description, category)} className='flex items-center justify-center text-white bg-[#009864] rounded-md h-[40px] w-[90vw]' >Ajouter</button>
          </div>
        )
      }
        
    </div>
  )
}

export default AddProduct