"use client"

import { useState } from "react"
import { Instagram, Facebook, Youtube, MessageCircle, Mail, Twitter } from "lucide-react"

const socials = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/calisticmedia?igsh=NTEydzg4NmN6dnM2",
        icon: <Instagram className="size-[18px]" />,
    },
    {
        name: "Facebook",
        href: "#",
        icon: <Facebook className="size-[18px]" />,
    },
    {
        name: "YouTube",
        href: "#",
        icon: <Youtube className="size-[18px]" />,
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/918240721057",
        icon: <MessageCircle className="size-[18px]" />,
    },
    {
        name: "Email",
        href: "mailto:calisticproduction@gmail.com",
        icon: <Mail className="size-[18px]" />,
    },
    {
        name: "X",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
]

export function SocialIcons() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className="relative flex items-center gap-0.5 px-1.5 py-1.5 rounded-2xl bg-black border border-white/[0.08] shadow-2xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

            {socials.map((social, index) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center size-10 rounded-xl transition-colors duration-200"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    aria-label={social.name}
                >
                    <span
                        className={`absolute inset-1 rounded-lg bg-yellow-500/10 transition-all duration-300 ease-out ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-90"
                            }`}
                    />

                    <span
                        className={`relative z-10 transition-all duration-300 ease-out ${hoveredIndex === index ? "text-yellow-400 scale-110" : "text-white/40"
                            }`}
                    >
                        {social.icon}
                    </span>

                    <span
                        className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-yellow-400 transition-all duration-300 ease-out ${hoveredIndex === index ? "w-3 opacity-100" : "w-0 opacity-0"
                            }`}
                    />

                    <span
                        className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-yellow-500 text-black text-[11px] font-bold whitespace-nowrap transition-all duration-300 ease-out z-20 shadow-xl ${hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
                            }`}
                    >
                        {social.name}
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-yellow-500" />
                    </span>
                </a>
            ))}
        </div>
    )
}
