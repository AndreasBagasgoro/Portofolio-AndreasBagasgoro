'use client';

import { Badge } from '@/src/components/ui/badge';
import ColorBends from '@/src/components/ui/color-bends';
import { FaCode } from 'react-icons/fa';
import { Button } from '@/src/components/ui/button';
import { FiArrowUpRight } from 'react-icons/fi';
import { RiMailSendLine } from 'react-icons/ri';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !dotRef.current || !contentRef.current) return;

    // Timeline untuk mengatur urutan animasi
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '+=50%', // Lebih dikurangi untuk mengurangi blank space
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // 1. Fade out konten hero (0-30%)
    tl.to(
      heroRef.current.children,
      {
        opacity: 0,
        y: -50,
        duration: 0.5,
        stagger: 0.05,
      },
      0
    )

      // Fade out grid content secara explicit
      .to(
        contentRef.current,
        {
          opacity: 0,
          y: -50,
          duration: 0.7,
        },
        0
      )

      // 2. Zoom dot menjadi full screen (0-70%)
      .to(
        dotRef.current,
        {
          scale: 200,
          duration: 0.7,
          ease: 'power2.inOut',
        },
        0
      )

      // 3. Fade out dot setelah scale selesai (70-100%)
      .to(
        dotRef.current,
        {
          opacity: 0,
          duration: 0.7,
          ease: 'power2.inOut',
        },
        0.7
      );
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col space-y-6 md:space-y-8 items-start justify-start overflow-hidden pt-20 md:pt-32 px-4 md:px-8 lg:px-32"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <ColorBends
          colors={['#14b8a6']}
          rotation={45}
          speed={0.3}
          scale={1.2}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.8}
          parallax={0.6}
          noise={0.04}
          transparent
        />
      </div>

      {/* Konten hero di atas background */}
      <div className="relative flex flex-row space-x-2 text-center items-center text-foreground/50 pt-4 md:pt-0">
        <div className="h-4 w-4 rounded-4xl bg-primary"></div>
        <h2 className="text-sm md:text-base">AVAILABLE FOR NEW PROJECT</h2>
      </div>
      <div>
        <Badge
          showPulse
          className="flex justify-center items-center text-center text-lg md:text-xl z-50 bg-primary/50 border border-primary px-4 py-2"
        >
          <FaCode /> Software Enthusiast
        </Badge>
      </div>
      <div className="flex flex-row">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">
          ANDREAS <br />
          <span className="flex items-center">
            BAGASGORO
            <div
              ref={dotRef}
              className="relative h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 rounded-4xl bg-primary ml-2 md:ml-4 z-[9999]"
            ></div>
          </span>
        </h1>
      </div>
      <div
        ref={contentRef}
        className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8"
      >
        <div className="hidden md:block"></div>
        <div className="space-y-4">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            Building digital interfaces where precise code meets meaningful user
            experiences.
          </h1>
          <h2 className="text-base md:text-xl">
            Currently focused on developing high-performance, responsive web
            apps. I specialize in{' '}
            <span className="font-semibold text-primary">
              React, Tailwind CSS, and Next.js,
            </span>{' '}
            with a passion for micro-animations, accessibility, and creating
            interactions that feel alive.
          </h2>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <Button
              className="shadow-elegant"
              onClick={() => scrollToSection('project')}
            >
              Explore Work
              <FiArrowUpRight />
            </Button>
            <Button
              size="default"
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch <RiMailSendLine />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
