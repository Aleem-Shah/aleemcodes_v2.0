
"use client"
import { footerLinks, navbarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    const date=new Date();
    const year= date.getFullYear();
    const pathname= usePathname()
  return (
    <section>
                <hr className='h-1 mt-10' />
        <footer  className="md:flex flex-row justify-between items-center md:p-6 ">
            <div className='md:flex gap-10'>
             {footerLinks.map((items)=>{
                 const isActive =pathname === items.route ||
                 pathname.startsWith(`${items.route}/`);
                 return(
                    
               <Link
               href={items.route}
               key={items.route}
               >
              
                 <p className={cn("text-center sm:text-lg md:text-xl",{"text-[#2fcbef]":isActive})}>{items.label}</p>
               </Link>
                 )
             })}

            </div>
            <div className="text-center md:text-xl flex items-center justify-center space-x-3 mt-5">
            <span className='fill-purple-500 text-[#8f6bf8] stroke-white'><FaLinkedin/> </span>
            <span className='fill-purple-500 text-[#8f6bf8]'><FaInstagramSquare /> </span>
            <span className='fill-purple-500 text-[#8f6bf8]'><FaXTwitter /></span>

            </div>
            <div className="text-center text-lg sm:text-xl mb-3 text-[#e6db74] px-10 mt-5">
                <p>&copy;copyright {year} AleemCodes all rights reserved</p>
            </div>
      
        </footer>
    </section>
  )
}

export default Footer