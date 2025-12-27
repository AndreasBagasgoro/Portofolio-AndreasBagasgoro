import AboutSection from './about/page';
import HeroSection from './hero/page';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-foreground bg-background font-sans">
        <HeroSection />
        <AboutSection />
    </div>
  );
}
