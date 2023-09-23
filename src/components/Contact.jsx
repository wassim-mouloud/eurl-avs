import React from 'react'
import ContactCard from './ContactCard'

function Contact() {
  return (
    <div id='Contact' className='flex items-center w-screen px-4 py-10 mt-20 bg-white lg:justify-center lg:px-0' >
        <div className='flex flex-col gap-3 lg:w-[970px] xl:w-[1200px]' >
            <h1 className='font-bold text-[#009864] text-[30px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-10' >Contact</h1>
            <div className='grid grid-cols-1 gap-10 md:gap-[70px] md:grid-cols-2 lg:grid-cols-3' >
                <ContactCard img='phone' title='Phone' detail='+213550917284' />
                <ContactCard img='mail' title='Mail' detail='avs.contactdz@gmail.com' href="mailto: avs.contactdz@gmail.com" />
                <ContactCard img='map' title='Adresse' detail='50 lot kourane messaoud Boufarik , Blida' href='https://maps.google.com/?q=Eurl%20avs%20vet,%20Boufarik&ftid=0x128fa708e068cbb9:0x6258ad5ca8b0fbf1&hl=fr-DZ&gl=dz&entry=gps&lucs=,47081495,47071704&g_st=is' />
            </div>
        </div>
    </div>  )
}

export default Contact