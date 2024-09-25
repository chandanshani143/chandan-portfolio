"use client"

import React from 'react'
import Image from 'next/image'
import Reveal from '../Reveal';

type Props = {
  thumbnail: string;
  title: string;
  link: {
    label: string;
    url: string;
  }
  description: string;
  languageIcons: string[];
}

const Project = ({ thumbnail,
  title,
  link,
  description,
  languageIcons
}: Props) => {
  return (
    <Reveal initialX={-50} delay={0.5}>
    <div className='card flex flex-col items-stretch w-full max-w-[428px]
    p-5 md:p-[18px] gap-[30px]'>
      <Image
        src={thumbnail}
        alt={`Thumbnail for ${title}`}
        width={392}
        height={230}
        className='w-full h-[230px] object-cover'
      />
      <div className='flex flex-col gap-[11px}'>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold text-xl md:text-[22px]'>
            {title}
          </h3>
          <a href={link.url}
            className='flex px-[5px] py-[3px] gap-1 bg-[#b9b9b9]
            bg-opacity-[24%] rounded text-[14px]'
          >
            <span className='hidden md:block'>        {/* hidding the url in mobile because it will be conjusted*/}
              {link.label}</span>
            <img
              src="link_arrow.svg"
              alt="Link Arrow"
              className='block dark:hidden'
            />
            <img
              src="link_arrow_dark.svg"
              alt="Link Arrow"
              className='hidden dark:block' />
          </a>
        </div>
        <p className='line-clamp-2 text-sm md:text-base'>{description}</p>
        <div className='flex flex-row gap-[11px]'>
          {languageIcons.map((icon, iconId) => (
            <img key={iconId}
              src={icon}
              alt='Language Icon' />
          ))}
        </div>
      </div>
    </div>
    </Reveal>
  )
}

export default Project