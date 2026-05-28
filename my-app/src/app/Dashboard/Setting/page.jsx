"use client";

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Settings = () => {
  // Controlled toggles and form states (demo only)
  const [darkMode, setDarkMode] = useState(true);
  const [openAiKey, setOpenAiKey] = useState('');
  const [googleApiKey, setGoogleApiKey] = useState('');

  return (
    <div className="flex h-screen bg-amber-50 text-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Header */}
        <div className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center">
          <h1 className="text-2xl font-bold text-white">Settings</h1>
        </div>

        {/* Settings Panel */}
        <div className="p-8 space-y-8">
          {/* Appearance */}
          <div className="bg-slate-800 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold mb-1">Appearance</h2>
              <p className="text-gray-400 text-sm mb-3">
                Customize how TuriyaLife AI looks
              </p>
              <div>
                <span className="font-semibold text-white">Dark Mode</span>
                <p className="text-gray-400 text-sm">
                  Toggle between light and dark themes
                </p>
              </div>
            </div>

            {/* Dark Mode Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`ml-auto mt-6 md:mt-0 flex items-center p-2 rounded-full ${darkMode ? 'bg-purple-500' : 'bg-gray-500'}`}
              aria-label="Toggle dark mode"
            >
              <span
                className={`w-7 h-7 bg-slate-900 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  darkMode ? 'translate-x-6 bg-purple-300' : ''
                }`}
              >
                {darkMode && (
                  <span className="block w-3 h-3 bg-purple-400 rounded-full"></span>
                )}
              </span>
            </button>
          </div>

          {/* API Keys */}
          {/* <div className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-1">API Keys</h2>
            <p className="text-gray-400 text-sm mb-6">Configure API keys for external services</p>
            <div className="mb-4">
              <label className="block font-medium mb-1 text-white">OpenAI API Key</label>
              <input
                type="password"
                placeholder="Enter your OpenAI API key"
                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                value={openAiKey}
                onChange={(e) => setOpenAiKey(e.target.value)}
              />
              <span className="text-gray-400 text-xs">Required for AI Chat, RAG, ASR, and TTS functionality</span>
            </div>
            <div>
              <label className="block font-medium mb-1 text-white">Google Cloud API Key</label>
              <input
                type="password"
                placeholder="Enter your Google Cloud API key"
                className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                value={googleApiKey}
                onChange={(e) => setGoogleApiKey(e.target.value)}
              />
              <span className="text-gray-400 text-xs">
                Optional: Enables Google Cloud TTS if preferred over OpenAI TTS
              </span>
            </div>
          </div> */}

          {/* Speech Settings */}
          {/* <div className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-1">Speech Settings</h2>
            <p className="text-gray-400 text-sm">
              Configure text-to-speech preferences
            </p>
            
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
