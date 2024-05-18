import Typewritereffect from '@/components/Typewritereffect'
import React from 'react'
import {projects} from "../../constants/index"
import { ProjectCard } from '@/components/ProjectCard'


const page = () => {
  const word=["_projects"]
  return (
    <main className=''>
      <div className="page-head">

      <Typewritereffect words={word} color='#67e8f9'/>
      </div>
      <div className="">

      <p className='text-center px-7 text-[#e3dd7b] mt-3 text-md md:text-2xl xl:text-[1.7rem] 2xl:text-4xl'>Lorem ipsum dolor sit amet. sed dolor cupiditate atque provident!</p>
      </div>

      <div className="">
        <div className=" flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3  ">
          {projects.map((item,i)=>{
            return(
              <div key={i} className="">
                <ProjectCard
                title={item.title}
                description={item.description}
                type={item.type}
                stack={item.stack}
                img={item.img}
                />

              </div>
            )
          })}
        </div>
      </div>
      
    </main>
  )
}

export default page