'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '../../components/ui/card';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ElectricBorder from '@/src/components/ui/electric-border';
import Shuffle from '@/src/components/ui/shuffle';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade animation for headings
      const headings = headingRef.current?.querySelectorAll('h1');
      if (headings) {
        gsap.set(headings, {
          opacity: 0,
        });

        headings.forEach((heading, i) => {
          gsap.to(heading, {
            opacity: 1,
            duration: 1.5,
            delay: i * 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      }

      // Anti-mainstream: Breathing background effect
      gsap.to(sectionRef.current, {
        backgroundColor: 'rgba(255,255,255,0.02)',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-auto flex flex-col space-y-8 md:space-y-16 lg:space-y-24 xl:space-y-32 px-4 md:px-8 lg:px-16 xl:px-32"
    >
      <div ref={headingRef}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold">
          Curious<span className="text-primary">.</span>
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold text-center">
          Committed<span className="text-primary">.</span>
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold text-end">
          Capable<span className="text-primary">.</span>
        </h1>
      </div>
      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 flex-1 items-start"
      >
        <div className="grid lg:col-span-2 space-y-4">
          <ElectricBorder
            color="#14b8a6"
            speed={1}
            chaos={0.09}
            borderRadius={16}
          >
            <Card
              ref={cardRef}
              className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-transparent border-primary border-2 overflow-hidden"
            >
              <CardHeader className="relative w-full h-full p-0">
                <Image
                  src="/foto-linkedin.png"
                  alt="LinkedIn Photo"
                  fill
                  className="object-cover"
                />
              </CardHeader>
            </Card>
          </ElectricBorder>
          <div
            ref={iconsRef}
            className="flex flex-row space-x-4 sm:space-x-6 md:space-x-8 justify-center"
          >
            <a
              href="https://github.com/AndreasBagasgoro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaGithub className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/andreas-bagasgoro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </a>
            <a
              href="http://instagram.com/andreasbagasgoro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </a>
            <a
              href="mailto:andreasbagasgoro04@gmail.com?subject=Halo&body=Saya tertarik dengan portofolio Anda"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </a>
          </div>
        </div>
        <div
          ref={textRef}
          className="grid lg:col-span-3 space-y-6 md:space-y-8 lg:space-y-12 justify-start"
        >
          {/* <h1 className="text-5xl text-primary font-bold">
            Transforming complex logic into elegant, high-performance
            interfaces.
          </h1> */}
          <Shuffle
            text="Transforming complex logic into elegant, high-performance interfaces."
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary font-bold lead tracking-tight normal-case"
            textAlign="left"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-justify">
            I am a Frontend Engineer dedicated to building scalable web
            applications that don&apos;t just work—they feel seamless. My
            approach combines clean architecture with a deep focus on
            user-centric design, ensuring every interaction is purposeful and
            every line of code is optimized.
          </h2>
          <Card className="bg-transparent shadow-none border-l-primary border-l-4 md:border-l-8 rounded-2xl md:rounded-3xl">
            <CardHeader>
              <CardTitle className="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl font-bold tracking-wider">
                Learning Philosophy.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="!text-sm sm:!text-base md:!text-lg lg:!text-xl xl:!text-2xl text-justify tracking-wider">
                I treat learning as an endless loop of curiosity and
                implementation. I don&apos;t just follow trends; I evaluate them
                based on performance and user needs. To me, being a developer
                means being a lifelong student who is never afraid to start from
                &quot;Hello World&quot; to master something great.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
