import React from 'react'
import { PiBagSimpleDuotone } from 'react-icons/pi'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { expierence } from '@/constants'
import Image from 'next/image'
  
const ExpierenceCard = () => {
  return (
    <Card className='mt-20 !border-2 !border-[rgb(58,59,69)] '>
    <CardHeader>
      <CardTitle className='flex flex-row gap-3 '><PiBagSimpleDuotone/> <span className=' text-yellow-300 underline underline-offset-1' >
      Experience</span></CardTitle>
      
    </CardHeader>
    <CardContent>
        {expierence.map((item,i)=>{
            return(
                <div key={i} className="">
                <div className="flex flex-row md:w-full space-x-5  mb-4 ">
                    <div className="">
                        <Image
                        
                            src={item.img}
                            width={50}
                            height={50}
                            alt={item.title}
                            className='bg-[rgb(60,59,59)] mr-2 rounded-full'
                        />

                    </div>
                    <div className="md:w-full">
                        <div className="flex justify-between md:w-full">
                        <span >{item.title}</span>
                        <span className='text-[#a1a1aa]'> {item.date}</span>
                        </div>
                        
                        
                        <div className="md:w-full">
                        <p className='text-[#a1a1aa] md:text-[1rem] lg:text-[1.3rem] mb-10'>{item.Description}</p>

                        </div>

                    </div>
                </div>
                </div>
            )
        })}

    </CardContent>

  </Card>
  
  )
}

{/* <div className=''>
<h1 className='text-lg text-yellow-300  tex-left flex flex-row gap-3 items-center justify-center'> <span className="text-white" fill='white'> <PiBagSimpleDuotone/> </span>  Experience</h1>
</div> */}

export default ExpierenceCard