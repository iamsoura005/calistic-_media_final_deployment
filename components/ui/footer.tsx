"use client"
import Link from 'next/link'
import Image from 'next/image'
import {
    Globe,
    Share2,
    MessageCircle,
    Link as LinkIcon,
    Send,
    Instagram,
} from 'lucide-react'

const links = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '/services' },
    { title: 'Contact', href: '/contact' },
]

const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Share2, href: '#', label: 'Share' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { icon: Globe, href: '#', label: 'Website' },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32 bg-[#030303] border-t border-white/5">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col items-center space-y-12">
                    <Link href="/" className="relative block h-16 w-16 grayscale hover:grayscale-0 transition-all duration-500">
                        <Image
                            src="/logo-gold.png"
                            alt="Calistic Media"
                            fill
                            className="object-contain opacity-50 hover:opacity-100"
                        />
                    </Link>

                    <div className="flex flex-wrap justify-center gap-8 text-[12px] font-light uppercase tracking-[0.2em]">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-white/40 hover:text-yellow-500 transition-colors duration-300">
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {socials.map((social, idx) => (
                            <Link
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-white/20 hover:text-yellow-500 transition-all duration-300 transform hover:scale-110">
                                <social.icon className="size-5" strokeWidth={1.5} />
                            </Link>
                        ))}
                    </div>

                    <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] text-center w-full pt-12">
                        © {new Date().getFullYear()} Calistic Media • Pure Organic Growth
                    </span>
                </div>
            </div>
        </footer>
    )
}
