import AboutSection from './about/page';
import ContactSection from './contact/page';
import HeroSection from './hero/page';
import ProjectSection from './project/page';
import SkillsPage from './skills/page';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center text-foreground bg-background font-sans space-y-32">
      <HeroSection />
      <AboutSection />
      <SkillsPage />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
