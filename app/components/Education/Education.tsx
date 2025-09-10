import React from 'react'
import SectionHeader from '../Section/SectionHeader'
import SectionContainer from '../Section/SectionContainer'
import Reveal from '../Reveal'
import Image from 'next/image'

const educationData = [
    {
        year: '2024 - Present',
        degree: 'MSc in Artificial Intelligence',
        university: 'Brandenburgische Technische Universität Cottbus-Senftenberg',
        keySubjects: [
            'Mathematical Statistics',
            'Image Processing',
            'Data Warehouse',
            'Data Mining',
        ],
    },
    {
        year: '2017 - 2021',
        degree: 'B.Tech in Computer Science & Engineering',
        university: 'DIT University, Dehradun',
        keySubjects: [
            'Artificial Intelligence',
            'Data Structure & Algorithm',
            'Big Data Analytics',
            'Database Management System',
        ],
    },
]

const Education = () => {
    return (
        <SectionContainer id="education">
            <div className="section-contents mx-6 md:mx-[64px]">
                <Reveal initialX={-20} delay={0}>
                    <div className="mb-8">
                        <SectionHeader plainText="🎓 My" highlightText="Education" />
                    </div>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 justify-center justify-items-center">
                    <Reveal initialX={-50} delay={0.3}>
                        <div className="card flex flex-col w-full max-w-[428px] p-5 md:p-[18px] gap-4 bg-white dark:bg-[#18181b] rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-transform transition-shadow duration-300 ease-out hover:scale-105 hover:shadow-2xl">
                            <span className="font-bold text-base md:text-lg text-gray-700 dark:text-gray-200">
                                {educationData[0].year}
                            </span>
                            <h3 className="font-semibold text-2xl md:text-[26px] text-green-700 dark:text-green-400">
                                {educationData[0].degree}
                            </h3>
                            <span className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-200">
                                {educationData[0].university}
                            </span>
                            <div>
                                <span className="font-semibold text-gray-800 dark:text-gray-100">
                                    Key Subjects:
                                </span>
                                <ul className="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300 text-sm">
                                    {educationData[0].keySubjects.map((subject, idx) => (
                                        <li key={idx}>{subject}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal initialX={-50} delay={0.5}>
                        <div className="card flex flex-col w-full max-w-[428px] p-5 md:p-[18px] gap-4 bg-white dark:bg-[#18181b] rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-transform transition-shadow duration-300 ease-out hover:scale-105 hover:shadow-2xl">
                            <span className="font-bold text-base md:text-lg text-gray-700 dark:text-gray-200">
                                {educationData[1].year}
                            </span>
                            <h3 className="font-semibold text-2xl md:text-[26px] text-blue-700 dark:text-blue-400">
                                {educationData[1].degree}
                            </h3>
                            <span className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-200">
                                {educationData[1].university}
                            </span>
                            <div>
                                <span className="font-semibold text-gray-800 dark:text-gray-100">
                                    Key Subjects:
                                </span>
                                <ul className="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300 text-sm">
                                    {educationData[1].keySubjects.map((subject, idx) => (
                                        <li key={idx}>{subject}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
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
        </SectionContainer>
    )
}

export default Education