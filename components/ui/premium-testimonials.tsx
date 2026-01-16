"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const testimonials = [
    {
        name: "CEO & Founder",
        role: "Avish Fragrance",
        company: "Avish Fragrance",
        avatar: "/testimonials/t1.jpeg",
        rating: 5,
        text: "We are satisfied with Calistic media handling of our social media and advertising. Their young team brings fresh ideas, strong creativity, and professional execution. We wish them continued success ahead.",
        results: ["Fresh Ideas", "Strong Creativity", "Professional Execution"]
    },
    {
        name: "Happinest India",
        role: "Brand Partner",
        company: "Happinest India",
        avatar: "/testimonials/t2.png",
        rating: 5,
        text: "We had engaged Calistic Media for influencer marketing services, and our experience was excellent. The team was highly professional, responsive, and well-organized throughout the entire campaign. From understanding our brand requirements to executing the collaborations smoothly, everything was handled with clarity and precision.",
        results: ["Highly Professional", "Well-Organized", "Seamless Process"]
    },
    {
        name: "Swarnojit Sengupta",
        role: "Media Head",
        company: "Wow Momo",
        avatar: "/testimonials/t3.jpeg",
        rating: 5,
        text: "As a brand like WOW! Momo, we have always been into innovation. The partnership with Calistic Media for our SSTK combo edition was fun, quirky, and energetic to the tunes of the brand tonality. They helped us create a viral moment with our store promoters.",
        results: ["Innovative Campaign", "Viral Content", "Brand Integration"]
    }
];

export function PremiumTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 45 : -45
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 45 : -45
        })
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.23, 0.86, 0.39, 0.96]
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="relative py-32 bg-[#030303] text-white overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Animated gradient mesh */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.03] via-purple-500/[0.02] to-yellow-500/[0.03]"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundSize: '400% 400%'
                    }}
                />

                {/* Moving light orbs - changed to brand colors */}
                <motion.div
                    className="absolute top-1/3 left-1/5 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl transform-gpu will-change-transform"
                    animate={{
                        x: [0, 150, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl transform-gpu will-change-transform"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <motion.div
                ref={containerRef}
                className="relative z-10 max-w-7xl mx-auto px-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    variants={fadeInUp}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6"
                        whileHover={{ scale: 1.05, borderColor: "rgba(250, 204, 21, 0.3)" }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="h-4 w-4 text-yellow-400" />
                        </motion.div>
                        <span className="text-sm font-medium text-white/80">
                            Client Success Stories
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
                        variants={fadeInUp}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                            Trusted by
                        </span>
                        <br />
                        <motion.span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                backgroundSize: '200% 200%'
                            }}
                        >
                            Industry Leaders
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="text-xl sm:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed"
                        variants={fadeInUp}
                    >
                        Join the hundreds of brands building high-fidelity organic growth with Calistic Media.
                    </motion.p>
                </motion.div>

                {/* Main Testimonial Display */}
                <div className="relative max-w-6xl mx-auto mb-16">
                    <div className="relative h-[650px] md:h-[500px] perspective-1000">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 },
                                    rotateY: { duration: 0.6 }
                                }}
                                className="absolute inset-0"
                            >
                                <div className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/[0.15] p-6 md:p-12 overflow-hidden group">
                                    {/* Animated background gradient */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.05] via-transparent to-purple-500/[0.05] rounded-3xl transform-gpu will-change-transform"
                                        animate={{
                                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                                        }}
                                        transition={{
                                            duration: 15,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        style={{
                                            backgroundSize: '200% 200%' // Reduced size to lower memory usage
                                        }}
                                    />

                                    {/* Quote icon */}
                                    <motion.div
                                        className="absolute top-8 right-8 opacity-20"
                                        animate={{ rotate: [0, 10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                        <Quote className="w-16 h-16 text-white" />
                                    </motion.div>

                                    <div className="relative z-10 h-full flex flex-col md:flex-row items-center gap-8">
                                        {/* User Info */}
                                        <div className="flex-shrink-0 text-center md:text-left">
                                            <motion.div
                                                className="relative mb-6 inline-block"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="w-24 h-24 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white/20 relative transform-gpu will-change-transform">
                                                    <img
                                                        src={testimonials[currentIndex].avatar}
                                                        alt={testimonials[currentIndex].name}
                                                        className="w-full h-full object-cover"
                                                        loading="eager"
                                                    />
                                                    <motion.div
                                                        className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-400/20"
                                                        animate={{ opacity: [0, 0.3, 0] }}
                                                        transition={{ duration: 3, repeat: Infinity }}
                                                    />
                                                </div>

                                                {/* Floating ring animation */}
                                                <motion.div
                                                    className="absolute inset-0 border-2 border-yellow-400/30 rounded-full"
                                                    animate={{
                                                        scale: [1, 1.4, 1],
                                                        opacity: [0.5, 0, 0.5]
                                                    }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                            </motion.div>

                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {testimonials[currentIndex].name}
                                            </h3>
                                            <p className="text-yellow-400 mb-1 font-medium">
                                                {testimonials[currentIndex].role}
                                            </p>
                                            <p className="text-white/60 mb-4">
                                                {testimonials[currentIndex].company}
                                            </p>

                                            {/* Star Rating */}
                                            <div className="flex justify-center md:justify-start gap-1 mb-6">
                                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: i * 0.1, duration: 0.3 }}
                                                    >
                                                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 overflow-y-auto max-h-[300px] md:max-h-full scrollbar-none">
                                            <motion.blockquote
                                                className="text-base md:text-xl text-white/90 leading-relaxed mb-8 font-light italic"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.3, duration: 0.8 }}
                                            >
                                                "{testimonials[currentIndex].text}"
                                            </motion.blockquote>

                                            {/* Results */}
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                {testimonials[currentIndex].results.map((result, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="bg-white/[0.05] rounded-lg p-3 border border-white/[0.1] backdrop-blur-sm"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                                                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                                    >
                                                        <span className="text-sm text-white/70 font-medium">
                                                            {result}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <motion.button
                            onClick={prevTestimonial}
                            className="p-3 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm text-white hover:bg-white/[0.15] transition-all"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </motion.button>

                        {/* Dots Indicator */}
                        <div className="flex gap-3">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-yellow-400 scale-125'
                                        : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={nextTestimonial}
                            className="p-3 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm text-white hover:bg-white/[0.15] transition-all"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>

                {/* Stats Section */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    variants={staggerContainer}
                >
                    {[
                        { number: "50,000+", label: "Creators" },
                        { number: "100+", label: "Brands" },
                        { number: "50M+", label: "Monthly Reach" },
                        { number: "4.9/5", label: "Client Satisfaction" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center group"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.div
                                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent mb-2"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-white/60 text-sm font-medium group-hover:text-white/80 transition-colors">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
