"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, Sparkles, User, Briefcase, Mail, MessageSquare } from "lucide-react"

export function LeadCapture() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Simulate submission
        setTimeout(() => {
            setLoading(false)
            setIsSubmitted(true)
        }, 1500)
    }

    return (
        <section className="w-full py-32 px-6 relative overflow-hidden bg-[#030303]">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Content Section */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-yellow-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
                                Join the Movement
                            </span>
                            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-none mb-8">
                                Design your <br />
                                <span className="text-yellow-400 italic">Trajectory.</span>
                            </h2>
                            <p className="text-white/50 text-xl font-light leading-relaxed max-w-md">
                                Partner with India&apos;s premier agency to bridge the gap between your brand and millions of engaged followers.
                            </p>
                        </motion.div>

                        <div className="space-y-6 pt-4">
                            {[
                                { icon: <Sparkles className="w-5 h-5" />, text: "Custom Engineered Campaigns" },
                                { icon: <User className="w-5 h-5" />, text: "Direct Creator Access" },
                                { icon: <Briefcase className="w-5 h-5" />, text: "Measurable ROI & Growth" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-4 text-white/70 font-light"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 shrink-0">
                                        {item.icon}
                                    </div>
                                    {item.text}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Form Section */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-white/30 font-semibold ml-4">Full Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="John Doe"
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest text-white/30 font-semibold ml-4">Brand / Handle</label>
                                                <div className="relative">
                                                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                                    <input
                                                        type="text"
                                                        required
                                                        placeholder="@calisticmedia"
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest text-white/30 font-semibold ml-4">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="john@example.com"
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest text-white/30 font-semibold ml-4">Your Objective</label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-white/20" />
                                                <textarea
                                                    required
                                                    placeholder="Tell us about your brand goals..."
                                                    rows={4}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all resize-none"
                                                />
                                            </div>
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 text-[#030303] py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-yellow-500/20 transition-all duration-300 group"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {loading ? "SENDING..." : (
                                                <>
                                                    SEND OBJECTIVE
                                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        className="text-center py-12 space-y-6"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto text-yellow-500 mb-6">
                                            <CheckCircle className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-light text-white">Objective Received.</h3>
                                        <p className="text-white/50 font-light">
                                            Our strategic team will review your <br /> brand vision and reach out shortly.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-yellow-500 text-sm font-medium hover:underline pt-4"
                                        >
                                            Send another objective
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Decorative floating elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
