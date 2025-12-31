import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import Image from 'next/image';
interface SkillsPageProps {
  tech: { name: string; id: string; class?: string }[];
}

const skillsData: SkillsPageProps = {
  tech: [
    { name: 'TypeScript', id: 'typescript' },
    { name: 'JavaScript', id: 'javascript' },
    { name: 'React', id: 'react' },
    { name: 'Next.js', id: 'nextjs' },
    { name: 'Inertia.js', id: 'inertiajs' },
    { name: 'Tailwind CSS', id: 'tailwindcss' },
    { name: 'Framer Motion', id: 'framer-motion' },
    { name: 'Lucide React', id: 'lucide' },
    { name: 'TanStack Query', id: 'react-query' },
    { name: 'Redux', id: 'redux' },
    { name: 'Figma', id: 'figma' },
    { name: 'GitHub', id: 'github' },
    { name: 'Postman', id: 'postman' },
    { name: 'Vercel', id: 'vercel' },
    { name: 'Jira', id: 'jira' },
    { name: 'Trello', id: 'trello' },
  ],
};

const SkillsPage = () => {
  return (
    <div className="flex w-screen h-full items-center justify-center bg-background rounded-2xl text-foreground px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="flex flex-col w-full h-full items-center justify-start rounded-3xl md:rounded-[50px] text-foreground bg-[radial-gradient(ellipse_200rem_80rem_at_bottom,#0a0a0a_0%,#0a0a0a_60%,#0d3d38_70%,#0f766e_79%,#14b8a6_87%,#d4faf2_100%)] md:bg-[radial-gradient(ellipse_200rem_90rem_at_bottom,#0a0a0a_0%,#0a0a0a_60%,#0d3d38_70%,#0f766e_79%,#14b8a6_87%,#d4faf2_100%)] pb-8 md:pb-12 lg:pb-16 pt-16 sm:pt-24 md:pt-32 lg:pt-48 xl:pt-64 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-8 md:space-y-12 lg:space-y-16">
        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-4">
          <Card className="bg-transparent border-none">
            <CardHeader>
              <CardDescription className="text-xs sm:text-sm md:text-base lg:text-xl font-bold">
                SPECIALIZATION
              </CardDescription>
              <CardTitle className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl xl:!text-8xl font-bold">
                Frontend Skills &{' '}
                <span className="text-primary">Tech Stack</span>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-transparent border-none flex items-center text-justify">
            <CardHeader>
              <CardDescription className="!text-sm sm:!text-base md:!text-lg lg:!text-xl xl:!text-2xl 2xl:!text-3xl leading-tight tracking-wide">
                A focused collection of the languages, framework, and tools i
                leverage to build immersive, accesible, and performant web
                interfaces.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div>
          <Card className="w-full bg-transparent border-none">
            <CardHeader>
              <div className="flex flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center rounded-l p-2 md:p-4">
                {skillsData.tech.map((tech, idx) => (
                  <div
                    key={idx}
                    className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 flex items-center bg-primary p-2 sm:p-2.5 md:p-3 rounded-lg"
                  >
                    <Image
                      src={`/tech/${tech.id}.webp`}
                      alt={tech.name}
                      width={0}
                      height={0}
                      sizes="140px"
                      className="h-full w-auto object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </CardHeader>
            {/* <CardContent></CardContent> */}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
