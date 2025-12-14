import { TechStack } from "@/components/TechStack";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | AryanCalix",
    description: "Learn more about AryanCalix, a full-stack developer.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl animate-fade-in">
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                    About Me
                </h1>

                <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                    <p>
                        Hello! I'm <strong className="text-black dark:text-white">AryanCalix</strong>, a dedicated developer situated at the intersection of creativity and logic. My journey represents a continuous evolution—starting from crafting pixel-perfect user interfaces to engineering robust backend systems.
                    </p>
                    <p>
                        I thrive on problem-solving and efficiency. My recent focus has been on mastering <strong className="text-blue-600 dark:text-blue-400">automation workflows with n8n</strong> and exploring the depth of the modern web stack. I believe in writing code that is not only functional but also clean, maintainable, and scalable.
                    </p>
                    <p>
                        When I'm not coding, I'm testing new tools, optimizing workflows, or learning about the latest developments in cloud architecture.
                    </p>
                </div>
            </div>

            <div className="space-y-8">
                <h2 className="text-2xl font-bold">Technical Arsenal</h2>
                <TechStack />
            </div>
        </div>
    );
}
