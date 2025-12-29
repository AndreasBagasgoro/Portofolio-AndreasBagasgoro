'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { FiDownload } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#project', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Andreas_Bagasgoro_CV.pdf';
    link.download = 'Andreas_Bagasgoro_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-foreground">
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md scale-x-100 transition-all duration-1000'
            : 'bg-transparent scale-x-100'
        }`}
        style={{
          transformOrigin: 'center',
        }}
      >
        <div className="flex items-center justify-between py-4 px-32 mx-auto">
          <div className="flex flex-row items-center space-x-2 text-2xl font-bold">
            <Image
              src="/logo-ab.svg"
              alt="Next.js Logo"
              width={80}
              height={80}
            />
            <h1>Andreas Bagasgoro</h1>
          </div>
          <div className="flex font-medium bg-glass-bg/70 border border-glass-border/40 rounded-3xl py-2 px-6 space-x-8">
            <ul className="flex space-x-8">
              {navItems.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-8">
            <Button
              onClick={handleDownloadCV}
              className="shadow-elegant font-semibold"
              size="default"
            >
              Curriculum Vitae <FiDownload />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
