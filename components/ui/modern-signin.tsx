'use client'

import * as React from 'react'
import { useState } from 'react'
import Image from 'next/image'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    placeholder?: string
    icon?: React.ReactNode
}

const AppInput = (props: InputProps) => {
    const { label, placeholder, icon, ...rest } = props
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    return (
        <div className="w-full min-w-[200px] relative">
            {label &&
                <label className='block mb-2 text-sm text-white/70'>
                    {label}
                </label>
            }
            <div className="relative w-full">
                <input
                    type="text"
                    className="peer relative z-10 border-2 border-white/10 h-13 w-full rounded-md bg-white/5 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white/10 focus:border-yellow-400/50 placeholder:font-medium placeholder:text-white/40 text-white"
                    placeholder={placeholder}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    {...rest}
                />
                {isHovering && (
                    <>
                        <div
                            className="absolute pointer-events-none top-0 left-0 right-0 h-[2px] z-20 rounded-t-md overflow-hidden"
                            style={{
                                background: `radial-gradient(30px circle at ${mousePosition.x}px 0px, #10b981 0%, transparent 70%)`,
                            }}
                        />
                        <div
                            className="absolute pointer-events-none bottom-0 left-0 right-0 h-[2px] z-20 rounded-b-md overflow-hidden"
                            style={{
                                background: `radial-gradient(30px circle at ${mousePosition.x}px 2px, #10b981 0%, transparent 70%)`,
                            }}
                        />
                    </>
                )}
                {icon && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20">
                        {icon}
                    </div>
                )}
            </div>
        </div>
    )
}

interface ModernSignInProps {
    onSignIn?: () => void
}

export const ModernSignIn = ({ onSignIn }: ModernSignInProps) => {
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)

    const handleMouseMove = (e: React.MouseEvent) => {
        const leftSection = e.currentTarget.getBoundingClientRect()
        setMousePosition({
            x: e.clientX - leftSection.left,
            y: e.clientY - leftSection.top
        })
    }

    const handleMouseEnter = () => {
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
    }

    const socialIcons = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>,
            href: '#',
            gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" /></svg>,
            href: '#',
            bg: 'bg-blue-600',
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396z" /></svg>,
            href: '#',
            bg: 'bg-blue-500',
        }
    ]

    return (
        <div className="h-screen w-full bg-[#030303] flex items-center justify-center p-4">
            <div className='w-full max-w-6xl flex justify-between h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm'>
                <div
                    className='w-full lg:w-1/2 px-4 lg:px-16 h-full relative overflow-hidden'
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <div
                        className={`absolute pointer-events-none w-[500px] h-[500px] bg-gradient-to-r from-yellow-300/20 via-blue-300/20 to-purple-300/20 rounded-full blur-3xl transition-opacity duration-200 ${isHovering ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{
                            transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
                            transition: 'transform 0.1s ease-out'
                        }}
                    />
                    <div className="form-container sign-in-container h-full z-10 relative">
                        <form className='text-center py-10 md:py-20 grid gap-2 h-full' onSubmit={(e) => {
                            e.preventDefault()
                            if (onSignIn) {
                                onSignIn()
                            }
                        }}>
                            <div className='grid gap-4 md:gap-6 mb-2'>
                                <h1 className='text-3xl md:text-4xl font-extrabold text-white'>
                                    {isSignUp ? 'Create Account' : 'Sign in'}
                                </h1>
                                <div className="social-container">
                                    <div className="flex items-center justify-center">
                                        <ul className="flex gap-3 md:gap-4">
                                            {socialIcons.map((social, index) => {
                                                return (
                                                    <li key={index} className="list-none">
                                                        <a
                                                            href={social.href}
                                                            className={`w-[2.5rem] md:w-[3rem] h-[2.5rem] md:h-[3rem] bg-white/5 rounded-full flex justify-center items-center relative z-[1] border-2 border-white/10 overflow-hidden group hover:border-yellow-400/50 transition-all`}
                                                        >
                                                            <div
                                                                className={`absolute inset-0 w-full h-full ${social.gradient || social.bg
                                                                    } scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100`}
                                                            />
                                                            <span className="text-[1.5rem] text-white/70 transition-all duration-500 ease-in-out z-[2] group-hover:text-white">
                                                                {social.icon}
                                                            </span>
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <span className='text-sm text-white/50'>
                                    {isSignUp ? 'or use your email for registration' : 'or use your account'}
                                </span>
                            </div>
                            <div className='grid gap-4 items-center text-left'>
                                {isSignUp && <AppInput placeholder="Full Name" type="text" />}
                                <AppInput placeholder="Email" type="email" />
                                <AppInput placeholder="Password" type="password" />
                            </div>
                            <a href="#" className='font-light text-sm md:text-md text-yellow-400 hover:text-yellow-300 transition-colors'>Forgot your password?</a>
                            <div className='flex gap-4 justify-center items-center'>
                                <button
                                    className="group/button relative inline-flex justify-center items-center overflow-hidden rounded-md bg-yellow-500 px-8 py-3 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 cursor-pointer"
                                >
                                    <span className="text-sm px-2 py-1">{isSignUp ? 'Sign Up' : 'Sign In'}</span>
                                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                                        <div className="relative h-full w-8 bg-white/20" />
                                    </div>
                                </button>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsSignUp(!isSignUp)}
                                    className="text-white/50 hover:text-yellow-400 text-sm transition-colors"
                                >
                                    {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='hidden lg:flex w-1/2 h-full overflow-hidden items-center justify-center bg-gradient-to-br from-yellow-500/10 to-purple-500/10'>
                    <div className="w-64 h-64 relative">
                        <img
                            src='/calistic-logo.png'
                            alt="Calistic Media Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
