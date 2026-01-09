"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

import { usePathname } from "next/navigation"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface NavBarProps {
    items: NavItem[]
    className?: string
}

export function NavBar({ items, className }: NavBarProps) {
    const pathname = usePathname()
    const [activeTab, setActiveTab] = useState(items[0].name)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const currentItem = items.find(item => item.url === pathname)
        if (currentItem) {
            setActiveTab(currentItem.name)
        }
    }, [pathname, items])

    return (
        <div
            className={cn(
                "fixed top-0 left-0 right-0 z-[1000] p-4 md:p-6 flex items-center justify-between pointer-events-none",
                className,
            )}
        >
            <Link href="/" className="group pointer-events-auto shrink-0 relative z-[1001]">
                <motion.img
                    src="/logo-gold.png"
                    alt="Calistic Media"
                    className="h-8 md:h-14 w-auto drop-shadow-[0_0_15px_rgba(250,204,21,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-all duration-300 will-change-transform"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                />
            </Link>

            <div className="absolute left-1/2 -translate-x-1/2 top-4 md:top-6 flex items-center gap-0.5 md:gap-1 bg-black/60 border border-white/10 backdrop-blur-md py-1 px-1 rounded-full shadow-2xl pointer-events-auto will-change-transform">
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name

                    return (
                        <Link
                            key={item.name}
                            href={item.url}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "relative cursor-pointer text-[12px] md:text-[13px] font-light px-3 md:px-6 py-2 rounded-full transition-all duration-300 will-change-transform",
                                "text-white/60 hover:text-white",
                                isActive && "text-white",
                            )}
                        >
                            <span className="hidden md:inline uppercase tracking-widest">{item.name}</span>
                            <span className="md:hidden flex items-center justify-center">
                                <Icon size={16} strokeWidth={1.5} />
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-yellow-500/10 rounded-full -z-10"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 md:w-8 h-[1px] md:h-[2px] bg-yellow-400 rounded-full">
                                        <div className="absolute w-10 md:h-6 bg-yellow-400/20 rounded-full blur-md -top-2 -left-2" />
                                    </div>
                                </motion.div>
                            )}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
