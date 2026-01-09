"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ArrowUpRight, Calendar } from "lucide-react"
import { ElegantShape } from "./shape-landing-hero"
import { Navbar } from "./navbar"
import { GooeyLoader } from "./loader-10"
import { SignUpPopup } from "./sign-up-popup"
import AboutUsSection from "./about-us-section"

const GrainTexture = () => (
    <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
    />
)

export function LetsWorkTogether() {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isSignUpOpen, setIsSignUpOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
            // Show sign up popup after loading finishes
            setTimeout(() => {
                setIsSignUpOpen(true)
            }, 800)
        }, 3000) // Slightly longer loading for "classy" feel
        return () => clearTimeout(timer)
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setIsClicked(true)

        setTimeout(() => {
            setShowSuccess(true)
        }, 500)
    }

    return (
        <>
            {/* Premium Textures */}
            {!isLoading && <GrainTexture />}

            {/* Premium Header */}
            {!isLoading && <Navbar />}

            {/* Loading Screen */}
            {isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#030303]">
                    <GooeyLoader
                        color="#facc15"
                    />
                </div>
            )}

            {/* Main Content */}
            <section className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden bg-[#030303] text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl pointer-events-none" />

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <ElegantShape
                        delay={0.3}
                        width={600}
                        height={140}
                        rotate={12}
                        gradient="from-indigo-500/[0.15]"
                        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                    />
                    <ElegantShape
                        delay={0.5}
                        width={500}
                        height={120}
                        rotate={-15}
                        gradient="from-rose-500/[0.15]"
                        className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                    />
                    <ElegantShape
                        delay={0.4}
                        width={300}
                        height={80}
                        rotate={-8}
                        gradient="from-violet-500/[0.15]"
                        className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                    />
                    {/* New Ambient Shapes for Attractiveness */}
                    <ElegantShape
                        delay={0.6}
                        width={400}
                        height={100}
                        rotate={20}
                        gradient="from-yellow-500/[0.1]"
                        className="right-[10%] top-[10%]"
                    />
                    <ElegantShape
                        delay={0.7}
                        width={250}
                        height={60}
                        rotate={-25}
                        gradient="from-amber-500/[0.1]"
                        className="left-[20%] top-[40%]"
                    />
                </div>

                <div className="relative flex flex-col items-center gap-12 z-10 w-full max-w-4xl mx-auto">
                    {showSuccess && (
                        <div
                            className="fixed inset-0 z-40 overflow-y-auto"
                            style={{
                                opacity: showSuccess ? 1 : 0,
                                transition: "opacity 0.5s ease-in-out",
                            }}
                        >
                            <AboutUsSection />
                        </div>
                    )}

                    <div
                        className="flex items-center gap-3 transition-all duration-500"
                        style={{
                            opacity: isClicked ? 0 : 1,
                            transform: isClicked ? "translateY(-20px)" : "translateY(0)",
                            pointerEvents: isClicked ? "none" : "auto",
                        }}
                    >
                        {/* Stats removed as per user request */}

                    </div>

                    <div
                        className="group relative cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>)}
                        style={{
                            pointerEvents: isClicked ? "none" : "auto",
                        }}
                    >
                        <div className="flex flex-col items-center gap-6">
                            <h2
                                className="relative text-center text-4xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                style={{
                                    opacity: isClicked ? 0 : 1,
                                    transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
                                }}
                            >
                                <span className="block overflow-hidden pb-2">
                                    <span
                                        className="block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                        style={{
                                            transform: isClicked ? "translateY(-100%)" : isHovered ? "translateY(-8%)" : "translateY(0)",
                                            opacity: isClicked ? 0 : 1,
                                        }}
                                    >
                                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                            Organic
                                        </span>
                                    </span>
                                </span>
                                <span className="block overflow-hidden">
                                    <span
                                        className="block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                                        style={{
                                            transform: isClicked ? "translateY(-100%)" : isHovered ? "translateY(-8%)" : "translateY(0)",
                                            opacity: isClicked ? 0 : 1,
                                        }}
                                    >
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white/90 to-amber-300">Growth</span>
                                    </span>
                                </span>
                            </h2>

                            <div className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
                                <div
                                    className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                                    style={{
                                        borderColor: isClicked ? "#ffffff" : isHovered ? "#ffffff" : "rgba(255,255,255,0.2)",
                                        backgroundColor: isClicked ? "transparent" : isHovered ? "#ffffff" : "transparent",
                                        transform: isClicked ? "scale(3)" : isHovered ? "scale(1.1)" : "scale(1)",
                                        opacity: isClicked ? 0 : 1,
                                        transitionDuration: isClicked ? "700ms" : "500ms",
                                    }}
                                />
                                <ArrowUpRight
                                    className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                                    style={{
                                        transform: isClicked
                                            ? "translate(100px, -100px) scale(0.5)"
                                            : isHovered
                                                ? "translate(2px, -2px)"
                                                : "translate(0, 0)",
                                        opacity: isClicked ? 0 : 1,
                                        color: isHovered && !isClicked ? "#000000" : "#ffffff",
                                        transitionDuration: isClicked ? "600ms" : "500ms",
                                    }}
                                />
                            </div>
                        </div>

                        <div className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
                            <div
                                className="h-px w-8 bg-white/20 transition-all duration-500 sm:w-12"
                                style={{
                                    transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                                    opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                                }}
                            />
                        </div>
                        <div className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
                            <div
                                className="h-px w-8 bg-white/20 transition-all duration-500 sm:w-12"
                                style={{
                                    transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                                    opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                                }}
                            />
                        </div>
                    </div>

                    <div
                        className="mt-8 flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100"
                        style={{
                            opacity: isClicked ? 0 : 1,
                            transform: isClicked ? "translateY(20px)" : "translateY(0)",
                            pointerEvents: isClicked ? "none" : "auto",
                        }}
                    >
                        <p className="max-w-md text-sm leading-relaxed text-white/50">
                            We are the best in the city.
                        </p>
                        <span className="text-xs tracking-widest uppercase text-white/30">calisticproduction@gmail.com</span>
                    </div>
                </div>
            </section>

            {/* Post-loading Enhancements */}
            {!isLoading && (
                <>
                    <SignUpPopup
                        isOpen={isSignUpOpen}
                        onClose={() => setIsSignUpOpen(false)}
                    />
                </>
            )}
        </>
    )
}
