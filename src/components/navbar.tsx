"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/skills", label: "Skills" },
        { href: "/project", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-foreground">
            <div className="flex items-center justify-between py-4 px-32 mx-auto">
                <div className="flex flex-row items-center space-x-4 text-xl font-bold">
                    <Image src="/next.svg" alt="Next.js Logo" width={40} height={40} />
                    <h1>
                        Andreas Bagasgoro
                    </h1>
                </div>
                <div className="flex font-medium bg-glass-bg/70 border border-glass-border/40 rounded-3xl py-2 px-6 space-x-8">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="hover:text-primary transition-colors">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center space-x-8">
                    <Button className="shadow-elegant font-semibold" size="default">Resume <FiDownload /></Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
