"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Sparkles } from "lucide-react"

interface SignUpPopupProps {
    isOpen: boolean
    onClose: () => void
}

export function SignUpPopup({ isOpen, onClose }: SignUpPopupProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log("Submitted:", { name, email })
        onClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-[#030303]/80 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-zinc-900/90 border border-white/10 p-8 shadow-2xl"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        {/* Decorative background glow */}
                        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-yellow-500/10 blur-3xl" />

                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 text-white/40 hover:text-white transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="relative space-y-6">
                            <div className="flex flex-col items-center text-center space-y-2">
                                <div className="p-3 bg-yellow-500/10 rounded-2xl text-yellow-500 mb-2">
                                    <Sparkles className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-light text-white tracking-tight">
                                    Scale Your <span className="text-yellow-400 font-medium italic">Brand</span>
                                </h3>
                                <p className="text-sm text-white/50 max-w-[280px]">
                                    Join India&apos;s leading marketing network and start growing today.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-1">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                        required
                                    />
                                </div>
                                <div className="space-y-1">
                                    <input
                                        type="email"
                                        placeholder="Professional Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                        required
                                    />
                                </div>

                                <a href="/signin" className="w-full">
                                    <motion.button
                                        type="button"
                                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-[#030303] py-4 rounded-xl font-semibold flex items-center justify-center gap-2 mt-6 shadow-lg shadow-yellow-500/20"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        GET STARTED <ArrowRight className="h-4 w-4" />
                                    </motion.button>
                                </a>
                            </form>

                            <p className="text-[10px] text-center text-white/20 uppercase tracking-[0.2em]">
                                No spam. Only World-Class growth.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
