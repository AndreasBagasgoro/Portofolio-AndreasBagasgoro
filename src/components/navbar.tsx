"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { FiDownload, FiSun, FiMoon } from "react-icons/fi";
import { ToggleGroup } from "./ui/toggle-group";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'dark' : 'light');
    }, []);

    const toggleTheme = (value: string) => {
        setTheme(value);
        if (value === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-foreground">
            <div className="flex items-center justify-between py-4 px-32 mx-auto">
                <div className="flex flex-row items-center space-x-4 text-xl font-bold">
                    <Image src=""/>
                    <h1>
                        Andreas Bagasgoro
                    </h1>
                </div>
                <div className="flex font-medium bg-glass-bg/10 border border-glass-border/40 rounded-3xl py-2 px-6 space-x-8">
                    <ul className="flex space-x-8">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                        <li><Link href="/skills" className="hover:text-primary transition-colors">Skills</Link></li>
                        <li><Link href="/project" className="hover:text-primary transition-colors">Projects</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div className="flex items-center space-x-8">
                    <Button className="shadow-elegant font-semibold" size="default">Resume <FiDownload /></Button>
                    <ToggleGroup
                        options={[
                            { value: 'light', label: '', icon: <FiSun /> },
                            { value: 'dark', label: '', icon: <FiMoon /> }
                        ]}
                        value={theme}
                        onChange={toggleTheme}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
