"use client";

import React, { useState } from 'react';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password || formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle signup logic (e.g., API call)
    console.log('Sign up data:', formData);
    // Reset form or redirect
    setFormData({ firstName: '', lastName: '', email: '', password: '' });
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
        <h3 className="text-3xl font-bold text-white mb-2">Sign Up</h3>
        <p className="text-gray-300 text-sm">Create your account to get started</p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md z-10">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-3">
            <div>
              <label className="block text-white text-sm font-medium mb-1">First Name</label>
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-purple-800 border border-purple-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.firstName ? 'border-red-500' : ''
                }`}
                placeholder="Enter your first name"
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-1">Last Name</label>
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-purple-800 border border-purple-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your last name"
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>}
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-purple-800 border border-purple-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-1">Password</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-purple-800 border border-purple-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.password ? 'border-red-500' : ''
                }`}
                placeholder="Enter your password"
              />
              {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Sign Up
          </button>
        </form>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <span className="text-gray-400 text-sm">Already have an account? </span>
          <a href="/Sign_in" className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
            Sign in here
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default SignUpPage;