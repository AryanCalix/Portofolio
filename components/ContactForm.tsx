"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("API Response:", response.status, result);

            if (response.ok) {
                setStatus("success");
                e.currentTarget.reset();
                // Reset after 3 seconds
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                console.error("API Error:", result);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Your name"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="your@email.com"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                    placeholder="How can I help you?"
                />
            </div>
            <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="w-full py-3 px-6 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === "submitting" ? (
                    "Sending..."
                ) : status === "success" ? (
                    "Message Sent!"
                ) : status === "error" ? (
                    "Failed to Send. Try Again."
                ) : (
                    <>
                        Send Message <Send className="h-4 w-4" />
                    </>
                )}
            </button>
        </form>
    );
}
