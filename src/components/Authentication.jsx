import React, { useRef } from 'react'

function Authentication({verified, setVerified}) {

   const passwordRef = useRef(null) 
   const onValidate = () =>{
        if(passwordRef.current.value=== "0YH8GuR?@U#Sao9NYtos"){
            setVerified(true)
        }else{
            alert("Mot de passe incorrect")
        }
   }

  return (
    <div className='bg-white rounded-md border border-[#009864]  w-[80vw] flex flex-col justify-center items-center gap-7 p-8' >
        <p className='font-semibold text-[18px]' >Entrez le mot de passe</p>
        <input ref={passwordRef} type="password" placeholder='Mot de passe' className='rounded-md w-[200px] h-[40px] border border-[#009864] flex justify-center items-center p-3' />
        <button onClick={onValidate}  className='flex items-center justify-center text-white bg-[#009864] rounded-md h-[40px] w-[150px]'>Valider</button>
    </div>
  )
}

export default Authentication