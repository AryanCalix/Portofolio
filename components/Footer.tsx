import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full py-8 mt-auto border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm transition-colors">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} ArC Group. All rights reserved.
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-600 transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="mailto:aliefailfahrezi@gmail.com" className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500 transition-colors">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
