"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(
        typeof window !== "undefined"
            ? localStorage.getItem("theme") === "dark" || 
              window.matchMedia("(prefers-color-scheme: dark)").matches 
            : true
    );

    useEffect(() => {
        const savedTheme = 
        typeof window !== "undefined" ? localStorage.getItem("theme") : null;
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
        } else {
            const prefersDarkMode = window.matchMedia(
                "(prefers-color-scheme: dark)").matches;
            setIsDarkMode(prefersDarkMode);
        }
    }, []);

    useEffect(() => {
        document.body.classList.toggle("dark", isDarkMode);
        if (typeof window !== "undefined") 
            localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        }, [isDarkMode]);

        const toggleTheme = () => {
            setIsDarkMode((prev) => !prev);
        };

    return (
        <button
            onClick={toggleTheme}
            className='fixed h-[32px] rounded-lg z-[70] flex items-center gap-2 px-2
                // Mobile styles
                top-[100px] right-6 bg-white dark:bg-[#18181b]
                border border-gray-200 dark:border-gray-700
                // Medium & Large screen styles (aligned with navbar, with text)
                md:top-[63px] md:right-6 md:bg-white/80 md:dark:bg-[#18181b]/80 
                md:backdrop-blur-sm md:border-gray-200/20 md:dark:border-gray-700/20'
        >
            {isDarkMode
                ? <Image src="/sun_icon.svg" alt='sun icon' height={14} width={14} />
                : <Image src="/moon_icon.svg" alt='moon icon' height={14} width={19} />
            }
            <span className="text-xs font-medium text-black dark:text-white ml-1 hidden md:inline">
                {isDarkMode ? "Dark Mode" : "Light Mode"}
            </span>
        </button>
    );
}

export default ThemeToggle