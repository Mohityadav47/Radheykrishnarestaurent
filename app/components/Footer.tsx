import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-1/2 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between'>
      
      
      <Link className='font-bold text-xl' href=""> Radhey Krishna Restaurent</Link>
    <p>
    &#169; All right reserved
    </p>
    
    </div>
  )
}

export default Footer