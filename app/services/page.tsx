"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { Zap, Camera, Users, Target, BarChart, Rocket, ChevronRight, ArrowRight } from "lucide-react"

const services = [
    {
        title: "Customized Organic Strategy",
        description: "Scale your brand with pure organic reach. We build long-term brand equity without relying on heavy ad spend. Our R&D team pinpoints exactly where to work for maximum ROI.",
        icon: <Target className="w-6 h-6" />,
        features: ["Audience Analysis", "SEO Optimized", "Conversion Focus", "Long-term Scale"],
        vibe: "bg-yellow-500/5",
        accent: "border-yellow-500/20",
        text: "text-yellow-400"
    },
    {
        title: "Organic Content Creation",
        description: "Narratives that resonate. Extraordinary content plans designed for engagement and platform-specific digital resonance. High-end UGC and reaction content.",
        icon: <Camera className="w-6 h-6" />,
        features: ["UGC Reactives", "Brand Narratives", "Digital Strategy", "Engagement Optimization"],
        vibe: "bg-amber-500/5",
        accent: "border-amber-500/20",
        text: "text-amber-400"
    },
    {
        title: "Strategic Campaigns",
        description: "Data-driven strategies designed to maximize ROI. We don't just post; we create movements.",
        icon: <Target className="w-6 h-6" />,
        features: ["Audience Analysis", "SEO Optimized", "Conversion Focus", "Long-term Scale"],
        vibe: "bg-orange-500/5",
        accent: "border-orange-500/20",
        text: "text-orange-400"
    }
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#030303] text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-yellow-500/10 to-transparent blur-3xl opacity-30 pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.span
                        className="text-yellow-400 text-xs font-semibold tracking-[0.4em] uppercase mb-6 block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h1
                        className="text-6xl md:text-8xl font-extralight tracking-tight leading-tight mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Engineered for <br />
                        <span className="text-yellow-400 italic">Impact.</span>
                    </motion.h1>
                    <motion.p
                        className="text-white/50 text-xl font-light max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        We combine deep R&D with pure organic ways to deliver growth that doesn&apos;t just garner likes, but drives measurable, long-term ROI. <span className="text-yellow-400">Pan India Branding.</span>
                    </motion.p>
                </div>
            </section>

            {/* Offer Section */}
            <section className="py-12 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        className="p-8 rounded-3xl bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 flex flex-col md:flex-row items-center justify-between gap-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Free Instant Consultation</h3>
                            <p className="text-white/60">Get a customized strategy for your brand&apos;s organic growth today.</p>
                        </div>
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-yellow-500/20">
                            Claim Free Strategy
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-32 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="space-y-32">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-20 items-center p-12 rounded-[3.5rem] border border-white/5 ${service.vibe} backdrop-blur-sm transition-all duration-700 hover:border-white/10`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="space-y-8">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.vibe} ${service.accent} ${service.text} border shadow-xl`}>
                                        {service.icon}
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">{service.title}</h2>
                                    <p className="text-white/60 text-lg font-light leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 text-sm text-white/40">
                                                <div className={`w-1.5 h-1.5 rounded-full ${service.text} bg-current opacity-30`} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <motion.button
                                        className={`flex items-center gap-2 ${service.text} text-sm font-medium pt-4 group-hover:gap-4 transition-all min-h-[44px]`}
                                        onClick={() => window.open(`https://wa.me/917439167389?text=I'm%20interested%20in%20${encodeURIComponent(service.title)}`, "_blank")}
                                    >
                                        Inquire about {service.title} <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                    {service.title === "Organic Content Creation" && (
                                        <a
                                            href="https://wa.me/917439167389?text=I'd%20like%20a%20Free%20Strategy%20for%20Content%20Creation"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-yellow-500 text-xs underline mt-2"
                                        >
                                            Get Free Strategy
                                        </a>
                                    )}
                                </div>

                                <div className="relative aspect-square">
                                    <div className={`absolute inset-0 rounded-[2.5rem] ${service.vibe} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity`} />
                                    <div className="relative h-full rounded-[3rem] border border-white/10 bg-black/40 overflow-hidden flex items-center justify-center p-8">
                                        <BarChart className={`w-32 h-32 ${service.text} opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700`} />
                                        {/* Abstract background patterns */}
                                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-extralight tracking-tight mb-12">Ready to define your <br /> <span className="text-yellow-400">digital legacy?</span></h2>
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-[#030303] px-12 py-5 rounded-full font-bold text-lg shadow-2xl shadow-yellow-500/20 transition-all active:scale-95">
                            Start a Project
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
