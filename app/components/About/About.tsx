import React from 'react'
import SectionHeader from '../Section/SectionHeader'
import SectionContainer from '../Section/SectionContainer'
import Reveal from '../Reveal'
import Image from 'next/image'

const About = () => {
    return (
        <SectionContainer id="about">
            <div className="section-contents mx-6 md:mx-[64px]">
                <Reveal initialX={-20} delay={0}>
                    <div className="mb-6">
                        <SectionHeader plainText="👨‍💻 Get to know" highlightText="About Me" />
                    </div>
                </Reveal>
                <Reveal initialX={-50} delay={0.5}>
                    <div>
                        <p className="text-lg md:text-[22px] md:text-start text-gray-800 dark:text-gray-100 leading-snug mb-10">
                            My name is Chandan Kumar Shani, and I am currently pursuing a Master's degree in Artificial Intelligence at Brandenburg University of Technology in Cottbus, Germany. 
                            I hold a Bachelor's degree in Computer Science and Engineering from DIT University, Dehradun, and bring over 2.5 years of industry experience from my tenure at Cognizant, 
                            where I contributed to software development and data-driven solutions across multiple domains.
                            <br /><br />
                            My technical expertise spans web development, backend engineering, data analysis, and machine learning. 
                            I am particularly interested in building intelligent systems that are scalable, efficient, and grounded in real-world applications. 
                            I take a structured and analytical approach to problem-solving, and I thrive in environments that challenge me to innovate and collaborate.
                            <br /><br />
                            I am actively seeking opportunities to apply my skills in dynamic, forward-thinking teams where I can contribute meaningfully to impactful projects.
                        </p>
                        <ul className="space-y-4 text-gray-800 dark:text-gray-100">
                            <li className="flex gap-2 items-start">
                                <span className="font-semibold text-black dark:text-white w-[150px]">Career Path:</span>
                                <span>MSc Artificial Intelligence Student, aspiring AI Engineer</span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="font-semibold text-black dark:text-white w-[150px]">Areas of Interest:</span>
                                <span>AI, Machine Learning, NLP, Web Technologies</span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="font-semibold text-black dark:text-white w-[150px]">Education:</span>
                                <span>MSc in Artificial Intelligence &amp; B.Tech in Computer Science</span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="font-semibold text-black dark:text-white w-[150px]">Languages:</span>
                                <span>English, German, Hindi, Nepali</span>
                            </li>
                        </ul>
                    </div>
                </Reveal>
            </div>
            <>
        <Image
          src="/tech_stack_grid_dark.svg"
          alt="Background grid decoration dark"
          width={569}
          height={373}
          className="hidden dark:md:block -z-10 absolute -left-[250px] -top-[47px]"
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
        className="hidden dark:md:block -z-10 absolute -right-[200px] -bottom-[-20px]"
        />
      </>
        </SectionContainer>
    )
}

export default About