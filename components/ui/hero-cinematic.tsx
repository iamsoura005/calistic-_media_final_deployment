"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroCinematic() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20">
            {/* Background Elements - Optimized for Mobile */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[60px] md:blur-[120px] mix-blend-screen opacity-60 animate-pulse-slow will-change-transform" />
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-lime-400/5 rounded-full blur-[50px] md:blur-[100px] mix-blend-screen opacity-40 will-change-transform" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-5xl"
                >
                    {/* Cinematic Typography */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1] font-serif">
                        We Scale Brands <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lime-300">
                            Beyond the Horizon.
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl font-light"
                >
                    Data-driven marketing for elite e-commerce brands.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-5"
                >
                    <Link
                        href="/contact"
                        className="group relative px-8 py-4 rounded-full bg-blue-600 text-white font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get a Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>

                    <Link
                        href="/#results"
                        className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
                    >
                        View Results
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
