"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import internal from 'stream'

const data = [

  {id:1,
  title:"always crispy & always Fresh",
image:"/din.png",},

{id:2,
  title:"we deliver the best time for you",
image:"/hom3.png",},

{id:3,
  title:"the best sweets to share with your family",
image:"/Homain.png",},
]




const Slider = () => {
  const [CurrentSlide, setCurrentSlide] = useState(2)
  useEffect(() => {
    const intervel = setInterval(

      () =>setCurrentSlide((prev) => (prev === data.length-1 ? 0 : prev +1))
,2000)
  
    return () => clearInterval(intervel)

      
    
  }, []);
  
  
  
  return (



    <div className='flex flex-col h-[calc(100vh-9rem] lg:flex-row bg-fuchsia-50'>
{/* text container */}

<div className=' flex-1 h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>

<h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl  xl-7xl'>{data[CurrentSlide].title}</h1>
<button className='bg-red-500 text-white py-4 px-8'>order now</button>


</div>
{/* 


image scocooorosrse */}
<div className='w-full flex-1 relative'>

<Image src={data[CurrentSlide].image} alt="" width={1000} height={1000} className='object-cover'/>
</div>

    </div>
  )
}

export default Slider