import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const AboutSection = () => {
    return (
        <div className="w-full h-auto flex flex-col space-y-32 px-32">
            <div>
                <h1 className="text-9xl font-bold">Curious<span className="text-primary">.</span></h1>
                <h1 className="text-9xl font-bold text-center">Committed<span className="text-primary">.</span></h1>
                <h1 className="text-9xl font-bold text-end">Capable<span className="text-primary">.</span></h1>
            </div>
            <div className="grid grid-cols-5 gap-16 flex-1 items-start">
                <div className="grid col-span-2 space-y-4">
                    <Card className="h-176">
                        <CardHeader className="flex items-center justify-center h-full">
                            <Image src="/vercel.svg" alt="Vercel Logo" width={300} height={400} />   
                        </CardHeader>
                    </Card>
                    <div className="flex flex-row space-x-8 justify-center">
                            <a href="https://github.com/AndreasBagasgoro" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                                <FaGithub size={48} />
                            </a>
                            <a href="https://linkedin.com/in/andreasbagasgoro" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                                <FaLinkedin size={48} />
                            </a>
                            <a href="https://instagram.com/andreasbagasgoro" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                                <FaInstagram size={48} />
                            </a>
                            <a href="mailto:andreas@example.com" className="text-foreground hover:text-primary transition-colors">
                                <FaEnvelope size={48} />
                            </a>
                        </div>

                </div>
                <div className="grid col-span-3 space-y-16 justify-start">
                    <h1 className="text-5xl text-primary font-bold">Transforming complex logic into elegant, high-performance interfaces.</h1>
                    <h2 className="text-3xl text-justify">I am a Frontend Engineer dedicated to building scalable web applications that don't just work—they feel seamless. My approach combines clean architecture with a deep focus on user-centric design, ensuring every interaction is purposeful and every line of code is optimized.</h2>
                    <Card className="bg-transparent shadow-none border-l-primary border-l-8 rounded-3xl">
                        <CardHeader>
                            <CardTitle className="!text-4xl font-bold tracking-wider">Learning Philosophy.</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="!text-2xl text-justify tracking-wider">
                               I treat learning as an endless loop of curiosity and implementation. I don't just follow trends; I evaluate them based on performance and user needs. To me, being a developer means being a lifelong student who is never afraid to start from "Hello World" to master something great.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;