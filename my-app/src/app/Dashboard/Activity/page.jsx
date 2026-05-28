"use client";

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const ActivityDesktop = () => {
  const [activeFilter, setActiveFilter] = useState('All Activity');

  const stats = [
    { icon: '📊', value: '28', label: 'Total Activities', color: 'bg-blue-500' },
    { icon: '💬', value: '12', label: 'AI Chats', color: 'bg-cyan-500' },
    { icon: '✓', value: '8', label: 'Completed Tasks', color: 'bg-green-500' },
    { icon: '📧', value: '5', label: 'Email Actions', color: 'bg-purple-500' }
  ];

  const filters = [
    { name: 'All Activity', color: 'bg-green-500', icon: '📊' },
    { name: 'AI Chat', color: 'bg-purple-500', icon: '💬' },
    { name: 'Tasks', color: 'bg-purple-500', icon: '✓' },
    { name: 'Email', color: 'bg-blue-500', icon: '📧' },
    { name: 'System', color: 'bg-purple-500', icon: '⚙️' }
  ];

  const activities = {
    today: [
      {
        type: 'AI Assistant Response',
        badge: 'Chat',
        badgeColor: 'bg-cyan-500',
        description: 'Answered a question about weather patterns and climate change',
        time: '2:17 PM',
        icon: '💬'
      },
      {
        type: 'Completed Task',
        badge: 'Task',
        badgeColor: 'bg-green-500',
        description: 'Review weekly report and provide feedback to the team',
        time: '1:15 PM',
        icon: '✓'
      },
      {
        type: 'Email Sent',
        badge: 'AI',
        badgeColor: 'bg-purple-500',
        description: 'Automated email response sent to client inquiry',
        time: '11:42 AM',
        icon: '📧'
      }
    ],
    yesterday: [
      {
        type: 'AI Calendar Update',
        badge: 'AI',
        badgeColor: 'bg-cyan-500',
        description: 'Generated a new calendar event for the team meeting next week',
        time: '3:50 PM',
        icon: '💬'
      },
      {
        type: 'List Update',
        badge: 'System',
        badgeColor: 'bg-purple-500',
        description: 'Added 3 new items to the Shopping List for weekend grocery run',
        time: '2:33 PM',
        icon: '📝'
      }
    ],
    thisWeek: [
      {
        type: 'Task Completion',
        badge: 'Task',
        badgeColor: 'bg-green-500',
        description: 'Finalized Q2 budget projections and sent for approval',
        time: 'Tuesday, 4:20 PM',
        icon: '✓'
      },
      {
        type: 'Voice Journal Entry',
        badge: 'AI',
        badgeColor: 'bg-cyan-500',
        description: 'Transcribed and saved a 5-minute voice journal reflection',
        time: 'Monday, 9:15 AM',
        icon: '🎤'
      }
    ]
  };

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
  };

  const ActivityItem = ({ activity }) => (
    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 ${activity.badgeColor} rounded-full flex items-center justify-center flex-shrink-0`}>
        <span className="text-white text-xl">{activity.icon}</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 font-semibold text-base">{activity.type}</h3>
            <span className={`px-3 py-1 ${activity.badgeColor} text-white text-xs font-medium rounded-full`}>
              {activity.badge}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">⏰ {activity.time}</span>
            <div className="flex space-x-1">
              <button className="p-2 text-orange-500 hover:bg-orange-50 rounded-full transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"></path>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 012-2h4a1 1 0 110 2v6a1 1 0 11-2 0V9a1 1 0 00-1-1H8a1 1 0 000 2z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {activity.description && (
          <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-pink-500 mb-2">Activity</h1>
              <p className="text-gray-600">Track your recent actions and interactions</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                Export Report
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* Stats Section */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 ${stat.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white text-2xl">{stat.icon}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    </div>
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Filter Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Filter Activities</h2>
              <div className="flex space-x-3">
                {filters.map((filter, index) => (
                  <button
                    key={index}
                    onClick={() => handleFilterClick(filter.name)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-white font-medium transition-all ${
                      activeFilter === filter.name 
                        ? `${filter.color} shadow-md` 
                        : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                  >
                    <span className="text-lg">{filter.icon}</span>
                    <span>{filter.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Today */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span>Today</span>
                  </h3>
                  <div className="space-y-3">
                    {activities.today.map((activity, index) => (
                      <ActivityItem key={index} activity={activity} />
                    ))}
                  </div>
                </div>

                {/* This Week */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span>This Week</span>
                  </h3>
                  <div className="space-y-3">
                    {activities.thisWeek.map((activity, index) => (
                      <ActivityItem key={index} activity={activity} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Yesterday */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    <span>Yesterday</span>
                  </h3>
                  <div className="space-y-3">
                    {activities.yesterday.map((activity, index) => (
                      <ActivityItem key={index} activity={activity} />
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white">✓</span>
                      </div>
                      <span className="text-gray-700">Create New Task</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white">💬</span>
                      </div>
                      <span className="text-gray-700">Start AI Chat</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white">📧</span>
                      </div>
                      <span className="text-gray-700">Send Email</span>
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

export default ActivityDesktop;
