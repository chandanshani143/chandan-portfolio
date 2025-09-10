import React from 'react'
import Marquee from 'react-fast-marquee';
import skills from "@/data/skills.json";
import SectionContainer from '../Section/SectionContainer';
import SectionHeader from '../Section/SectionHeader';
import Skill from './Skill';
import Image from 'next/image';

const Skills = () => {
  // Split skills into 4 groups
  const skillRows = [
    skills.slice(0, Math.ceil(skills.length / 4)),
    skills.slice(Math.ceil(skills.length / 4), Math.ceil(skills.length / 2)),
    skills.slice(Math.ceil(skills.length / 2), Math.ceil(skills.length * 3 / 4)),
    skills.slice(Math.ceil(skills.length * 3 / 4))
  ];

  return (
    <SectionContainer id='skills'>
      <div className='section-contents mx-[22px] md:mx-[116px]'>
        <SectionHeader plainText='💻 This is my' highlightText='Tech Stack' />
        <div className='card w-full py-[27px] px-4 md:px-0 flex flex-col gap-8
          border border-gray-200/20 dark:border-gray-700/20 
          bg-white/50 dark:bg-[#18181b]/50 
          backdrop-blur-sm rounded-lg'>
          {skillRows.map((rowSkills, index) => (
            <Marquee
              key={index}
              gradient={false}
              speed={30}
              direction={index % 2 === 0 ? 'left' : 'right'}
              pauseOnHover={true}
            >
              <div className='flex gap-[33px] px-[33px]'>
                {rowSkills.map((skill, id) => (
                  <Skill key={id} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </Marquee>
          ))}
        </div>
      </div>
      <>
        <Image
          src="/tech_stack_grid_dark.svg"
          alt="Background grid decoration dark"
          width={569}
          height={373}
          className="hidden dark:md:block -z-10 absolute -left-[110px] -top-[45px]"
        />
        <Image
          src="/tech_stack_grid.svg"
          alt="Background grid decoration light"
          width={569}
          height={373}
          className="hidden dark:hidden md:block -z-10 absolute -left-[140px] -top-[39px]"
        />
        <Image
        src="/tech_stack_grid_dark.svg"
        alt="Background grid decoration dark"
        width={569}
        height={373}
        className="hidden dark:md:block -z-10 absolute -right-[200px] -top-[39px]"
        />
      </>
    </SectionContainer>
  );
};

export default Skills