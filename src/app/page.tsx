import AboutSection from './about/page';
import HeroSection from './hero/page';
import ProjectSection from './project/page';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center text-foreground bg-background font-sans space-y-16">

        <HeroSection />
         
        <AboutSection />
  
        <ProjectSection />
    </main>
  );
}
