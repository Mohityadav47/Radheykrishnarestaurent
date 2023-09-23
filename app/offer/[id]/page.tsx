import React from 'react'
import Image from 'next/image'
import Price from '../../components/Price'
import { singleProduct2 } from '../../../data'
const Singleproductspage2 = () => {
  return (
    <div className='p-4 lg:px-20 h-screen flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center'>
{/* imagecontainer */}


{singleProduct2.img && (
<div className='relative w-full h-1/2 md:h-[70%'>
<Image src={singleProduct2.img} alt="" className='object-contain' fill/>

</div>)}


{/* textcpssvov */}
<div className='h-1/2 flex flex-col gap-4  md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>

<h1 className='text-3xl font-bold uppercase xl:text-5xl'>{singleProduct2.title}</h1>
<p>{singleProduct2.desc}</p>
<Price price={singleProduct2.price} id={singleProduct2.id} options={singleProduct2.options}/>

</div>









    </div>
  )
}

export default Singleproductspage2