import { Badge } from '@/src/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import TiltedCard from '@/src/components/ui/tilted-card';

const ProjectSection = () => {
  interface Project {
    projectName: string;
    role: string;
    year: string;
    problem: string;
    solution: string;
    preview: string;
    impact: string;
    tech: string[];
    image: string;
  }
  const projectData: Project[] = [
    {
      projectName: 'BRIan (BRI Karyawan)',
      role: 'Frontend Developer',
      year: '2025',
      problem:
        'Managers faced significant challenges in compiling daily reports from employees conducting institutional visits. Manual processes were time-consuming and error-prone, resulting in inefficient data management and unreliable oversight.',
      solution:
        'Developed a mobile application enabling employees to submit real-time daily reports, paired with an administrative dashboard for managers to monitor and manage operations directly, streamlining decision-making processes.',
      preview: '',
      impact:
        'Project is currently in development, impact metrics will be available post-launch.',
      tech: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'TypeScript',
        'Axios',
        'Framer Motion',
      ],
      image: '/project/brian.png',
    },
    {
      projectName: 'Kampung Budaya UB 2025',
      role: 'Frontend Developer',
      year: '2025',
      problem:
        'Managing numerous competition registrants across diverse cultural events presented significant challenges. The absence of an integrated system made registration tracking and event coordination difficult and inefficient.',
      solution:
        'Developed an integrated website using Inertia.js serving as a comprehensive information hub for competitions, featuring digital management tools for registration handling, streamlining processes and enhancing monitoring capabilities.',
      preview: '',
      impact:
        'Project is currently in development, impact metrics will be available post-launch.',
      tech: [
        'React',
        'Inertia.js',
        'Tailwind CSS',
        'TypeScript',
        'Axios',
        'Framer Motion',
      ],
      image: '/project/kbub.png',
    },
    {
      projectName: 'Ikatan Pelajar & Mahasiswa (Ikapema) Kepulauan Riau—Malang',
      role: 'Fullstack Developer',
      year: '2025',
      problem:
        'The absence of a centralized information platform about Ikapema members created significant challenges for members seeking connections with others based on specific study programs, majors, or universities in Malang.',
      solution:
        'Developed a web application displaying brief, non-private information about Ikapema Kepri Malang members, including study programs, majors, and universities, to facilitate networking and member connections.',
      preview: '',
      impact:
        'Project is currently in development, impact metrics will be available post-launch.',
      tech: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'TypeScript',
        'Firestore',
        'REST APIs',
        'JWT',
        'Postman',
        'Vercel',
        'Axios',
        'Figma',
      ],
      image: '/project/ikapema.png',
    },
  ];
  return (
    <div className="flex w-screen h-full items-center justify-center bg-background rounded-2xl text-foreground px-4 md:px-8 lg:px-16 xl:px-32">
      {/* --- DIV KE-2 (Target Modifikasi) --- */}

      <div className="flex flex-col w-full h-full items-center justify-start rounded-3xl md:rounded-[50px] text-foreground bg-[radial-gradient(ellipse_180rem_210rem_at_bottom,#0a0a0a_0%,#0a0a0a_60%,#0d3d38_70%,#0f766e_79%,#14b8a6_87%,#d4faf2_100%)] md:bg-[radial-gradient(ellipse_240rem_150rem_at_bottom,#0a0a0a_0%,#0a0a0a_60%,#0d3d38_70%,#0f766e_79%,#14b8a6_87%,#d4faf2_100%)]  pb-8 md:pb-12 lg:pb-16 pt-16 sm:pt-24 md:pt-32 lg:pt-48 xl:pt-64 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-12 md:space-y-20 lg:space-y-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center md:text-left font-bold">
          Featured project<span className="text-primary">.</span>
        </h1>
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 w-full">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-4 w-full"
            >
              <Card
                className={`flex flex-col w-full h-full bg-transparent border-none order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <CardHeader>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/20 border-primary text-primary text-xs sm:text-sm">
                      {project.role}
                    </Badge>
                    <Badge className="bg-border/20 border-border text-foreground text-xs sm:text-sm">
                      {project.year}
                    </Badge>
                  </div>
                  <CardTitle className="!text-2xl sm:!text-3xl md:!text-3xl lg:!text-4xl mt-4">
                    {project.projectName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <CardDescription className="text-base sm:text-lg md:text-xl font-semibold text-justify">
                    <span className="text-primary">The Problem:</span>
                    <span className="text-muted-foreground font-normal text-sm sm:text-base leading-relaxed ml-2">
                      {project.problem}
                    </span>
                  </CardDescription>
                  <CardDescription className="text-base sm:text-lg md:text-xl font-semibold text-justify">
                    <span className="text-primary">The Solution:</span>
                    <span className="text-muted-foreground font-normal text-sm sm:text-base leading-relaxed ml-2">
                      {project.solution}
                    </span>
                  </CardDescription>
                  <CardDescription className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} className="text-xs sm:text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </CardDescription>
                </CardContent>
              </Card>
              <div
                className={`order-2 h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <TiltedCard
                  imageSrc={project.image}
                  altText={`${project.projectName} Project Preview`}
                  captionText={`Preview of ${project.projectName}`}
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
