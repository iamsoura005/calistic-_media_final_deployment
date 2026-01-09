"use client"

import { motion } from "framer-motion"
import { Home, Sparkles, Layout, MessageSquare, Zap, Target, Cpu, Shield, BarChart, Rocket } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import FooterSection from "@/components/ui/footer"

export default function FeaturesPage() {
    const navItems = [
        { name: "Home", url: "/", icon: Home },
        { name: "Services", url: "/services", icon: Layout },
        { name: "Features", url: "/features", icon: Sparkles },
        { name: "Contact", url: "/contact", icon: MessageSquare }
    ];

    const techFeatures = [
        {
            title: "Data-Driven R&D",
            description: "Deep research into audience demographics and platform algorithms to ensure every move is backed by data.",
            icon: <Cpu className="w-6 h-6 text-yellow-400" />
        },
        {
            title: "Pure Organic Engine",
            description: "Engineered algorithms that prioritize natural reach and sustainable brand growth without ad reliance.",
            icon: <Zap className="w-6 h-6 text-yellow-400" />
        },
        {
            title: "ROI Focused Strategy",
            description: "Every campaign is mapped against business outcomes, ensuring high efficiency and measurable returns.",
            icon: <Target className="w-6 h-6 text-yellow-400" />
        },
        {
            title: "Secure Infrastructure",
            description: "Enterprise-grade security and privacy for brand data and creator collaborations.",
            icon: <Shield className="w-6 h-6 text-yellow-400" />
        },
        {
            title: "Pan-India Analytics",
            description: "Real-time tracking and analysis of performance across various Indian markets and demographics.",
            icon: <BarChart className="w-6 h-6 text-yellow-400" />
        },
        {
            title: "Scalable Deployment",
            description: "Ability to rapidly scale campaigns from niche audiences to national reach within days.",
            icon: <Rocket className="w-6 h-6 text-yellow-400" />
        }
    ];

    return (
        <main className="min-h-screen bg-[#030303] text-white scroll-smooth pb-20">
            <NavBar items={navItems} />

            {/* Hero Section */}
            <section className="relative pt-24 md:pt-40 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-yellow-500/10 to-transparent blur-3xl opacity-30 pointer-events-none" />

                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center gap-4 md:gap-6"
                    >
                        <div className="flex flex-col items-center gap-3 md:gap-4 mb-2 md:mb-4">
                            <img src="/logo-gold.png" alt="Calistic Media" className="h-16 md:h-32 w-auto" />
                            <span className="text-yellow-400 text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase">Core Capabilities</span>
                        </div>
                        <h1 className="text-4xl md:text-8xl font-extralight tracking-tight leading-[1.1] md:leading-tight mb-4 md:mb-8">
                            High Fidelity <br />
                            <span className="text-yellow-400 italic">Features.</span>
                        </h1>
                        <p className="text-white/50 text-sm md:text-xl font-light max-w-2xl leading-relaxed mx-auto px-4">
                            The technological and strategic foundation that powers Calistic Media&apos;s unparalleled organic growth engine.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Tech Features Grid */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {techFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-yellow-500/20 hover:bg-white/[0.04] transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-medium mb-4 group-hover:text-yellow-400 transition-colors uppercase tracking-tight">{feature.title}</h3>
                                <p className="text-white/50 font-light leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-12 rounded-[3rem] bg-gradient-to-br from-yellow-500/10 via-transparent to-amber-500/10 border border-white/5 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.05),transparent_70%)]" />
                        <h2 className="text-4xl md:text-5xl font-extralight mb-8 relative z-10">
                            Ready to experience <br />
                            <span className="text-yellow-400 italic">pure organic growth?</span>
                        </h2>
                        <button
                            className="group relative px-12 py-5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.2)] active:scale-95 z-10"
                            onClick={() => window.open(`https://wa.me/918240721057?text=I'd%20like%20to%20get%20started%20with%20Calistic%20Media's%20High-Fidelity%20Features`, "_blank")}
                        >
                            Start Building Your Legacy
                        </button>
                    </motion.div>
                </div>
            </section>

            <FooterSection />
        </main>
    )
}
