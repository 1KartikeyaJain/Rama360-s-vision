"use client";

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Podcasts = () => {
  const [podBeanUrl, setPodBeanUrl] = useState('');

  const handleLoadPlayer = () => {
    // Logic to load podcast player
    console.log('Loading podcast player with URL:', podBeanUrl);
  };

  const handleListen = (podcastTitle) => {
    // Logic to play podcast
    console.log('Playing podcast:', podcastTitle);
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
          

          

          {/* Featured Podcasts Section */}
          <div>
            <h2 className="text-lg font-medium text-white mb-2">Featured Podcasts</h2>
            <p className="text-gray-400 text-sm mb-6">
              Explore Rama's teachings about 360 OS practice and F.U.N
            </p>

            <div className="space-y-4">
              {/* Podcast 1 */}
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-2">Understanding F.U.N</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Fresh Unconditioned Now-ness and 360 OS practice
                    </p>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-teal-500 text-white text-xs rounded-full">
                        360 OS
                      </span>
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">
                        F.U.N
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <div className="text-gray-400">
                      {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                      </svg> */}
                    </div>
                    <button
                      onClick={() => handleListen('Understanding F.U.N')}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded transition-colors"
                    >
                      Listen
                    </button>
                  </div>
                </div>
              </div>

              {/* Podcast 2 */}
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-2">GPS Locator Practice</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Advanced techniques for consciousness navigation
                    </p>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-teal-500 text-white text-xs rounded-full">
                        360 OS
                      </span>
                      <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">
                        Practice
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <div className="text-gray-400">
                      {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                      </svg> */}
                    </div>
                    <button
                      onClick={() => handleListen('GPS Locator Practice')}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded transition-colors"
                    >
                      Listen
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Podcast Placeholder */}
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-2">Advanced 360 OS Techniques</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Deep dive into consciousness expansion methods
                    </p>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-teal-500 text-white text-xs rounded-full">
                        360 OS
                      </span>
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full">
                        Advanced
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <div className="text-gray-400">
                      {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                      </svg> */}
                    </div>
                    <button
                      onClick={() => handleListen('Advanced 360 OS Techniques')}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded transition-colors"
                    >
                      Listen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
