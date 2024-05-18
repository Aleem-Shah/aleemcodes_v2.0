"use client"

import { skills } from '@/constants'
import React from 'react'

const Skills = ({data}:any) => {
  const handleMouseEnter = (e:any, colorHover:any) => {
    const target = e.target as HTMLDivElement;
    target.style.backgroundColor = colorHover;
  };

  const handleMouseLeave = (e:any) => {
    const target = e.target as HTMLDivElement;
    target.style.backgroundColor = '#282828';
  };

 
   
  return (
    <section className='flex justify-center items-center text-center mt-20 flex-col'>
    <div className="head-decoration">
          &#123;#&#125;              
      </div>

      <div className="sub-head">
      <span> &lt;Skills&gt;</span>
      </div>
      <div className="px-8">

      <p className=' head-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, adipisci.</p>


      </div>


      <div className="  p-10 space-y-10
      ">
        {skills.map((items)=>{
            return(
              
                <p className='bg-[#282828] p-8 w-[300px] sm:w-[500px]  md:w-[700px] 2xl:w-[1400px] lg:w-[950px] xl:w-[1200px] border-2 border-gray-700 text-2xl sm:text-4xl     '            style={{ transition: 'background-color 0.3s' }}
                onMouseEnter={(e) => handleMouseEnter(e, items.hoverColor)}
                onMouseLeave={handleMouseLeave}   key={items.name}>&#123;&quot; {items.name} &quot;&#125;</p>
            )
        })}

      </div>
</section>
  )
}

export default Skills