"use client"

import { motion } from "framer-motion"
import { Home, Sparkles, Layout, MessageSquare } from "lucide-react"
import { LocationMap } from "@/components/ui/expand-map"
import { NavBar } from "@/components/ui/tubelight-navbar"
import FooterSection from "@/components/ui/footer"
import { Phone, Instagram, Linkedin, ArrowRight, MapPin } from "lucide-react"

export default function ContactPage() {
    const navItems = [
        { name: "Home", url: "/", icon: Home },
        { name: "Services", url: "/services", icon: Layout },
        { name: "Features", url: "/features", icon: Sparkles },
        { name: "Contact", url: "/contact", icon: MessageSquare }
    ];

    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Call Us",
            value: "+91 8240721057",
            href: "tel:8240721057",
            color: "text-blue-400",
            bg: "bg-blue-500/10"
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            label: "WhatsApp / SMS",
            value: "+91 8240721057",
            href: "https://wa.me/918240721057",
            color: "text-green-400",
            bg: "bg-green-500/10"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Visit Us",
            value: "117 B, Jodhpur Park, Kolkata",
            href: "https://www.google.com/maps/search/117+b,+jodhpur+park,+kol+68,+near+Dhakuria+bus+stand+opp+jodhpur+park+girls+school+beside+indian+bank,+gita+bhaban",
            color: "text-purple-400",
            bg: "bg-purple-500/10"
        }
    ]

    const socials = [
        { icon: <Instagram />, label: "Instagram", href: "https://www.instagram.com/calisticmedia?igsh=NTEydzg4NmN6dnM2" },
        { icon: <Linkedin />, label: "LinkedIn", href: "https://www.linkedin.com/company/calistic-production/" }
    ]

    return (
        <main className="min-h-screen bg-[#030303] text-white scroll-smooth">
            <NavBar items={navItems} />

            <section className="relative pt-24 md:pt-40 pb-16 md:pb-32 px-4 md:px-6 overflow-hidden">
                {/* Background Ambient Glows */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none hidden md:block" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full translate-y-1/2 pointer-events-none hidden md:block" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Left Side: Header Content */}
                        <div className="space-y-8 md:space-y-12 text-center lg:text-left">
                            <div className="space-y-4 md:space-y-6">
                                <div className="flex flex-col items-center lg:items-start gap-4 mb-2 md:mb-4">
                                    <img src="/logo-gold.png" alt="Calistic Media" className="h-16 md:h-20 w-auto mb-2 md:mb-4" />
                                    <motion.span
                                        className="text-yellow-400 text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase flex items-center justify-center lg:justify-start gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                    >
                                        <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                                        Get In Touch
                                    </motion.span>
                                </div>
                                <motion.h1
                                    className="text-4xl sm:text-6xl md:text-8xl font-extralight tracking-tight leading-[1.1] md:leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    Let&apos;s build <br />
                                    <span className="text-yellow-400 italic">your legacy.</span>
                                </motion.h1>
                                <motion.p
                                    className="text-white/50 text-base md:text-xl font-light max-w-md mx-auto lg:mx-0 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Whether you&apos;re a brand looking for organic scale or a creator seeking a sustainable trajectory, we&apos;re here to engineer the connection.
                                </motion.p>
                            </div>

                            {/* Social Grid */}
                            <div className="pt-8 mb-4 border-t border-white/5">
                                <p className="text-white/30 text-xs uppercase tracking-widest font-medium mb-6">Connect with us on Socials</p>
                                <div className="flex flex-wrap gap-4">
                                    {socials.map((social, i) => (
                                        <motion.a
                                            key={i}
                                            href={social.href}
                                            className="w-12 h-12 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center text-white/50 hover:text-yellow-400 hover:border-yellow-500/20 hover:bg-yellow-500/5 transition-all duration-300"
                                            whileHover={{ y: -5 }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Cards */}
                        <div className="grid grid-cols-1 gap-6 w-full lg:max-w-md">
                            {contactInfo.map((info, idx) => (
                                <motion.a
                                    key={idx}
                                    href={info.href}
                                    target={info.href.startsWith("http") ? "_blank" : undefined}
                                    className="group relative p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-yellow-500/20 hover:bg-white/[0.04]"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="relative z-10 flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${info.bg} ${info.color} border border-white/5 shadow-xl`}>
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-1">{info.label}</p>
                                                <p className="text-lg font-light tracking-wide group-hover:text-yellow-400 transition-colors uppercase">{info.value}</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-white/10 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
                                    </div>

                                    {/* Abstract Hover Decoration */}
                                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-yellow-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.a>
                            ))}

                            <motion.div
                                className="mt-8 p-10 rounded-[2.5rem] bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent border border-yellow-500/20 relative overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-light mb-4 flex items-center gap-3">
                                        <MessageSquare className="text-yellow-400 w-6 h-6" />
                                        Direct Enquiry
                                    </h3>
                                    <p className="text-white/50 font-light mb-8 text-sm leading-relaxed">
                                        Our strategy team responds within 2 hours. Start your trajectory today.
                                    </p>
                                    <button
                                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-[#030303] py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-yellow-500/20 min-h-[48px]"
                                        onClick={() => window.open(`https://wa.me/918240721057?text=I'd%20like%20to%20enquire%20about%20Calistic%20Media%20services`, "_blank")}
                                    >
                                        Inquire via WhatsApp <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full" />
                            </motion.div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="py-24 bg-[#030303] flex justify-center px-6">
                <div className="flex flex-col items-center gap-8">
                    <span className="text-yellow-500/40 text-[10px] uppercase tracking-[0.4em] font-medium">Global Network</span>
                    <LocationMap location="India Network" coordinates="20.5937° N, 78.9629° E" />
                </div>
            </section>

            <FooterSection />
        </main >
    )
}

function RocketIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" /><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" /></svg>
    )
}
