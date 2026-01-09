"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useInView, useScroll, useTransform, motion, useSpring, AnimatePresence } from "framer-motion"
import {
    Zap, ArrowRight, Pen, PenTool, Building2, Sparkles, Star,
    CheckCircle, Smartphone, Globe, Layout, ChevronRight,
    Award, Users, Calendar, TrendingUp
} from "lucide-react"
import { Footer } from "./footer"
import { LeadCapture } from "./lead-capture"

export default function AboutUsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
    const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

    // Parallax effect for decorative elements
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 },
        },
    }

    const services = [
        {
            icon: <Pen className="w-6 h-6" />,
            secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />,
            title: "1. Influencer Marketing",
            description:
                "The Art of Human Connection. We don't just find followers; we identify voices that command attention. Our approach to influencer marketing is rooted in authenticity—bridging the gap between your brand and the right audience. We curate partnerships that feel natural, effortless, and powerful, ensuring your message doesn't just reach people, it moves them.",
            position: "left",
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />,
            title: "2. Content Creation",
            description:
                "Visuals That Defy the Ordinary. In a world of constant noise, we create the silence. From cinematic production to high-end social media aesthetics, our content is designed to stop the scroll. We blend precision technology with creative intuition to produce visuals that are as smooth as they are striking. If it's Calistic, it's world-class.",
            position: "right",
        },
        {
            icon: <Building2 className="w-6 h-6" />,
            secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />,
            title: "3. Customized Campaigns",
            description:
                "Precision Strategy. Bespoke Execution. Your brand is unique; your strategy should be too. We reject the \"one-size-fits-all\" gravity of traditional marketing. Every campaign we build is a custom-engineered masterpiece, tailored specifically to your goals and your market. We design the trajectory; you enjoy the elevation.",
            position: "left",
        },
    ]

    const stats = [
        { icon: <Award />, value: 50000, label: "Creators Network", suffix: "+" },
        { icon: <Users />, value: 150000000, label: "Monthly Views", suffix: "+" },
        { icon: <Calendar />, value: 500, label: "Campaigns Delivered", suffix: "+" },
        { icon: <TrendingUp />, value: 3, label: "Average ROI", suffix: "x" },
    ]

    return (
        <section
            id="about-section"
            ref={sectionRef}
            className="w-full py-24 px-4 bg-[#030303] text-white overflow-hidden relative"
        >
            {/* Decorative background elements */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 rounded-full bg-yellow-500/5 blur-3xl"
                style={{ y: y1, rotate: rotate1 }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
                style={{ y: y2, rotate: rotate2 }}
            />
            <motion.div
                className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-yellow-400/30"
                animate={{
                    y: [0, -15, 0],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-purple-400/30"
                animate={{
                    y: [0, 20, 0],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            <motion.div
                className="container mx-auto max-w-6xl relative z-10"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {/* Content Section - Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    {/* Left: Text Content */}
                    <motion.div
                        className="space-y-8 text-left"
                        variants={containerVariants}
                    >
                        <motion.span
                            className="text-yellow-400 font-medium flex items-center gap-2 tracking-[0.3em] text-[10px] uppercase mb-4"
                            variants={itemVariants}
                        >
                            <Zap className="w-3 h-3" />
                            India&apos;s Premier Agency
                        </motion.span>
                        <motion.h2
                            className="text-6xl md:text-8xl font-extralight tracking-tight leading-none text-white"
                            variants={itemVariants}
                        >
                            About <span className="text-yellow-400 italic">Us</span>
                        </motion.h2>

                        <motion.p
                            className="text-white/90 text-xl md:text-2xl leading-snug font-light italic border-l-2 border-yellow-500/30 pl-6"
                            variants={itemVariants}
                        >
                            &quot;We are India&apos;s premier influencer marketing agency, bridging the gap between brands and their audiences through authentic, engaging content and strategic influencer partnerships. <span className="text-yellow-400 font-normal">We serve Pan India.</span>&quot;
                        </motion.p>

                        <motion.p
                            className="text-white/40 text-sm md:text-base leading-relaxed font-extralight max-w-lg"
                            variants={itemVariants}
                        >
                            Founded on the principle that every brand has a unique story to tell, we specialize in crafting customized campaigns that resonate with your target audience. Our team of creative professionals and marketing strategists work tirelessly to ensure your brand stands out in the digital landscape.
                        </motion.p>

                        <motion.div
                            className="w-full h-32 mt-8 bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden relative flex items-center justify-center group"
                            variants={itemVariants}
                        >
                            <div className="absolute inset-0 flex items-center justify-between px-8 text-white/5 group-hover:text-yellow-500/10 transition-colors">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} className="w-[1px] h-full bg-current" />
                                ))}
                            </div>
                            <div className="relative flex flex-col items-center">
                                <motion.div
                                    className="flex items-end gap-1 h-12 mb-2"
                                >
                                    {[40, 60, 45, 70, 55, 90, 80, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 bg-yellow-500/40 rounded-t-sm"
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ duration: 0.8, delay: i * 0.05 }}
                                        />
                                    ))}
                                </motion.div>
                                <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase font-medium">ROI Impact Growth Momentum</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="pt-4"
                            variants={itemVariants}
                        >
                            <motion.button
                                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-full flex items-center gap-3 text-sm font-medium transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Portfolio
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                <div className="absolute inset-0 rounded-full border border-yellow-500/50 scale-105 opacity-0 group-hover:opacity-100 transition-opacity blur-[2px]" />
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right: Square Logo with Parallax */}
                    <motion.div
                        className="flex justify-center lg:justify-end relative"
                        style={{ y: y1 }}
                        variants={itemVariants}
                    >
                        <div className="relative w-64 h-64 md:w-[450px] md:h-[450px]">
                            {/* Decorative Background Glows */}
                            <div className="absolute inset-0 rounded-[3rem] bg-yellow-500/10 blur-[60px] animate-pulse" />
                            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-yellow-500/20 via-transparent to-purple-500/20 blur-[10px]" />

                            <motion.div
                                className="relative w-full h-full rounded-[2.5rem] border border-white/10 bg-[#030303]/90 backdrop-blur-2xl p-16 shadow-2xl flex items-center justify-center overflow-hidden"
                                whileHover={{ scale: 1.02, rotate: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img
                                    src="/calistic-logo.jpg"
                                    alt="Calistic Media"
                                    className="w-full h-full object-contain brightness-110 drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                                />
                                {/* Overlay gradient for depth */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                            </motion.div>

                            {/* Floating Element */}
                            <motion.div
                                className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-500/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-yellow-400 shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Sparkles className="w-8 h-8" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Triplets Alignment - Balanced 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {services.map((service, index) => (
                        <ServiceItem
                            key={index}
                            icon={service.icon}
                            secondaryIcon={service.secondaryIcon}
                            title={service.title}
                            description={service.description}
                            variants={itemVariants}
                            delay={index * 0.2}
                        />
                    ))}
                </div>

                {/* Stats Section with Scroll Animation */}
                <motion.div
                    ref={statsRef}
                    className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {stats.map((stat, index) => (
                        <StatCounter
                            key={index}
                            icon={stat.icon}
                            value={stat.value}
                            label={stat.label}
                            suffix={stat.suffix}
                            delay={index * 0.1}
                        />
                    ))}
                </motion.div>

                {/* Lead Capture Section */}
                <LeadCapture />

                {/* Global Footer */}
                <Footer />
            </motion.div>
        </section>
    )
}

interface ServiceItemProps {
    icon: React.ReactNode
    secondaryIcon?: React.ReactNode
    title: string
    description: string
    variants: any
    delay: number
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay }: ServiceItemProps) {
    return (
        <motion.div
            className="flex flex-col items-center text-center group"
            variants={variants}
            transition={{ delay }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
            <motion.div
                className="mb-8 relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: delay + 0.3 }}
            >
                <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                    className="text-white bg-white/5 border border-white/10 p-5 rounded-2xl transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-[#030303] group-hover:border-yellow-500 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] relative z-10"
                    whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                >
                    {icon}
                    {secondaryIcon}
                </motion.div>
            </motion.div>

            <h3 className="text-2xl font-extralight text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300 tracking-tight">
                {title}
            </h3>

            <p className="text-sm text-white/50 leading-relaxed font-light px-4">
                {description}
            </p>

            <motion.div
                className="mt-6 flex items-center justify-center text-yellow-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
            >
                <span className="flex items-center gap-1 cursor-pointer">
                    DISCOVER MORE <ArrowRight className="w-3 h-3" />
                </span>
            </motion.div>
        </motion.div>
    )
}

interface StatCounterProps {
    icon: React.ReactNode
    value: number
    label: string
    suffix: string
    delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
    const countRef = useRef(null)
    const isInView = useInView(countRef, { once: false })
    const [hasAnimated, setHasAnimated] = useState(false)

    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 10,
    })

    useEffect(() => {
        if (isInView && !hasAnimated) {
            springValue.set(value)
            setHasAnimated(true)
        } else if (!isInView && hasAnimated) {
            springValue.set(0)
            setHasAnimated(false)
        }
    }, [isInView, value, springValue, hasAnimated])

    const displayValue = useTransform(springValue, (latest) => {
        const val = Math.floor(latest)
        if (val >= 1000000) return (val / 1000000).toFixed(1) + 'M'
        if (val >= 1000) return (val / 1000).toFixed(0) + 'K'
        return val.toString()
    })

    return (
        <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white/10 transition-colors duration-300"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay },
                },
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <motion.div
                className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mb-4 text-yellow-400 group-hover:bg-yellow-400/20 transition-colors duration-300"
                whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
            >
                {icon}
            </motion.div>
            <motion.div ref={countRef} className="text-3xl font-bold text-white flex items-center">
                <motion.span>{displayValue}</motion.span>
                <span>{suffix}</span>
            </motion.div>
            <p className="text-white/60 text-sm mt-1">{label}</p>
            <motion.div className="w-10 h-0.5 bg-yellow-400 mt-3 group-hover:w-16 transition-all duration-300" />
        </motion.div>
    )
}
