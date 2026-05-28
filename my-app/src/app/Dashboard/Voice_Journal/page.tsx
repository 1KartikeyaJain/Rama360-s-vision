"use client";

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const VoiceJournal = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('Date: Newest');

  const handleStartRecording = () => {
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  const handleCancel = () => {
    setIsRecording(false);
  };

  const handleSaveEntry = () => {
    // Save logic here
    setIsRecording(false);
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
            <h1 className="text-xl font-semibold text-white">Voice Journal</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-purple-400 hover:text-purple-300 text-sm">
              View Recent Activity
            </button>
            <span className="text-teal-400 font-mono">0:00</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Record Journal Entry Section */}
          <div className="bg-slate-800 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-medium text-white mb-6">Record Journal Entry</h2>
            
            <div className="flex items-center justify-between">
              {/* Microphone Button */}
              <div className="flex items-center space-x-8">
                <button 
                  className={`w-16 h-16 ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-purple-500 hover:bg-purple-600'} rounded-full flex items-center justify-center transition-colors`}
                  onClick={isRecording ? handleStopRecording : handleStartRecording}
                >
                  <div className="w-8 h-8 text-white flex items-center justify-center">
                    {isRecording ? (
                      <div className="w-4 h-4 bg-white rounded"></div>
                    ) : (
                      <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                    )}
                  </div>
                </button>
                
                <div>
                  <h3 className="text-white font-medium mb-1">
                    {isRecording ? 'Recording...' : 'Ready to Record'}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {isRecording ? 'Click to stop recording' : 'Click the microphone to start recording'}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button 
                  className="px-4 py-2 text-gray-400 hover:text-white border border-gray-600 rounded transition-colors"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button 
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"
                  onClick={handleSaveEntry}
                >
                  Save Entry
                </button>
              </div>
            </div>

            <p className="text-gray-500 text-xs mt-4">
              Your voice recording will be automatically transcribed using AI
            </p>
          </div>

          {/* Your Journal Entries Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-white">Your Journal Entries</h2>
              <div className="flex space-x-3">
                <select 
                  className="bg-slate-700 text-white border border-slate-600 rounded px-3 py-1 text-sm focus:outline-none focus:border-purple-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All Categories">All Categories</option>
                  <option value="Dreams">Dreams</option>
                  <option value="Reflections">Reflections</option>
                  <option value="Goals">Goals</option>
                </select>
                <select 
                  className="bg-slate-700 text-white border border-slate-600 rounded px-3 py-1 text-sm focus:outline-none focus:border-purple-500"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="Date: Newest">Date: Newest</option>
                  <option value="Date: Oldest">Date: Oldest</option>
                  <option value="Duration: Longest">Duration: Longest</option>
                  <option value="Duration: Shortest">Duration: Shortest</option>
                </select>
              </div>
            </div>

            {/* Journal Entry Cards */}
            <div className="space-y-4">
              {/* Entry 1 */}
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-medium mb-1">Dreams of Engine-less Adventure</h3>
                    <p className="text-gray-400 text-sm">May 6, 2025 at 11:05 PM | 2:00</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded transition-colors">
                      Play
                    </button>
                    <button className="px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white text-sm rounded transition-colors">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-red-400 hover:text-red-300 text-sm transition-colors">
                      Delete
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  I had some amazing dreams, one of them in which I was driving a car, a truck, and then it turns out there was no engine in front of it. In addition to, then I realized, oh, I was dreaming while I was talking on the phone with John Romano, and I started to float up in the air. And then the dream became very amazing. Well, modern scene, daytime.
                </p>

                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">Dreams</span>
                  <span className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">Lucid</span>
                  <span className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">Driving</span>
                </div>
              </div>

              {/* Entry 2 */}
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-medium mb-1">&quot;Reflecting on Milestone Achievements&quot;</h3>
                    <p className="text-gray-400 text-sm">May 5, 2025 at 11:45 PM | 2:00</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded transition-colors">
                      Play
                    </button>
                    <button className="px-3 py-1 bg-teal-500 hover:bg-teal-600 text-white text-sm rounded transition-colors">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-red-400 hover:text-red-300 text-sm transition-colors">
                      Delete
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

export default VoiceJournal;
