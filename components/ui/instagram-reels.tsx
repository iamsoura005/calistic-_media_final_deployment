"use client"

import { motion } from "framer-motion"
import { ExternalLink, Instagram } from "lucide-react"
import Image from "next/image"

const reels = [
    {
        id: 1,
        image: "/reels/1.jpeg",
        link: "https://www.instagram.com/reel/DPOB-_CD9Q-/?igsh=bzBmYzgyaDBpbTNt",
        caption: "Viral Campaign",
    },
    {
        id: 2,
        image: "/reels/2.jpeg",
        link: "https://www.instagram.com/reel/DROTZESESN9/?igsh=YmIwOTU3MTZ6b2Mw",
        caption: "Brand Story",
    },
    {
        id: 3,
        image: "/reels/3.jpeg",
        link: "https://www.instagram.com/reel/DSSEWoIkxNm/?igsh=MWdyZDc3dWExcDI2YQ==",
        caption: "Influencer Collab",
    },
    {
        id: 4,
        image: "/reels/4.jpeg",
        link: "https://www.instagram.com/reel/DK6aCxsRTSV/?igsh=N3I0d3UycTAyMHJ5",
        caption: "Event Highlights",
    },
]

export function InstagramReels() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
                        Featured <span className="text-yellow-500">Reels</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Check out our latest viral hits and success stories on Instagram.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
                    {reels.map((reel, index) => (
                        <motion.a
                            key={reel.id}
                            href={reel.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-[9/16] rounded-xl md:rounded-2xl overflow-hidden bg-white/5 border border-white/10 active:scale-95 transition-transform transform-gpu"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                        >
                            {/* Glassmorphic Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10 opacity-60 group-hover:opacity-80 transition-opacity" />

                            <Image
                                src={reel.image}
                                alt={reel.caption}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Icon overlay - simplified for mobile */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 md:scale-50 group-hover:scale-100">
                                <div className="h-10 w-10 md:h-12 md:w-12 bg-white/30 rounded-full flex items-center justify-center border border-white/30 shadow-xl">
                                    <Instagram className="h-5 w-5 md:h-6 md:w-6 text-white" />
                                </div>
                            </div>

                            {/* Caption - Always visible on mobile, optimized text */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white font-medium text-xs md:text-sm lg:text-base flex items-center justify-center md:justify-start gap-1.5 md:gap-2">
                                    <span className="truncate">{reel.caption}</span>
                                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
