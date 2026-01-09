'use client'

import { Home, Sparkles, Layout, MessageSquare } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import FooterSection from "@/components/ui/footer"
import { AuthForm } from "@/components/ui/premium-auth"

export default function SignInPage() {
    const navItems = [
        { name: "Home", url: "/", icon: Home },
        { name: "Services", url: "/services", icon: Layout },
        { name: "Features", url: "/#features", icon: Sparkles },
        { name: "Contact", url: "/contact", icon: MessageSquare }
    ];

    return (
        <main className="bg-[#030303] min-h-screen scroll-smooth">
            <NavBar items={navItems} />

            <div className="pt-32 pb-20 px-4 flex flex-col items-center">
                <div className="mb-8 flex flex-col items-center gap-4">
                    <img src="/logo-gold.png" alt="Calistic Media" className="h-16 w-auto" />
                    <h2 className="text-yellow-500/40 text-[10px] uppercase tracking-[0.4em] font-medium">Secure Access</h2>
                </div>

                <div className="w-full max-w-md bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-[2.5rem] p-4 md:p-8 shadow-2xl">
                    <AuthForm />
                </div>
            </div>

            <FooterSection />
        </main>
    )
}
