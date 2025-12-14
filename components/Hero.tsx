import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Typewriter } from "@/components/Typewriter";

export function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center px-4 animate-fade-in relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"></div>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
                Hi, I'm <span className="text-orange-500">AryanCalix</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed h-8">
                <Typewriter />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/projects"
                    className="px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                    View Projects <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                    href="/contact"
                    className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                    Contact Me <Mail className="h-4 w-4" />
                </Link>
            </div>
        </section>
    );
}
