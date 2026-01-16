"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Sparkles, Loader2 } from "lucide-react"

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyqyAg-opc-CvBjWR65FQtdbdyV1DqMNCwhDYW2OesWWD0gv2PVHQqZByM5F5Vv_Sqf/exec"

interface SignUpPopupProps {
    isOpen: boolean
    onClose: () => void
}

export function SignUpPopup({ isOpen, onClose }: SignUpPopupProps) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setIsLoading(true)

        try {
            // Prepare the payload matching the backend schema
            const payload = {
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                mobile: phone.trim(),
                email: email.trim()
            }

            // Send POST request to Google Apps Script
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Required for Google Apps Script
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })

            // With no-cors mode, we can't read the response
            // but if fetch didn't throw, the request was sent successfully
            console.log("Lead submitted successfully:", payload)

            setIsSubmitted(true)
            setTimeout(() => {
                onClose()
                setIsSubmitted(false)
                // Reset form
                setFirstName("")
                setLastName("")
                setEmail("")
                setPhone("")
            }, 3000)
        } catch (err) {
            console.error("Error submitting form:", err)
            setError("Something went wrong. Please try again.")
        } finally {
            setIsLoading(false)
        }
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
                        initial={{ scale: 0.5, opacity: 0, y: 0 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        {/* Decorative background glow */}
                        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-yellow-500/10 blur-3xl" />

                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 text-white/40 hover:text-white transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
                                <div className="p-4 bg-yellow-500/20 rounded-full text-yellow-500 mb-2">
                                    <Sparkles className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">
                                    Thanks for connecting!
                                </h3>
                                <p className="text-white/60">
                                    We'll get back to you shortly.
                                </p>
                            </div>
                        ) : (
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
                                    {/* Error message display */}
                                    {error && (
                                        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
                                            {error}
                                        </div>
                                    )}

                                    {/* First Name & Last Name side by side */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                            required
                                            disabled={isLoading}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                            required
                                            disabled={isLoading}
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
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <input
                                            type="tel"
                                            placeholder="Phone Number (10 digits)"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            pattern="[0-9]{10}"
                                            title="Please enter a 10-digit phone number"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-yellow-500/50 transition-colors"
                                            required
                                            disabled={isLoading}
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-500/50 disabled:cursor-not-allowed text-[#030303] py-4 rounded-xl font-semibold flex items-center justify-center gap-2 mt-6 shadow-lg shadow-yellow-500/20 transition-colors"
                                        whileHover={!isLoading ? { scale: 1.02 } : {}}
                                        whileTap={!isLoading ? { scale: 0.98 } : {}}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                SUBMITTING...
                                            </>
                                        ) : (
                                            <>
                                                GET STARTED <ArrowRight className="h-4 w-4" />
                                            </>
                                        )}
                                    </motion.button>
                                </form>

                                <p className="text-[10px] text-center text-white/20 uppercase tracking-[0.2em]">
                                    No spam. Only World-Class growth.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
