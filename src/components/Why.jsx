import React from 'react'
import Reason from './Reason'

function Why() {
  return (
    <div className='w-screen bg-[#009864] flex items-center  lg:justify-center  mt-20 px-4 lg:px-0 py-10' >
        <div className='flex flex-col gap-3 lg:w-[970px] xl:w-[1200px]' >
            <h1 className='font-bold text-white text-[30px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-10' >Pourquoi choisir AVS</h1>
            <div className='grid grid-cols-1 gap-10 md:gap-[70px] md:grid-cols-2' >
                <Reason icon='quality' title='Qualité et Fiabilité' paragraph="Nous ne transigeons pas sur la qualité. Tous nos produits sont soigneusement sélectionnés par notre équipe d'experts, et ils sont conformes aux normes les plus strictes de l'industrie." />
                <Reason icon='support' title='Service Clientèle Exceptionnel' paragraph='Notre équipe est là pour répondre à vos questions et vous aider à choisir les produits adaptés. Explorez notre site pour découvrir notre catalogue, des informations utiles pour les vétérinaires, et bien plus. Merci de nous faire confiance pour la santé de vos animaux.'/>
                <Reason icon='algeria' title='Distribution Nationale' paragraph='Notre réseau de distribution national nous permet de livrer rapidement et efficacement nos produits à travers tout le pays. Où que vous soyez, nous sommes là pour vous.' />
                <Reason icon='delivery' title='Livraison Facile' paragraph='Commandez en ligne et recevez vos médicaments vétérinaires chez vous ou dans votre clinique.'/>

            </div>
        </div>
    </div>
  )
}

export default Why