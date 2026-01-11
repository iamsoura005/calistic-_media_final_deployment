"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Search, BarChart3, PenTool, TrendingUp, ArrowUpRight } from "lucide-react";

interface BentoCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
    delay?: number;
}

const BentoCard = ({ title, description, icon, className, delay = 0 }: BentoCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ scale: 1.02 }}
        className={cn(
            "group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 hover:bg-white/10 transition-all duration-300",
            className
        )}
    >
        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-6 h-6 text-white/50" />
        </div>

        <div className="h-full flex flex-col justify-between">
            <div className="mb-4 text-blue-400 group-hover:text-lime-300 transition-colors duration-300">
                {icon}
            </div>
            <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-serif">{title}</h3>
                <p className="text-white/50 text-sm md:text-base">{description}</p>
            </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 group-hover:from-blue-500/10 group-hover:via-lime-400/10 group-hover:to-blue-500/10 transition-all duration-500" />
    </motion.div>
);

export function BentoServices() {
    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif"
                    >
                        Our Expertise
                    </motion.h2>
                    <div className="w-full h-px bg-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Large Card - Strategy */}
                    <BentoCard
                        title="Strategic Growth"
                        description="Comprehensive market analysis and roadmap planning tailored to scale your brand efficiently."
                        icon={<TrendingUp className="w-10 h-10" />}
                        className="md:col-span-2 md:row-span-1"
                        delay={0.1}
                    />

                    {/* SEO */}
                    <BentoCard
                        title="SEO Mastery"
                        description="Dominate search rankings and drive pure organic traffic."
                        icon={<Search className="w-10 h-10" />}
                        delay={0.2}
                    />

                    {/* Meta Ads */}
                    <BentoCard
                        title="Meta Ads"
                        description="High-converting paid campaigns that deliver measurable ROI."
                        icon={<BarChart3 className="w-10 h-10" />}
                        delay={0.3}
                    />

                    {/* Content Creation */}
                    <BentoCard
                        title="Content Creation"
                        description="Cinematic storytelling that resonates with your audience."
                        icon={<PenTool className="w-10 h-10" />}
                        className="md:col-span-2"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
}
