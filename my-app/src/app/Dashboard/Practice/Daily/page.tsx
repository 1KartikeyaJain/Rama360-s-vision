"use client"

import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const Daily: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(3);
  const [enableReminders, setEnableReminders] = useState<boolean>(false);

  const tabItems: string[] = [
    '360OS™',
    'Daily',
    'Timed 360OS™',
    'Guided', 
    'Voice Journal',
    'Podcasts'
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Sidebar */}
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

        {/* Content Area */}
        <div className="flex-1 p-6">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Practice Sessions</h1>
            <p className="text-gray-400 text-sm">© 2025 360OS™ by Rama Arya All Rights Reserved</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-6 mb-8 border-b border-gray-700">
            {tabItems.map((tab, index) => (
              <button
                key={index}
                className={`pb-3 px-1 text-sm font-medium transition-colors ${
                  index === 1 // Daily tab active
                    ? 'text-white border-b-2 border-purple-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Daily Reminders Section */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Daily 360OS™ Reminders</h2>
                <p className="text-gray-400 text-sm">Get gentle reminders for 30-second awareness practices</p>
              </div>
              <button 
                onClick={() => setEnableReminders(!enableReminders)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-md transition-colors"
              >
                Enable
              </button>
            </div>

            {/* Slider Section */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <label className="text-white font-medium">How many times per day?</label>
                <span className="text-white font-semibold text-lg">{sliderValue}</span>
              </div>
              
              {/* Custom Slider */}
              <div className="relative">
                <div className="w-full h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 rounded-full"></div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(parseInt(e.target.value))}
                  className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer"
                  style={{
                    background: 'transparent',
                  }}
                />
                <style jsx>{`
                  input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #fff;
                    cursor: pointer;
                    border: 2px solid #6366f1;
                  }
                  input[type="range"]::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #fff;
                    cursor: pointer;
                    border: 2px solid #6366f1;
                  }
                `}</style>
              </div>
            </div>

            {/* Information Text */}
            <div className="mt-6 space-y-3">
              <p className="text-purple-400 text-sm">
                🔔 Gentle notifications will be distributed between 8:00 AM and 8:00 PM to remind you to pause and reconnect with Fresh Unconditioned Nowness (F.U.N.) - each practice takes just 30 seconds.
              </p>
              <p className="text-gray-400 text-sm">
                Remember the cosmic perspective: you are already being free and engaging F.U.N within Naturally Expansive Open-ness (N.E.O).
              </p>
              <p className="text-gray-400 text-sm">
                Consider listening to different podcasts to help you stay on the F.U.N channel throughout your day.
              </p>
            </div>

            {/* Save Button */}
            <div className="mt-8">
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daily;
