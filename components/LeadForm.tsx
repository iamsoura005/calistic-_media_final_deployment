"use client";

import { useState } from 'react';

export default function LeadForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: ''
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ⚠️ REPLACE THIS WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwT2KOGhHV3mlP-ILmSYDoAeR62FwvXCanEN4AjXDz6Y2qNbVAb5NDklmadn56wK_ta/exec";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (GOOGLE_SCRIPT_URL === "https://script.google.com/macros/s/AKfycbwT2KOGhHV3mlP-ILmSYDoAeR62FwvXCanEN4AjXDz6Y2qNbVAb5NDklmadn56wK_ta/exec") {
            setStatus("Error: Please configure the Google Script URL in the code.");
            return;
        }

        setIsSubmitting(true);
        setStatus('Sending...');

        try {
            // Use FormData for better compatibility with Google Apps Script
            const formPayload = new FormData();
            formPayload.append('firstName', formData.firstName);
            formPayload.append('lastName', formData.lastName);
            formPayload.append('mobile', formData.mobile);
            formPayload.append('email', formData.email);

            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: formPayload,
                mode: "no-cors"
            });

            setStatus('Success! We will contact you soon.');
            setFormData({ firstName: '', lastName: '', mobile: '', email: '' });

        } catch (error) {
            console.error("Error:", error);
            setStatus('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            {/* Ambient background glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-700"></div>

            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2 text-white tracking-tight">Get Started</h2>
                <p className="text-white/60 mb-6 text-sm">Leave your details and we'll get back to you shortly.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label htmlFor="firstName" className="text-xs font-medium text-white/50 ml-1">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                name="firstName"
                                placeholder="John"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="lastName" className="text-xs font-medium text-white/50 ml-1">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                name="lastName"
                                placeholder="Doe"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="mobile" className="text-xs font-medium text-white/50 ml-1">Mobile Number</label>
                        <input
                            id="mobile"
                            type="tel"
                            name="mobile"
                            placeholder="+1 (555) 000-0000"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="email" className="text-xs font-medium text-white/50 ml-1">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium p-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-blue-500/20 hover:translate-y-[-1px] active:translate-y-[0px]"
                    >
                        {status === 'Sending...' ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </span>
                        ) : 'Submit Application'}
                    </button>

                    {status && (
                        <div className={`mt-3 text-center text-sm p-2 rounded-md ${status.startsWith('Success') ? 'bg-green-500/10 text-green-400 border border-green-500/20' : status.startsWith('Error') || status.startsWith('Something') ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'text-white/60'}`}>
                            {status}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
