import React from 'react'
import Image from 'next/image'
import Reveal from '../Reveal';

type Props = {
    id: number;
    image: string;
    company: string;
    role: string;
    descriptions: string[];
    dates: string;
}

const Experience = ({
    id,
    image,
    company,
    role,
    descriptions,
    dates
}: Props) => {
    return (
        <Reveal initialX={id % 2 === 0 ? -60 : 60} delay={0.5 * id}>
        <div className='card flex flex-col items-stretch w-full
    max-w-screen-lg px-6 py-[27px] md:px-[33px] gap-3'>
            <div className='flex flex-col items-start md:flex-row gap-1
        md:gap-0 md:justify-between'>
                <div className='flex flex-col sm:flex-row gap-3
             items-start sm:items-center'>
                    <Image
                        src={image}
                        alt={`Company image for ${company}`}
                        width={18}
                        height={18}
                    />
                    <h3 className='text-xl font-medium'>{company}</h3>
                </div>
                <p className='text-base text-indigo-600 dark:text-indigo-600 md:text-xl font-medium'>{role}</p>
            </div>
            <p className='text-sm/1 md:text-base'>{dates}</p>
            <div>
                {descriptions.map((description, descId) => (
                    <p key={descId}
                        className='before:content-["•"] before:mr-2 text-sm md:text-base mb-3 last:mb-0'>
                        {description}
                    </p>
                ))}
            </div>
        </div>
        </Reveal>
    )
}

export default Experience