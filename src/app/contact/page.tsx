'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import ContactForm from '@/src/components/ui/contact-form';
import { RiMailSendLine, RiMapPinLine, RiPhoneLine } from 'react-icons/ri';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="flex w-screen h-full items-center justify-center bg-background rounded-2xl text-foreground px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="flex flex-col w-full h-full items-center justify-start rounded-3xl md:rounded-[50px] text-foreground bg-[radial-gradient(ellipse_200rem_90rem_at_bottom,#0a0a0a_0%,#0a0a0a_60%,#0d3d38_70%,#0f766e_79%,#14b8a6_87%,#d4faf2_100%)] md:bg-[radial-gradient(ellipse_200rem_90rem_at_bottom,#0a0a0a_0%,#0a0a0a_60%,#0d3d38_70%,#0f766e_79%,#14b8a6_87%,#d4faf2_100%)] pb-8 md:pb-12 lg:pb-16 pt-16 sm:pt-24 md:pt-32 lg:pt-48 xl:pt-64 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-8 md:space-y-12 lg:space-y-16">
        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-primary">
                GET IN TOUCH
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Let&apos;s Work <span className="text-primary">Together</span>
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-muted-foreground">
                Always happy to hear from you! Whether you have a wild idea, a
                project in mind, or just want to chat about tech, drop me a
                line. I&apos;ll do my best to get back to you within a day.
                Let&apos;s make it happen!
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground">
                I typically respond within 24 hours. Let&apos;s create something
                amazing together.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <RiMailSendLine className="text-primary text-xl" />
                <span className="text-sm sm:text-base">
                  andreasbagasgoro@gmail.com
                </span>
              </div>

              <div className="flex items-center space-x-3 text-muted-foreground">
                <RiMapPinLine className="text-primary text-xl" />
                <span className="text-sm sm:text-base">Malang, Indonesia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4 justify-center md:justify-start">
              <a
                href="https://github.com/AndreasBagasgoro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200 group"
              >
                <FaGithub className="text-primary text-xl group-hover:scale-110 transition-transform duration-200" />
              </a>

              <a
                href="https://www.linkedin.com/in/andreas-bagasgoro/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200 group"
              >
                <FaLinkedin className="text-primary text-xl group-hover:scale-110 transition-transform duration-200" />
              </a>

              <a
                href="https://instagram.com/andreasbagasgoro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200 group"
              >
                <FaInstagram className="text-primary text-xl group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-lg bg-background/80 backdrop-blur-sm border-border/50 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
