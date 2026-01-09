"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Facebook, Twitter, Mail, ArrowUpRight } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    const sections = [
        {
            title: "Navigation",
            links: [
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "#" },
                { name: "About Us", href: "#about-section" },
                { name: "Contact", href: "/contact" },
            ],
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Cookie Policy", href: "#" },
            ],
        },
    ]

    const socials = [
        { icon: <Instagram className="w-5 h-5" />, href: "#" },
        { icon: <Linkedin className="w-5 h-5" />, href: "#" },
        { icon: <Facebook className="w-5 h-5" />, href: "#" },
        { icon: <Twitter className="w-5 h-5" />, href: "#" },
    ]

    return (
        <footer className="w-full bg-[#030303] pt-32 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[120px] rounded-full -mb-48 -mr-48" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full -mt-32 -ml-32" />

            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-transparent drop-shadow-2xl">
                                <img src="/calistic-logo.png" alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-2xl font-light tracking-[0.2em] text-white uppercase italic">
                                Calistic <span className="text-yellow-400 font-bold">Media</span>
                            </span>
                        </div>
                        <p className="text-white/50 text-lg font-light leading-relaxed max-w-md mb-10">
                            Driving sustainable ROI through pure organic ways. Pan India Branding, content creation, and strategic growth.
                        </p>
                        <div className="flex items-center gap-5">
                            {socials.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-yellow-500 hover:text-[#030303] transition-all duration-300"
                                    whileHover={{ y: -3 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white font-medium mb-8 tracking-wider">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-white/50 hover:text-yellow-400 transition-colors duration-300 font-light flex items-center gap-2 group text-sm"
                                        >
                                            {link.name}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Banner */}
                <div className="w-full p-1 border-t border-b border-white/5 mb-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 gap-12">
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium mb-1">Email us</p>
                                <a href="mailto:calisticproduction@gmail.com" className="text-white hover:text-yellow-400 transition-colors text-lg font-light">
                                    calisticproduction@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <div>
                                <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium mb-1">Call us</p>
                                <a href="tel:8240721057" className="text-white hover:text-yellow-400 transition-colors text-lg font-light tracking-tight">
                                    +91 8240721057
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('https://www.google.com/maps/search/117+b,+jodhpur+park,+kol+68,+near+Dhakuria+bus+stand+opp+jodhpur+park+girls+school+beside+indian+bank,+gita+bhaban')}>
                            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-purple-500/0 group-hover:shadow-purple-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin animate-bounce-subtle"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div>
                                <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium mb-1 group-hover:text-purple-400 transition-colors">Visit Headquarters</p>
                                <p className="text-white hover:text-purple-400 transition-colors text-lg font-light underline underline-offset-8 decoration-white/10">
                                    Our Location
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 pt-12 border-t border-white/5 translate-y-4">
                    <p className="text-white/30 text-xs font-light">
                        © {currentYear} Calistic Media. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <span className="text-white/20 text-[10px] tracking-widest uppercase">High Performance Agency</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
