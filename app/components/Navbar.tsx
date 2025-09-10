"use client";

import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import Reveal from './Reveal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    //scroll handler to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Use middle of viewport

            // Special case for home section
            if (scrollPosition < window.innerHeight) {
                setActiveSection("home");
                return;
            }

            // Check if we're at bottom of page for contact section
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
                setActiveSection("contact");
                return;
            }

            // Check other sections
            sections.forEach(section => {
                if (!section.id) return;

                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = (section as HTMLElement).offsetHeight;
                const sectionBottom = sectionTop + sectionHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = useCallback
        ((sectionId: string) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }, []);

    return (
        <div className="fixed top-12 right-6
    mx-auto flex flex-col gap-2.5 items-end z-[60]
    md:right-auto md:left-1/2 md:-translate-x-1/2">
            <button className="bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-sm
    p-3 md:hidden rounded-lg border border-gray-200/20 dark:border-gray-700/20"
                onClick={() => setIsOpen((prevValue) => !prevValue)}>
                <img
                    className="block dark:hidden"
                    src="/menu_icon_light.svg"
                    alt="menu icon"
                />
                <img
                    className="hidden dark:block"
                    src="/menu_icon_dark.svg"
                    alt="menu icon"
                />
            </button>
            <Reveal initialY={-20} duration={0.5}>
                <nav
                    className={cn(
                        "bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-sm cursor-pointer p-3 rounded-lg md:block duration-300 ease-in-out border border-gray-200/20 dark:border-gray-700/20",
                        {
                            "opacity-100": isOpen,
                            "opacity-0 md:opacity-100": !isOpen,
                        }
                    )}>
                    <ul className="flex flex-col item-center gap-4 
                text-lg font-normal md:flex-row">
                        <li>
                            <div
                                className={cn("rounded p-1 duration-300 ease-in-out", 
                                    {
                                    "bg-primary text-white": activeSection === "home",
                                    "hover:bg-primary/80 hover:text-violet-600": activeSection !== "home",
                                    }
                            )}
                                onClick={() => {
                                    scrollToSection("home")
                                    setActiveSection("home")
                                    setIsOpen(false)
                                }}
                            >Home
                            </div>
                        </li>
                        <li>
                            <div
                                className={cn("rounded p-1 duration-300 ease-in-out", 
                                    {
                                    "bg-primary text-white": activeSection === "about",
                                    "hover:bg-primary/80 hover:text-violet-600": activeSection !== "about",
                                    }
                            )}
                                onClick={() => {
                                    scrollToSection("about")
                                    setActiveSection("about")
                                    setIsOpen(false)
                                }}
                            >About
                            </div>
                        </li>
                        <li>
                            <div
                                className={cn("rounded p-1 duration-300 ease-in-out", 
                                    {
                                    "bg-primary text-white": activeSection === "skills",
                                    "hover:bg-primary/80 hover:text-violet-600": activeSection !== "skills",
                                    }
                            )}
                                onClick={() => {
                                    scrollToSection("skills")
                                    setActiveSection("skills")
                                    setIsOpen(false)
                                }}
                            >Skills
                            </div>
                        </li>
                        <li>
                            <div
                                className={cn("rounded p-1 duration-300 ease-in-out", 
                                    {
                                    "bg-primary text-white": activeSection === "projects",
                                    "hover:bg-primary/80 hover:text-violet-600": activeSection !== "projects",
                                    }
                            )}
                                onClick={() => {
                                    scrollToSection("projects")
                                    setActiveSection("projects")
                                    setIsOpen(false)
                                }}
                            >Projects
                            </div>
                        </li>
                        <li>
                            <div
                                className={cn("rounded p-1 duration-300 ease-in-out", 
                                    {
                                    "bg-primary text-white": activeSection === "experience",
                                    "hover:bg-primary/80 hover:text-violet-600": activeSection !== "experience",
                                    }
                            )}
                                onClick={() => {
                                    scrollToSection("experience")
                                    setActiveSection("experience")
                                    setIsOpen(false)
                                }}
                            >Experience
                            </div>
                        </li>
                        <li>
                            <div
                                className={cn("rounded p-1 duration-300 ease-in-out", 
                                    {
                                    "bg-primary text-white": activeSection === "education",
                                    "hover:bg-primary/80 hover:text-violet-600": activeSection !== "education",
                                    }
                            )}
                                onClick={() => {
                                    scrollToSection("education")
                                    setActiveSection("education")
                                    setIsOpen(false)
                                }}
                            >Education
                            </div>
                        </li>
                        <li>
                            <div
                                className={cn("rounded p-1 whitespace-nowrap duration-300 ease-in-out", 
                                    {
                                    "bg-primary text-white": activeSection === "contact",
                                    "hover:bg-primary/80 hover:text-violet-600": activeSection !== "contact",
                                    }
                            )}
                                onClick={() => {
                                    scrollToSection("contact")
                                    setActiveSection("contact")
                                    setIsOpen(false)
                                }}
                            >Contact Me
                            </div>
                        </li>
                    </ul>
                </nav>
            </Reveal>
        </div>
    )
}

export default Navbar