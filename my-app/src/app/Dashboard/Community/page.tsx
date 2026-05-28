"use client";

import React from 'react';
import Sidebar from '../components/Sidebar';

const Community = () => {
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
            <h1 className="text-2xl font-semibold text-white mb-4">3600S™ Community</h1>
            <p className="text-gray-400 text-sm">
              Share your experiences and connect with others on their journey of awareness and growth
            </p>
          </div>

          {/* Community Guidelines Section */}
          <div className="bg-slate-800 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-medium text-white mb-6">Community Guidelines</h2>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 text-sm mt-1">•</span>
                <p className="text-gray-400 text-sm">
                  Share authentically about your 3600S™ experiences
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 text-sm mt-1">•</span>
                <p className="text-gray-400 text-sm">
                  Be respectful and supportive of others' journeys
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 text-sm mt-1">•</span>
                <p className="text-gray-400 text-sm">
                  Keep content appropriate and constructive
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 text-sm mt-1">•</span>
                <p className="text-gray-400 text-sm">
                  Report any content that violates our community standards
                </p>
              </div>
            </div>
          </div>

          {/* Empty State Section */}
          <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
            {/* Chat Bubble Icon */}
            <div className="mb-6">
              <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            
            <h3 className="text-gray-400 text-lg font-medium mb-4">
              No shared experiences yet.
            </h3>
            
            <p className="text-gray-500 text-sm max-w-md">
              Share your voice journal entries from the Journal page to connect with the community!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-900 px-6 py-4 border-t border-slate-700">
          <p className="text-gray-500 text-xs text-center">
            © 2025 3600S™ by Rama Arya All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
