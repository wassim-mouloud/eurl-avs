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
                <ContactCard img='map' title='Adresse' detail='50 lot kourane messaoud Boufarik , Blida' href='https://www.google.com/maps/place/EXPOLAND+ALG%C3%89RIE/@36.5824123,2.9090955,16.34z/data=!4m6!3m5!1s0x128fa73e964850b9:0x2cad4940bca9fdb9!8m2!3d36.5823102!4d2.9107109!16s%2Fg%2F11rbs4lx50?entry=ttu' />
            </div>
        </div>
    </div>  )
}

export default Contact