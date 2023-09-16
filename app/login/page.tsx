import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const loginpage
 = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>

      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row  md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2'>
      {/* imgc ontaomertr */}
     <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
     <Image src="/rd.png" alt="" fill className='object-cover'/></div>
        {/* form contasfgdg */}
<div className='p-10 flex flex-col gap-8 md:w-1/2 '>
<h1 className='font-bold text=xl xl:text-3xl'>welcome</h1>
<p>log into your account or creAate a new account using socitial buttons</p>
<button className='flex gap-4 ring-1 ring-orange-100 rounded-md'>
  <Image src="/ggle.png" alt=""width={20} height={20}/>


  <span>sign with google</span>
</button>

<button className='flex gap-4 ring-1 ring-orange-100 rounded-md'>
  <Image src="/fbimg.png" alt=""width={20} height={20}/>


  <span>signwith faceboook</span>
</button>
<p className='text-sm'>Have an account <Link className='underline' href={'/contact'}>Contact us</Link></p>

</div>

    </div>
    
    
    </div>
  )
}

export default loginpage
