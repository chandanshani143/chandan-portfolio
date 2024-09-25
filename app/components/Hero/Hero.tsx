"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Reveal from '../Reveal'
import { Typewriter } from "react-simple-typewriter";


const Hero = () => {
  return (
    <section className='relative flex flex-row
    item-center z-20 mx-auto md:gap-[37px] md:mx-10'>
      <div className='flex flex-col gap-[13px] items-center 
      md:gap-[34px] md:my-[58px] md:items-start'>
        <Reveal initialX={-25}>
          <h1 className='text-2xl/1 text-center font-semibold block
        md:text-[40px] md:text-start md:inline'>
            <span className='-ml-3'>👋</span>
            Hello I'm Chandan Kumar Shani, I'm a {" "}
            <span
              className="block text-[27px] highlight mt-2 md:text-[45px] 
              md:inline md:mt-0 transition-opacity duration-500 ease-in-out">
              <Typewriter
                words={["Software Engineer", "Web Developer", "Frontend Developer", "Master's Student"]}
                loop={true} // Infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000} // Pause before retyping
              />
            </span>
          </h1> </Reveal>
        <Reveal initialX={-30} delay={0.2}>
          <p className='text-center text-sm mx-6
        md:text-[22px] md:text-start md:mx-0'>
            I'm obssessed with coding and helping startups create unique and helpful products. 
            Always eager to learn and explore new technologies, I strive to stay updated with the latest trends in web development and AI-driven applications. 🚀
          </p></Reveal>
        <Reveal initialX={-40} delay={0.4}>
          <a href="mailto:chandankumarshani98@gmail.com"
            className='self-center bg-primary text-white p-2.5
        rounded flex gap-2.5 items-center text-sm
        md:self-start md:text-xl/6'>
            Let's Connect{" "}
            <img src="/arrow_right_icon.svg"
              alt="Arrow right icon" />
          </a> </Reveal>
      </div>
      <div className=' relative group'>
        <Reveal>
          <Image src="/profile_light_purple.png"
            alt='Light purple rectangle'
            width={372}
            height={430}
            className='hidden md:block w-[372px] 
        h-[430px] absolute right-0 top-0 -z-10 group-hover:scale-[102%]
        group-hover:-rotate-2 ease-in-out duration-300'
          />
          <Image src="/profile_dark_purple.png"
            alt='Dark purple rectangle'
            width={372}
            height={430}
            className='hidden md:block w-[372px] 
        h-[430px] absolute right-0 top-0 -z-10 group-hover:scale-[102%]
        group-hover:rotate-2 ease-in-out duration-300'
          />
          <Image src="/Chandan_profile2.png"
            alt='Chandan Kumar Shani profile picture'
            width={357}
            height={417}
            className='hidden md:block min-w-[357px]
        h-[417px] z-10 mr-[7.7px] my-[6.5px] group-hover:scale-[102%]
         duration-300'
          />
        </Reveal>
      </div>
    </section>
  )
}

export default Hero