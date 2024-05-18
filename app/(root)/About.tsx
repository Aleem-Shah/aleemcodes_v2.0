import React from 'react'

const About = ({classname}:{classname:string}) => {
  return (
    <section id='about'>
        <div className="flex justify-center flex-col items-center mt-20 ">
            <div className={`head-decoration ${classname}`}>
                &#123;/&#125;                
            </div>

            <div className={`sub-head ${classname}`}>
            <span> &lt;about me&gt;</span>
            </div>
            <div className="text-center px-8 ">

            <p className='head-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, placeat.</p>
            </div>
            <div className="md:grid md:grid-cols-2 md:mt-10 md:px-[15rem]">
    <div className="md:border-2 md:border-gray-600 md:border-l-0 md:border-t-2 md:border-b-0 ">
        <hr className='md:hidden h-1 mb-10 mt-10'/>
        <p className='px-3 text-xl md:p-4 sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quod.</p>
    </div>
    <div className="md:border-t-2 md:border-gray-600">
        <hr className='md:hidden h-1 mb-10 mt-10'/>
        <p className='px-3 md:p-4 text-xl text-[#e6db74] sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quod.</p>
    </div>
   
    
</div>
            <div className="">
                <button className= {`btn ${classname}`}>
                    &#123;read more&#125;
                </button>
            </div>
        </div>
    </section>
  )
}

export default About