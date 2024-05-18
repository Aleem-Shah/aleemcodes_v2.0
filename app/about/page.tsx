import React from 'react'
import About from '../(root)/About'
import ExpierenceCard from '@/components/ExpierenceCard'
import Typewritereffect from '@/components/Typewritereffect'

const page = () => {
  const word=["About Me"]
  return (
    <div>

<div className="page-head">

<Typewritereffect words={word} color='#8f6ace'/>
</div>
        <About
        classname="hidden"
        />
        <ExpierenceCard/>

        
    </div>
  )
}

export default page