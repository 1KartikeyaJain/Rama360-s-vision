"use client";

import React, { useState } from "react";
import Sidebar from '../../components/Sidebar';

type Track = {
  id: number;
  title: string;
  subtitle: string;
  uploaded: string;
  tag: string;
  duration: string;
  canDelete?: boolean;
};

const tabItems = [
  "360OS™",
  "Daily",
  "Timed 360OS™",
  "Guided",
  "Voice Journal",
  "Podcasts",
];

const trackOptions = [
  { label: "Choose a track", value: "" },
  { label: "30 second Guided process to Neutralize Stress - no intro", value: "1" },
  { label: "Rama 30 Second Neutralize Stress process with Intro", value: "2" },
];

const tracks: Track[] = [
  {
    id: 1,
    title: "30 second Guided process to Neutralize Stress - no intro",
    subtitle: "A guided process without introduction to Neutralize Stress, Activate Serenity, Clarity and Creativity in 30 seconds",
    uploaded: "8/15/2025",
    tag: "360os",
    duration: "1:22",
    canDelete: true,
  },
  {
    id: 2,
    title: "Rama 30 Second Neutralize Stress process with Intro",
    subtitle: "A guided process with introduction to Neutralize Stress, Activate Serenity, Clarity and Creativity",
    uploaded: "8/15/2025",
    tag: "360os",
    duration: "7:25",
    canDelete: true,
  },
];

const GuidedPracticePage: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<string>("");

  return (
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
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Practice Sessions</h1>
            <p className="text-gray-400 text-sm">© 2025 360OS™ by Rama Arya All Rights Reserved</p>
          </div>
          <div className="flex space-x-6 mb-8 border-b border-gray-700">
            {tabItems.map((tab, i) => (
              <button
                key={i}
                className={`pb-3 px-1 text-sm font-medium transition-colors ${
                  i === 3
                    ? "text-white border-b-2 border-purple-500"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Guided Practice Card */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 relative">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-white text-xl font-semibold mb-1">
                    Guided Practice
                  </h2>
                  <p className="text-gray-400 text-sm mb-2">
                    Listen to guided audio sessions
                  </p>
                  <div className="flex items-center text-blue-200 text-sm mt-1">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 21a2 2 0 01-2.828 0L2 12.828A4 4 0 015.004 6.21c.362-.055.731-.083 1.104-.083h11.784c.373 0 .742.028 1.104.083A4 4 0 0122 12.828L13.828 21z"></path></svg>
                    Admin Panel - Track Management
                  </div>
                </div>
                {/* Track Dropdown */}
                <select
                  className="bg-black border border-gray-700 rounded-md shadow-sm px-4 py-2 text-white text-base"
                  value={selectedTrack}
                  onChange={(e) => setSelectedTrack(e.target.value)}
                >
                  {trackOptions.map((opt) => (
                    <option value={opt.value} key={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Manage Guided Tracks Card */}
            <div className="bg-gray-900 rounded-lg p-6 flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🎵</span>
                <div>
                  <div className="text-white text-xl font-bold">Manage Guided Tracks</div>
                  <div className="text-gray-400 text-sm">Upload new MP3 files or remove existing guided tracks</div>
                </div>
              </div>
              <button className="flex items-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md text-base transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5 5 5-5M12 14V3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                Upload New Track
              </button>
            </div>
            {/* Current Tracks */}
            <div>
              <div className="mb-2 text-lg font-semibold text-white">Current Tracks (2)</div>
              <div className="space-y-4">
                {tracks.map(track => (
                  <div
                    key={track.id}
                    className="bg-gray-800 rounded-lg px-6 py-4 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-white font-bold text-base">{track.title}</div>
                      <div className="text-gray-400 text-sm">{track.subtitle}</div>
                      <div className="text-gray-500 text-xs mt-1">Uploaded: {track.uploaded}</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center px-2 py-1 bg-teal-700 rounded text-xs font-semibold">
                        {track.tag}
                      </div>
                      <div className="flex items-center px-2 py-1 bg-gray-900 rounded text-xs font-semibold">
                        {track.duration}
                      </div>
                      {track.canDelete && (
                        <button className="ml-3">
                          <svg className="w-6 h-6 text-red-400 hover:text-red-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default GuidedPracticePage;
    