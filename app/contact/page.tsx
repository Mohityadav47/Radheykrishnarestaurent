import React from 'react'

const contact = () => {
  return (
    <div className='flex items-center justify-center' >
<div className='w-96 h-full  2xl:flex flex-col gap-9 w-3/5  shadow-2xl h-1/2  hover:bg-fuchsia-50'>
<h1 className='ml-20 m-9 xl:ml-50 font-bold font-red-500'>Contact Us</h1>

<input className='w-56 xl:w-2/3 m-6 border border-black rounded ' type="phone" placeholder='Phone' />
<input className='w-56 xl:w-2/3 m-6 border border-black rounded' type="email" placeholder='Email' />
<textarea className='h-40 w-2/3 xl:h-16 w-100 m-6 border border-black rouded'name="messege" id="messege" placeholder='send messege'></textarea>
<button className='font-bold w-56 rounded xl:hover:bg-red-300 font-bold w-2/3 h-11 m-6 bg-indigo-500 border border-black'>Submit</button>

</div>


    </div>
  )
}

export default contact