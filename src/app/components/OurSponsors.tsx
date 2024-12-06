import React from 'react'
import Image from 'next/image'

function OurSponsors() {
  return (
    <div className='w-fixed-[1922px] h-[538px] top-[3087px] pt-[140px] pb-[140px] pr-[220px] pl-[220px]'>
     <div className='text-center'>
     <div className='w-fixed-[1482px] h-[87px]  text-center '>
<h1 className='text-[72px] font-bold'>Our sponsors</h1>
      </div>
      <div className='w-fixed-[1482px] h-[87px]  text-center pt-24'>
      <Image src={"/sponsors.png"} alt='Sponsors' width={1000} height={80}/>
      </div>
     </div>
    
    </div>
  )
}

export default OurSponsors
