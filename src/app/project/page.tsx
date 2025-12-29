import { Badge } from '@/src/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';

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
    },
    {
      projectName: 'Kampung Budaya UB 2025',
      role: 'Frontend Developer',
      year: '2025',
      problem:
        'Managing numerous competition registrants across diverse cultural events presented significant challenges. The absence of an integrated system made registration tracking and event coordination difficult and inefficient.',
      solution:
        'Developed an integrated website serving as a comprehensive information hub for competitions, featuring digital management tools for registration handling, streamlining processes and enhancing monitoring capabilities.',
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
    },
  ];
  return (
    <div className="flex w-screen h-full items-center justify-center bg-background rounded-2xl text-foreground px-32">
      {/* --- DIV KE-2 (Target Modifikasi) --- */}

      <div className="flex flex-col w-full h-full items-center justify-start rounded-[50px] text-foreground bg-[radial-gradient(ellipse_200%_110%_at_bottom,#0a0a0a_0%,#0a0a0a_60%,#0d3d38_70%,#0f766e_79%,#14b8a6_87%,#d4faf2_100%)] pb-16 pt-64 px-16 space-y-32">
        <h1 className="text-6xl">
          Featured project<span className="text-primary">.</span>
        </h1>
        <div className="flex flex-col gap-16 w-full">
          {projectData.map((project, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 w-full">
              {index % 2 === 0 ? (
                <>
                  <Card className="flex flex-col w-full h-full bg-transparent border-none">
                    <CardHeader>
                      <div className="space-x-2">
                        <Badge className="bg-primary/20 border-primary text-primary mb-4">
                          {project.role}
                        </Badge>
                        <Badge className="bg-border/20 border-border text-foreground mb-4">
                          {project.year}
                        </Badge>
                      </div>
                      <CardTitle className="!text-4xl">
                        {project.projectName}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <CardDescription className="text-xl font-semibold text-justify">
                        <span className="text-primary">The Problem:</span>
                        <span className="text-muted-foreground font-normal text-base leading-relaxed ml-2">
                          {project.problem}
                        </span>
                      </CardDescription>
                      <CardDescription className="text-xl font-semibold text-justify">
                        <span className="text-primary">The Solution:</span>
                        <span className="text-muted-foreground font-normal text-base leading-relaxed ml-2">
                          {project.solution}
                        </span>
                      </CardDescription>
                      <CardDescription className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <Badge key={idx}>{tech}</Badge>
                        ))}
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-primary">
                            Project Preview
                          </h3>
                          <p className="text-sm text-muted-foreground max-w-xs">
                            Interactive preview of the {project.projectName}{' '}
                            application interface
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Placeholder for actual image - replace with: */}
                    {/* <img src={project.preview} alt={`${project.projectName} Project Preview`} className="w-full h-full object-cover" /> */}
                  </div>
                </>
              ) : (
                <>
                  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-primary">
                            Project Preview
                          </h3>
                          <p className="text-sm text-muted-foreground max-w-xs">
                            Interactive preview of the {project.projectName}{' '}
                            application interface
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Placeholder for actual image - replace with: */}
                    {/* <img src={project.preview} alt={`${project.projectName} Project Preview`} className="w-full h-full object-cover" /> */}
                  </div>
                  <Card className="flex flex-col w-full h-full bg-transparent border-none">
                    <CardHeader>
                      <div className="space-x-2">
                        <Badge className="bg-primary/20 border-primary text-primary mb-4">
                          {project.role}
                        </Badge>
                        <Badge className="bg-border/20 border-border text-foreground mb-4">
                          {project.year}
                        </Badge>
                      </div>
                      <CardTitle className="!text-4xl">
                        {project.projectName}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <CardDescription className="text-xl font-semibold text-justify">
                        <span className="text-primary">The Problem:</span>
                        <span className="text-muted-foreground font-normal text-base leading-relaxed ml-2">
                          {project.problem}
                        </span>
                      </CardDescription>
                      <CardDescription className="text-xl font-semibold text-justify">
                        <span className="text-primary">The Solution:</span>
                        <span className="text-muted-foreground font-normal text-base leading-relaxed ml-2">
                          {project.solution}
                        </span>
                      </CardDescription>
                      <CardDescription className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <Badge key={idx}>{tech}</Badge>
                        ))}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
