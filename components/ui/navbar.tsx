"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/#about-section" },
        { name: "Contact", href: "/contact" },
        { name: "Sign In", href: "/signin" },
    ]

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-[#030303]/80 backdrop-blur-lg border-b border-white/10" : "py-6 bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center justify-center md:items-start">
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img src="/logo-gold.png" alt="Calistic logo" className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-light text-white/70 hover:text-yellow-400 transition-colors tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-3">
                        <a href="https://wa.me/917439167389?text=I'm%20interested%20in%20a%20Free%20Consultation" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                className="border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-500 px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 min-h-[44px]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                FREE CONSULTATION
                            </motion.button>
                        </a>
                        <a href="/signin">
                            <motion.button
                                className="bg-yellow-500 hover:bg-yellow-400 text-[#030303] px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-yellow-500/20 min-h-[44px]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                GET STARTED
                            </motion.button>
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 top-[72px] bg-[#030303] z-40 p-6 flex flex-col gap-8 md:hidden"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-extralight text-white hover:text-yellow-400 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="https://wa.me/917439167389?text=I'm%20interested%20in%20a%20Free%20Consultation" target="_blank" rel="noopener noreferrer" className="w-full">
                            <button className="w-full border border-yellow-500 text-yellow-500 px-8 py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 min-h-[44px]">
                                FREE CONSULTATION
                            </button>
                        </a>
                        <a href="/signin" className="w-full">
                            <button className="w-full bg-yellow-500 text-[#030303] px-8 py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 min-h-[44px]">
                                GET STARTED <ArrowRight className="w-4 h-4" />
                            </button>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
