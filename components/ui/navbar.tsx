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
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-transparent p-2 drop-shadow-2xl">
                        <img src="/calistic-logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xl font-extralight tracking-widest text-white uppercase hidden sm:block">
                        Calistic <span className="text-yellow-400 font-medium">Media</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-light text-white/70 hover:text-yellow-400 transition-colors tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="/signin" className="w-full">
                        <motion.button
                            className="w-full bg-yellow-500 hover:bg-yellow-400 text-[#030303] py-4 rounded-xl font-bold tracking-widest transition-all duration-300 shadow-xl shadow-yellow-500/20"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            GET STARTED
                        </motion.button>
                    </a>
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
                        <a href="/signin" className="w-full">
                            <button className="w-full bg-yellow-500 text-[#030303] px-8 py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 mt-4">
                                GET STARTED <ArrowRight className="w-4 h-4" />
                            </button>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
