import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact | AryanCalix",
    description: "Get in touch with AryanCalix for collaboration or inquiries.",
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent text-center md:text-left">
                Get In Touch
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div className="space-y-8">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out directly or use the form.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200">
                            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Email Me</h3>
                                <p className="text-gray-500 dark:text-gray-400">aryancalix@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200">
                            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Location</h3>
                                <p className="text-gray-500 dark:text-gray-400">Indonesia</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-neutral-900/50 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-neutral-800 shadow-sm">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
