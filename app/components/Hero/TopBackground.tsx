import Image from 'next/image'
import React from 'react'

const TopBackground = () => {
  return (
    <>
    <div className='fixed z-[55] flex gap-2 md:gap-3 top-[50px] left-6 items-center 
    bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-sm py-2 px-3 rounded-lg 
    border border-gray-200/20 dark:border-gray-700/20'>
        <img src="/profile_icon3.png" alt="My Profile Icon" className='w-10 h-10' />
        <span className='text-2xl font-medium hidden lg:block text-gray-800 dark:text-gray-100'>
        Chandan Kumar Shani
    </span>
    </div>
    <div className="absolute w-full max-w-[360px] md:max-w-screen-lg
    h-[285px] md:h-[656px] top-[188px] md:top-11 
    left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10">
        <div className="w-full h-full relative">
            <div className="circle-icon top-0 left-[171px]
            md:top-28 md:left-72">
                <Image
                src="/rocket_icon.svg"
                alt='Rocket icon'
                width={23}
                height={23}/>
            </div>
            <div className="circle-icon hidden md:circle-icon top-[162px] -left-5
            md:top-52 md:left-0">
                <Image
                src="/bracket_icon.svg"
                alt='Bracket icon'
                width={23}
                height={23}/>
            </div>
            <div className="circle-icon top-60 left-[149px]
            md:top-[600px] md:left-[-17px]">
                <Image
                src="/github_icon.svg"
                alt='Github icon'
                width={23}
                height={23}/>
            </div>
            <div className=" hidden md:circle-icon md:top-[590px] 
            md:left-[510px]">
                <Image
                src="/electricity_icon.svg"
                alt='Github icon'
                width={23}
                height={23}/>
            </div>
            <div className=" hidden md:circle-icon md:top-[130px] 
            md:left-[700px]">
                <Image
                src="/merge_icon.svg"
                alt='Merge icon'
                width={23}
                height={23}/>
            </div>
            <div className=" hidden md:circle-icon md:top-[368px] 
            md:left-[970px]">
                <Image
                src="/stack_icon.svg"
                alt='Stack icon'
                width={23}
                height={23}/>
            </div>
        </div>
    </div>
    <img 
    src="/top_highlight.svg" 
    alt="Top dark mode background highlight" 
    width={809}
    height={877}
    className="absolute top-[-515px] hidden dark:md:block left-1/2
    -translate-x-1/2" 
    />
    <img 
    src="/top_highlight_mobile.svg" 
    alt="Top dark mode background highlight for mobile" 
    width={429}
    height={465}
    className="absolute top-[-229px] hidden dark:block dark:md:hidden left-1/2
    -translate-x-1/2" 
    />
    <div className="absolute top-0 w-full h-[795px] bg-repeat-x 
    bg-[url('/top_bg_light.svg')] bg-[auto_auto] hidden dark:hidden md:block" />
    <div className="absolute top-0 w-full h-[600px] bg-repeat-x 
    bg-[url('/top_bg_mobile_light.svg')] bg-[auto_auto] dark:hidden md:hidden" />
    <div className="absolute top-0 w-full h-[795px] bg-repeat-x 
    bg-[url('/top_bg_dark.svg')] bg-[auto_auto] hidden md:dark:block" />
    <div className="absolute top-0 w-full h-[600px] bg-repeat-x 
    bg-[url('/top_bg_mobile_dark.svg')] bg-[auto_auto] hidden dark:block md:hidden" />
    </>
  )
}

export default TopBackground