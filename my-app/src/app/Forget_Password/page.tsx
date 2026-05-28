"use client";

import React, { useState } from 'react';

interface ResetPasswordFormData {
  email: string;
}

const ResetPasswordPage: React.FC = () => {
  const [formData, setFormData] = useState<ResetPasswordFormData>({
    email: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is required and must be valid';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle reset password logic (e.g., API call)
    console.log('Reset password data:', formData);
    // Reset form or redirect
    setFormData({ email: '' });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Starry/Neural background effect - simple dots for sparkle */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-0.5 h-0.5 bg-purple-300 rounded-full opacity-30 animate-pulse delay-100"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-white rounded-full opacity-10 animate-pulse delay-200"></div>
        <div className="absolute bottom-10 right-10 w-0.5 h-0.5 bg-purple-200 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-ping"></div>
        {/* Neural network lines - simple lines */}
        <div className="absolute top-1/4 left-1/3 w-20 h-0.5 bg-purple-600 opacity-20 transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-0.5 bg-purple-600 opacity-20 transform -rotate-30"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-0.5 bg-purple-500 opacity-15 transform rotate-20"></div>
      </div>

      {/* Logo - Simple SVG diamond with stars */}
      <div className="mb-8 z-10">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-purple-300">
          {/* Diamond shape */}
          <polygon points="40,5 75,40 40,75 5,40" fill="currentColor" opacity="0.8" />
          {/* Inner diamond */}
          <polygon points="40,15 60,40 40,65 20,40" fill="currentColor" opacity="0.3" />
          {/* Stars */}
          <polygon points="25,25 27,30 32,30 28,33 30,38 25,35 20,38 22,33 18,30 23,30" fill="white" opacity="0.6" className="animate-pulse" />
          <polygon points="55,25 57,30 62,30 58,33 60,38 55,35 50,38 52,33 48,30 53,30" fill="white" opacity="0.4" className="animate-pulse delay-200" />
          <circle cx="40" cy="40" r="2" fill="white" opacity="0.8" className="animate-ping" />
        </svg>
      </div>

      {/* App Title */}
      <div className="text-center mb-8 z-10">
        <h1 className="text-2xl font-bold text-white mb-2">Your Personal Consciousness</h1>
        <h2 className="text-xl font-semibold text-purple-200">Assistant</h2>
      </div>

      {/* Screen Title */}
      <div className="text-center mb-6 z-10">
        <h3 className="text-3xl font-bold text-white mb-2">Reset Password</h3>
        <p className="text-gray-300 text-sm">Enter your email and we'll send you a reset link</p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md z-10">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white text-sm font-medium mb-1">Email</label>
            <div className="relative">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 bg-purple-800 border border-purple-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="Enter your email"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back Links */}
        <div className="mt-6 text-center space-y-2">
          <div>
            <a href="/Sign_in" className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
              Back to Sign In
            </a>
          </div>
          <div>
            <span className="text-gray-400 text-sm">Don't have an account? </span>
            <a href="/Sign_up" className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
              Sign up here
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar - Simplified for mobile */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 flex justify-between items-center z-10">
        <div className="text-white text-lg">≡</div>
        <div className="text-white text-lg">○</div>
        <div className="text-white text-lg">◀</div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;