import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


import Typewritereffect from '@/components/Typewritereffect';
const Hero = () => {
  const words = ['_algorithm', '_innovation', '_precision', '_optimization', '_logic'];
  
  return (
  
    <section className='flex justify-center sm:h-[100vh]  sm:mb-[20rem] items-center mt-10 h-[70vh] xl:h-[200vh]'>
        <div className="sm:mt-[20rem] xl:mt-0 ">
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-center '>&#47;&#47; HELLO I&rsquo;M ALEEM</p>
            <div className="text-center" >

      
            <div
            
            className="text-5xl sm:text-7xl md:text-[5rem] lg:text-[6rem] xl:text-[8rem] lg:mt-10 mt-5 "
          >
            {" "}
           
          <Typewritereffect words={words} color='#e6db74' /> 
          </div>
          
            </div>
            <div className="ml-[50%] mt-5 relative">  
            <Link href="#about">
            <span className='text-center cursor-pointer absolute transform translate-x-[-50%] rotate-90 md:text-xl lg:text-2xl xl:text-4xl xl:mb-10 font-bold'>==&gt;
            </span>



            </Link>
            
</div>

        <div className=" mt-20 flex items-center justify-between ">
            <Image
            src="/images/aleem.jpg"
            width={350}
            height={350}
            alt='Me at qubits-workshop'
            className='border-2 flex justify-center
             items-center border-gray-700 rounded-md 2xl:w-[1450px] sm:w-[600px] md:w-[710px] lg:w-[970px] xl:w-[1200px] xl:h-[1200px] xl:mt-20 '
            />
        </div>

        </div>
    </section>
  )
}

export default Hero