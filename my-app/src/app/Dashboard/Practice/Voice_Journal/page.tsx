"use client";

import React from "react";
import Sidebar from '../../components/Sidebar';

const tabItems = [
  "360OS™",
  "Daily",
  "Timed 360OS™",
  "Guided",
  "Voice Journal",
  "Podcasts",
];

const VoiceJournalPage: React.FC = () => (
  <div className="flex h-screen bg-gray-900 text-white">
    {/* Sidebar */}
    <Sidebar />
    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* Top Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 border border-white rounded-full"></div>
          </div>
          <span className="text-purple-400 font-medium">Rama's 360OS™</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 p-6">
        {/* Title and Tabs */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Practice Sessions</h1>
          <p className="text-gray-400 text-sm">© 2025 360OS™ by Rama Arya All Rights Reserved</p>
        </div>
        <div className="flex space-x-6 mb-8 border-b border-gray-700">
          {tabItems.map((tab, i) => (
            <button
              key={i}
              className={`pb-3 px-1 text-sm font-medium transition-colors ${
                i === 4
                  ? "text-white border-b-2 border-purple-500"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Voice Journal Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 border border-blue-800 rounded-lg p-8 space-y-6">
            <div className="flex items-center mb-2">
              <svg className="w-6 h-6 mr-2 text-gray-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v3m0-3a6 6 0 100-12 6 6 0 000 12zm0 0v1m0-1a4 4 0 100-8 4 4 0 000 8z"/>
              </svg>
              <span className="text-white text-2xl font-bold mr-3">Voice Journal</span>
            </div>
            <div className="text-gray-300 text-base font-medium mb-1">
              Record and share your 360OS™ practice experiences with the community
            </div>
            <div className="bg-gray-900 border border-blue-900 rounded-lg p-6 mt-4">
              <div className="text-blue-200 text-base">
                The Voice Journal is where you can record your practice experiences, insights, and realizations from your 360OS™ sessions.<br /><br />
                Share your journey with the community or keep your recordings private for personal reflection.
              </div>
              <div className="flex mt-6 space-x-4">
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors">
                  Open Voice Journal
                </button>
                <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 rounded font-medium transition-colors">
                  View Community Posts
                </button>
              </div>
            </div>
            {/* Footer Caption */}
            <div className="mt-4">
              <span className="text-gray-400 text-xs italic">
                "Remember: 8 billion humans constantly moving through Fresh Open Space at 70,000 mph - Already Freed and Re-Freshed!"
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VoiceJournalPage;
