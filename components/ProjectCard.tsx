"use client";
import React from "react";
import { PinContainer } from "./ui/3dCard";

export function ProjectCard({title,description,stack,type,img}:{title:string;description:string;stack:string;type:string;img:string;}) {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-[#e4de7b] ">
              {description}
            </span>
          </div>
          <div className="" />
          <img src={img} className="w-full h-full p-10"/>
        </div>
        <div className="">
          <span>{stack}</span>
        </div>
      </PinContainer>
    </div>
  );
}
