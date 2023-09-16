'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'



const links = [


  {id:1, title:"Homepage", url:"/"},
  {id:1, title:"Menu", url:"/"},
  
  {id:1, title:"Contact", url:"/"},
]
const Menu = () => {
const [open, setopen] = useState(false)
const user = false
  return (
    <div>
{!open ?(
<Image src="/menuimg.png" alt=''width={20} height={20}  onClick={()=>{
  setopen(true)
}}/>

):(
<Image src="/close.jpg" alt=''width={20} height={20} onClick={()=>{

  setopen(false)
}}/>
  )}
  { open && (
  <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
  {links.map(item=>(
<Link href={item.url} key={item.id} onClick={()=>setopen(false)}>{item.title} </Link>

    ))}

    
  {!user ? (<Link href={"/login"}onClick={()=>setopen(false)}>Login</Link>
 ):( <Link href={"/orders"}onClick={()=>setopen(false)}>Order</Link>
  )}
  <Link href={"/cart"}onClick={()=>setopen(false)}>
<CartIcon/>

  </Link>
   </div>
   
  )}

    </div>
  )
}

export default Menu
