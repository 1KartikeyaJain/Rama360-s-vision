"use client";

import React, { useState } from 'react';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<'signIn' | 'signUp'>('signIn');

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
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle login logic (e.g., API call)
    console.log('Login data:', formData);
    // Reset form or redirect
    setFormData({ email: '', password: '' });
    setErrors({});
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Starry/Neural background effect - simple dots and lines for sparkle */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-0.5 h-0.5 bg-purple-300 rounded-full opacity-30 animate-pulse delay-100"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-white rounded-full opacity-10 animate-pulse delay-200"></div>
        <div className="absolute bottom-10 right-10 w-0.5 h-0.5 bg-purple-200 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-ping"></div>
        {/* Neural network lines */}
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

      {/* Tabs */}
      <div className="flex justify-center mb-6 z-10">
        <button
          onClick={() => setActiveTab('signIn')}
          className={`px-6 py-2 rounded-l-lg font-bold transition-colors ${
            activeTab === 'signIn'
              ? 'bg-purple-600 text-white'
              : 'bg-transparent text-purple-400 border border-purple-600 hover:bg-purple-700'
          }`}
        >
          Sign In
        </button>
        <a
          href="/Sign_up"
          className={`px-6 py-2 rounded-r-lg font-bold transition-colors ${
            activeTab === 'signUp'
              ? 'bg-purple-600 text-white'
              : 'bg-transparent text-purple-400 border border-purple-600 hover:bg-purple-700'
          }`}
        >
          Sign Up
        </a>
      </div>

      {/* Form - Only show for Sign In */}
      {activeTab === 'signIn' && (
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

            <div>
              <label className="block text-white text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-10 py-3 bg-purple-800 border border-purple-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter your password"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    )}
                  </svg>
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
            >
              Sign In
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
            <a href="/Forget_Password" className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
              Forgot your password?
            </a>
          </div>
          
          {/* Sign Up Link */}
          <div className="mt-2 text-center">
            <span className="text-gray-400 text-sm">Don't have an account? </span>
            <a href="/Sign_up" className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
              Sign up here
            </a>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar - Simplified for mobile */}
     
    </div>
  );
};

export default LoginPage;