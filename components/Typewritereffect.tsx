"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
interface WordListProps {
  words: string[];
  color:string;
}

const Typewritereffect: React.FC<WordListProps> = ({ words,color }) => {
  return (
    <div>
 
      <ul>

      &#123;&rdquo;
            <span className="" style={{color}}>
              <Typewriter words={words} loop={1000} typeSpeed={200} cursor />
            </span>
            &rdquo;&#125;
       
       
      </ul>
    </div>
  );
};

export default Typewritereffect;
