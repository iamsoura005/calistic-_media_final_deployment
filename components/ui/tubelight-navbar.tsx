"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

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

    return (
        <div
            className={cn(
                "fixed top-0 left-1/2 -translate-x-1/2 z-[1000] pt-6 will-change-transform",
                className,
            )}
        >
            <div className="flex items-center gap-1 bg-[#030303]/40 border border-white/10 backdrop-blur-xl py-1.5 px-1.5 rounded-full shadow-2xl">
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name

                    return (
                        <Link
                            key={item.name}
                            href={item.url}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "relative cursor-pointer text-[13px] font-light px-6 py-2 rounded-full transition-all duration-300",
                                "text-white/60 hover:text-white",
                                isActive && "text-white",
                            )}
                        >
                            <span className="hidden md:inline uppercase tracking-widest">{item.name}</span>
                            <span className="md:hidden">
                                <Icon size={18} strokeWidth={1.5} />
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-yellow-500/5 rounded-full -z-10"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-yellow-400 rounded-full">
                                        <div className="absolute w-12 h-6 bg-yellow-400/20 rounded-full blur-md -top-2 -left-2" />
                                        <div className="absolute w-8 h-6 bg-yellow-400/20 rounded-full blur-md -top-1 -left-0" />
                                        <div className="absolute w-4 h-4 bg-yellow-400/20 rounded-full blur-sm top-0 left-2" />
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
