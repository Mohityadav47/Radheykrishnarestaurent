import React from 'react'
import Image from 'next/image'
const cardpage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row  '>

<div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3  2xl:w-2xl lg:px-20 xl:px-40'>


{/* 
single vitrsds */}





<div className='h-1/2 p-4 flex item-center justify-between mb-4 '>

<Image src="/sweets.png" alt="" width={100} height={100}
/>





<div>
<h1 className='uppercase text-xl font-bold'>sweets</h1>
<span>Sweets</span>
</div>
<h2 className='font-bold'> &#8377; 240</h2>
<span className='cursor-pointer'>
X
</span>
</div>







<div className='h-1/2 p-4 flex item-center justify-between mb-4 '>

<Image src="/biryani.png" alt="" width={100} height={100}
/>





<div>
<h1 className='uppercase text-xl font-bold'>Veg Biryani</h1>
<span>large</span>
</div>
<h2 className='font-bold'> &#8377; 180</h2>
<span className='cursor-pointer'>
X
</span>
</div>

<div className='h-1/2 p-4 flex item-center justify-between mb-4 '>

<Image src="/chole.png" alt="" width={100} height={100}
/>





<div>
<h1 className='uppercase text-xl font-bold'>Panjabi Chole</h1>
<span>large</span>
</div>
<h2 className='font-bold'>&#8377; 180</h2>
<span className='cursor-pointer'>
X
</span>
</div>

</div>

<div className=' h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-2xl lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
<div className='flex justify-between '>
  <span className=''>Subtotal(3 items) </span>  <span className=''> &#8377; 600</span>

</div>
<hr className=''/>
<div className='flex justify-between '>
  <span className=''>Service Cost </span>  <span className='text-green-500'> &#8377; 0.00</span>

</div>
<hr className=''/>
<div className='flex justify-between '>
  <span className=''>DElivery Cost  </span>  <span className=''>Free</span>

</div>
<hr className='my-2'/>
<div className='flex justify-between '>
  <span className=''> TOTAL(INCL. VAT) </span>  <span className='font-bold'> &#8377; 600</span>

</div>
<hr className=''/>

<button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end'>check out</button>

</div>
</div>

  )
}

export default cardpage