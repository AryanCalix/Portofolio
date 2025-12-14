import { ProjectCard } from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | AryanCalix",
    description: "Showcase of my development projects.",
};

const projects = [
    {
        title: "Project Alpha",
        description: "A comprehensive dashboard for monitoring server health and performance metrics in real-time.",
        tags: ["Next.js", "TypeScript", "Recharts", "WebSockets"],
        githubUrl: "https://github.com",
        demoUrl: "https://example.com"
    },
    {
        title: "Automation Workflows",
        description: "A collection of complex n8n workflows for automating business processes and data sync.",
        tags: ["n8n", "Node.js", "API Integration", "JSON"],
        githubUrl: "https://github.com",
        demoUrl: "https://example.com"
    },
    {
        title: "E-commerce Starter",
        description: "A modern, headless e-commerce starter kit with a focus on performance and SEO.",
        tags: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS"],
        githubUrl: "https://github.com",
        demoUrl: "https://example.com"
    },
    {
        title: "Task Master",
        description: "A collaborative task management tool with real-time updates and team workspaces.",
        tags: ["React", "Firebase", "Redux", "Material UI"],
        githubUrl: "https://github.com",
        demoUrl: "https://example.com"
    }
];

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
                Here are some of the projects I've worked on. They range from web applications to automation scripts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className={`animate-fade-in-delay-${(idx % 3) + 1}`}>
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
}
