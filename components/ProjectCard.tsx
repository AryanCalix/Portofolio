import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    demoUrl: string;
}

export function ProjectCard({ title, description, tags, githubUrl, demoUrl }: ProjectCardProps) {
    return (
        <div className="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 p-6 transition-all hover:shadow-lg hover:border-blue-500/50 group">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>
                <div className="flex space-x-3">
                    <Link
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                        <ExternalLink className="h-5 w-5" />
                    </Link>
                </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
