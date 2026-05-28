"use client";

import React from 'react';
import Sidebar from '../components/Sidebar';

const LivePractice = () => {
  const handleJoinSession = () => {
    // Logic to join live session
    console.log('Joining live session...');
  };

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⊖</span>
              </div>
              <span className="text-sm text-purple-400">Rama's 3600S™</span>
            </div>
            <span className="text-sm text-gray-400">Experience</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-white mb-4">Live Practice Sessions</h1>
            <p className="text-gray-400 text-sm mb-2">
              Join Rama for guided 3600S™ experiences and live practice sessions
            </p>
            <p className="text-gray-500 text-xs">
              © 2025 3600S™ by Rama Arya All Rights Reserved
            </p>
          </div>

          {/* 3600S Live Sessions Card */}
          <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-6 mb-8 relative">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-white mb-3">3600S™ Live Sessions</h2>
                <p className="text-blue-300 text-sm mb-6">
                  Experience direct guidance through the 3600S™ sequence with Rama
                </p>
                <button 
                  onClick={handleJoinSession}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Join Live Session
                </button>
              </div>
              
              {/* Chat Icon */}
              <div className="ml-8">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* What to Expect Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-6">What to Expect</h2>
            
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">GPS Locator Practice</h3>
                  <p className="text-gray-400 text-sm">
                    Direct guidance through the 30-second 3600S™ sequence for immediate recognition
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Interactive Q&A</h3>
                  <p className="text-gray-400 text-sm">
                    Share your direct experiences and receive personalized guidance
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Cosmic Context</h3>
                  <p className="text-gray-400 text-sm">
                    Understanding the reality of moving through Fresh Open Space at 70,000 mph
                  </p>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default LivePractice;
