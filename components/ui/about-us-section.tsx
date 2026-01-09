"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useInView, useScroll, useTransform, motion, useSpring, AnimatePresence } from "framer-motion"
import {
    Zap, ArrowRight, Pen, PenTool, Building2, Sparkles, Star,
    CheckCircle, Smartphone, Globe, Layout, ChevronRight,
    Award, Users, Calendar, TrendingUp, Target, Camera
} from "lucide-react"
import FooterSection from "./footer"
import { LeadCapture } from "./lead-capture"

export default function AboutUsSection({
    showFooter = false,
    showLeadCapture = false
}: {
    showFooter?: boolean
    showLeadCapture?: boolean
}) {
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

    const scrollToLeadCapture = () => {
        document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4 },
        },
    }

    const services = [
        {
            icon: <Users className="w-6 h-6" />,
            secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />,
            title: "1. Influencer Marketing",
            description:
                "Growth that lasts. We specialize in organic reach through our massive network of 50,000+ creators. We build long-term brand equity without the heavy dependency on Meta or Google Ads. We don't just push; we pull through pure organic ways.",
            position: "left",
        },
        {
            icon: <PenTool className="w-6 h-6" />,
            secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />,
            title: "2. Content Creation",
            description:
                "Extraordinary content plans tailored for resonance. We create high-engagement UGC, reaction content, and cinematic narratives that stop the scroll. Every piece is engineered to fit into a larger organic strategy, ensuring your brand story resonates deeply.",
            position: "right",
        },
        {
            icon: <Target className="w-6 h-6" />,
            secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400" />,
            title: "3. Customized Campaigns",
            description:
                "From digital screens to physical presence. We manage everything from influencer campaigns and gigs to events and physical promotions. Our process involves thorough surveys and market analysis to understand exactly where to work for maximum impact.",
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
                        className="space-y-8 text-center lg:text-left"
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
                            className="text-white/90 text-xl md:text-2xl leading-tight font-light italic border-l-2 border-yellow-500 pl-6"
                            variants={itemVariants}
                        >
                            &quot;We drive <span className="text-yellow-400 font-bold">Pure Organic Growth.</span> By deeply understanding your brand through R&D, we pinpoint exactly where to pull and what yields the highest ROI. <span className="text-yellow-400">Operating Pan India.</span>&quot;
                        </motion.p>

                        <motion.p
                            className="text-white/60 text-base md:text-lg leading-relaxed font-light max-w-lg"
                            variants={itemVariants}
                        >
                            We specialize in extraordinary content plans, UGC reactions, and organic influencer marketing. Our goal isn't just visibility; it's a movement. We don't rely on pushing ads—we build sustainable trajectories that grow further, naturally.
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
                            className="pt-4 flex justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            <motion.button
                                className="group relative px-12 py-5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.2)] hover:shadow-[0_0_50px_rgba(250,204,21,0.4)]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.open("https://wa.me/918240721057?text=I'm%20interested%20in%20a%20Customized%20Organic%20Strategy%20for%20Influencer%20Marketing", "_blank")}
                            >
                                <span className="relative z-10">Inquire Now</span>
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
                                className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                {/* Subtle background glow instead of box */}
                                <div className="absolute inset-0 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />
                                <img
                                    src="/logo-gold.png"
                                    alt="Calistic Media"
                                    className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(250,204,21,0.2)]"
                                />
                            </motion.div>

                            {/* Floating Element */}
                            <motion.div
                                className="absolute -top-6 -right-6 w-20 h-20 flex items-center justify-center text-yellow-400"
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
                    className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-20"
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
                {showLeadCapture && <LeadCapture />}

                {/* Global Footer */}
                {showFooter && <FooterSection />}
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
        if (val >= 1000000) {
            const m = val / 1000000
            return (m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)) + 'M'
        }
        if (val >= 1000) {
            const k = val / 1000
            return (k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)) + 'K'
        }
        return val.toString()
    })

    return (
        <motion.div
            className="p-6 flex flex-col items-center text-center group transition-colors duration-300"
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
