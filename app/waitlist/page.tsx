'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { CheckCircle2, Loader2, Mail, User, Phone, ArrowLeft, Sparkles } from 'lucide-react';

export default function WaitlistPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const sendAcknowledgementEmail = async (name: string, email: string) => {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            if (!response.ok) {
                console.warn('Failed to send acknowledgement email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            // Don't fail the whole operation if email fails
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setMessage(data.message);

                // Send acknowledgement email
                await sendAcknowledgementEmail(formData.name, formData.email);

                setFormData({ name: '', email: '', phone: '' });
            } else {
                setStatus('error');
                setMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Network error. Please check your connection and try again.');
            console.error('Error:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4 py-12">
            {/* Background Decorations */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="relative w-full max-w-2xl">
                {/* Back to Home Link */}
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm">
                    {/* Header Section with Gradient */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-10 text-white text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                            <Sparkles className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-3">
                            Join the BranDeal Waitlist
                        </h1>
                        <p className="text-blue-100 text-lg">
                            Be the first to ditch spreadsheets and manage your brand deals like a pro
                        </p>
                    </div>

                    <div className="p-8 md:p-10">
                        {/* Success State */}
                        {status === 'success' && (
                            <div className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                            <CheckCircle2 className="w-7 h-7 text-white" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-green-800 font-bold text-lg mb-1">You&apos;re On The List! 🎉</p>
                                        <p className="text-green-700 mb-2">{message}</p>
                                        <p className="text-green-600 text-sm">
                                            Check your email for a confirmation message. We&apos;ll keep you updated on our launch!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Error State */}
                        {status === 'error' && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                                <p className="text-red-800 font-medium">{message}</p>
                            </div>
                        )}

                        {/* Benefits Section */}
                        <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                                Early Access Benefits
                            </h3>
                            <div className="grid md:grid-cols-2 gap-3">
                                <div className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700">Lifetime discount (50% off)</span>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700">Priority customer support</span>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700">Beta access to new features</span>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700">Exclusive onboarding session</span>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700">Free migration from spreadsheets</span>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700">Shape product roadmap</span>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="block w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400 text-base"
                                        placeholder="John Doe"
                                        disabled={status === 'loading'}
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="block w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400 text-base"
                                        placeholder="john@example.com"
                                        disabled={status === 'loading'}
                                    />
                                </div>
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="block w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400 text-base"
                                        placeholder="+1 (555) 000-0000"
                                        disabled={status === 'loading'}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                                        Joining Waitlist...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-5 h-5 mr-2" />
                                        Secure My Spot
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Social Proof */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 border-2 border-white"></div>
                                </div>
                                <p className="font-medium">
                                    Join creators already on the waitlist
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <p className="text-center text-sm text-gray-600 mt-6 bg-white/60 backdrop-blur-sm rounded-xl p-4">
                    🔒 We respect your privacy. Your information will never be shared with third parties.
                </p>
            </div>
        </div>
    );
}
