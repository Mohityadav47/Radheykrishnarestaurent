import React from 'react'
import Image from 'next/image'
import Countdown from './Countdown'
import Link from 'next/link'
const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url("/")] md:h-[70vh]'>

<div className='flex-1 flex flex-col justify-center item-center text-center gap-8 p-6'>

  {/* text container */}

  <h1 className='text-white text-5xl font-bold xl:text-6xl'>Deliciaus Rabri For you </h1>
<p className='text-white xl:text-xl'>Progressively simplify effective e-toilers and process-centric methods of empower.  quikly pontificate prallel</p>
<Countdown/>

<Link href={'/offer/${item.id}'}><button className='bg-red-500 text-white rounded-md  py-3 px-6'>order now</button></Link>


</div>
  <div className='flex-1 w-full relative md:h-full'>
{/* img container */}
<Image src="/rabadi.png"  alt=''fill className='object-contain'/>
  
</div>



    </div>
  )
}

export default Offer