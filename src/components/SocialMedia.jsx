import React from 'react'

function SocialMedia() {
  return (
    <div className='flex flex-col items-center justify-center gap-2 py-4' >
        <h1 className='text-center lg:text-left font-bold text-[#009864] text-[30px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-10' >Rejoignez-nous sur les réseaux sociaux</h1>
        <div className='flex gap-8 pb-[50px]' >
            <a href="https://www.instagram.com/avs.vet?igshid=MzMyNGUyNmU2YQ%3D%3D" target='_blank' ><img src="/images/insta.png" alt="" className='w-10 lg:w-16' /></a>
            <a href="https://www.facebook.com/profile.php?id=100094833490860&mibextid=LQQJ4d" target='_blank' ><img src="/images/facebook.png" alt="" className='w-10 lg:w-16' /></a>
        </div>
    </div>
  )
}

export default SocialMedia