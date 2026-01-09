"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
    const phoneNumber = "918240721057" // Using number from footer
    const message = encodeURIComponent("Hi Calistic Media, I'm interested in your services!")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-[9999]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3, duration: 0.5, type: "spring" }}
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4"
            >
                {/* Visual Label */}
                <div className="absolute right-full mr-4 bg-[#121212] border border-white/10 px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 shadow-2xl backdrop-blur-md">
                    <span className="text-white text-sm font-medium">Get Instant Consultation</span>
                </div>

                {/* Subtle outer glow instead of border */}
                <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl group-hover:bg-green-500/40 transition-all duration-300 scale-150" />

                {/* Main button */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                    <MessageCircle className="h-7 w-7 fill-white" />
                </div>

                {/* Pulsing effect to make it feel alive */}
                <div className="absolute inset-0 rounded-full bg-green-500/40 animate-ping opacity-0 group-hover:opacity-100" />
            </a>
        </motion.div>
    )
}
