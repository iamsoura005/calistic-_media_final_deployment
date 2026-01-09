'use client'

import { ModernSignIn } from '@/components/ui/modern-signin'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'

export default function SignInPage() {
    return (
        <main className="bg-[#030303] min-h-screen">
            <Navbar />
            <div className="pt-20">
                <ModernSignIn />
            </div>
            <Footer />
        </main>
    )
}
