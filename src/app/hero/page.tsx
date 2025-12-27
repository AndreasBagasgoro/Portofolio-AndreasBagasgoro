import { Badge } from "@/src/components/ui/badge";
import ColorBends from "@/src/components/ui/color-bends";
import { FaCode } from "react-icons/fa";
import { Button } from "@/src/components/ui/button";
import { FiArrowUpRight } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";


const HeroSection = () => {
    return (
        <div className="relative w-full h-screen flex flex-col space-y-8 items-start justify-start overflow-hidden py-32 px-32">
            
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
              <ColorBends
                colors={["14b8a6"]}
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
            <div className="relative flex flex-row space-x-2 text-center items-center text-foreground/50">
                <div className="h-4 w-4 rounded-4xl bg-primary"></div>
                <h2>AVAILABLE FOR NEW PROJECT</h2>
            </div>
            <div>
                <Badge showPulse className="flex justify-center items-center text-center text-xl z-50  bg-primary/50 border border-primary px-4 py-2">
                    <FaCode /> Software Enthusiast
                </Badge>
            </div>
            <div className="flex flex-row">
                <h1 className="text-9xl font-bold">
                    ANDREAS <br />
                    <span className="flex items-center">
                        BAGASGORO
                        <div className="h-8 w-8 rounded-4xl bg-primary ml-4"></div>
                    </span>
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="grid col-span-1"></div>
                <div className="grid col-span-1 space-y-4">
                    <h1 className="text-4xl font-bold">Building digital interfaces where precise code meets meaningful user experiences.</h1>
                    <h2 className="text-xl">Currently focused on developing high-performance, responsive web apps. I specialize in <span className="font-semibold text-primary">React, Tailwind CSS, and Next.js,</span> with a passion for micro-animations, accessibility, and creating interactions that feel alive.</h2>
                    <div className="space-x-4">
                        <Button className="shadow-elegant">Explore Work<FiArrowUpRight /></Button>
                        <Button size="default" variant="outline">Explore Work <RiMailSendLine /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
