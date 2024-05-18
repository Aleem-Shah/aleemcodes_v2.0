
import { BlogCard } from '@/components/BlogCard'
import React from 'react'

const Blogs = () => {
  return (
    <section className='flex justify-center items-center text-center mt-20 flex-col' id='blogs'>
          <div className="head-decoration">
                (!)                
            </div>

            <div className="sub-head">
            <span> &lt;Blogs&gt;</span>
            </div>
            <div className="px-8">

            <p className='head-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, adipisci.</p>
            </div>
            <div className="mt-10 mb-10 flex justify-center items-center">
              <BlogCard/>
                
            </div>
    </section>
  )
}

export default Blogs