"use client";

import { useEffect, useState } from "react";

const roles = [
    "Frontend Web Developer",
    "Backend Web Developer",
    "UI/UX Design",
    "n8n Automation Workflow",
];

export function Typewriter() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            const currentRole = roles[roleIndex];
            const isFullText = text === currentRole;
            const isEmpty = text === "";

            if (isDeleting) {
                setText(currentRole.substring(0, text.length - 1));
                setTypingSpeed(50);
            } else {
                setText(currentRole.substring(0, text.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && isFullText) {
                setTimeout(() => setIsDeleting(true), 2000); // Pause at end
            } else if (isDeleting && isEmpty) {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex, typingSpeed]);

    return (
        <span className="inline-block min-w-[20ch] text-left">
            I can do <span className="font-bold text-orange-500">{text}</span>
            <span className="animate-blink">|</span>
        </span>
    );
}
