import React from 'react'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import projects from '@/data/projects.json'
import Project from './Project'
import Image from 'next/image'

const Projects = () => {
  return (
    <SectionContainer id='projects'>
        <div className='section-contents mx-6 md:mx-[64]'>
            <SectionHeader plainText='🚀 Some of my' highlightText='Projects' />
            <div className='lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    projects.map((project, id) => (
                        <Project key={id}
                        thumbnail={project.thumbnail}
                        title={project.title}
                        link={project.link}
                        description={project.description}
                        languageIcons={project.languageIcons}
                        githubUrl={project.githubUrl} />
                    ))
                }
            </div>
        </div>
        <Image
        src="/projects_highlight.svg"
        alt='Background highlight decoration'
        width={558}
        height={558}
        className='absolute hidden md:block left-1/2 top-1/2 -translate-x-1/2
        -translate-y-1/2 -z-10'
        />
        <Image
        src="/projects_highlight_mobile.svg"                      
        alt='Mobile Background highlight decoration'
        width={321}
        height={530}
        className='absolute md:hidden left-1/2 top-1/2 -translate-x-1/2 
        -translate-y-1/2 -z-10'
        />
        <Image
        src="/tech_stack_grid_dark.svg"
        alt="Background grid decoration dark"
        width={569}
        height={373}
        className="hidden dark:md:block -z-10 absolute -left-[135px] -top-[70px]"
        />
        <Image
          src="/tech_stack_grid.svg"
          alt="Background grid decoration light"
          width={569}
          height={373}
          className="hidden dark:hidden md:block -z-10 absolute -left-[140px] -top-[70px]"
        />
        <Image
        src="/tech_stack_grid.svg"
        alt="Background grid decoration light"
        width={569}
        height={373}
        className="hidden dark:hidden md:block -z-10 absolute -right-[360px] -top-[70px]"
        />
        <Image
        src="/tech_stack_grid_dark.svg"
        alt="Background grid decoration dark"
        width={569}
        height={373}
        className="hidden dark:md:block -z-10 absolute -right-[200px] -top-[70px]"
        />
    </SectionContainer>
  )
}

export default Projects