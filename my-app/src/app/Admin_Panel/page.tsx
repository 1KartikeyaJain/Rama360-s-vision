'use client'; // Add this at the top for React hooks

import React, { useState } from 'react';

export default function AdminPanel() {
  // State for form inputs
  const [publicLink, setPublicLink] = useState('');
  const [publicMeetingId, setPublicMeetingId] = useState('');
  const [publicPassword, setPublicPassword] = useState('');

  const [selectedUser, setSelectedUser] = useState('');
  const [privateLink, setPrivateLink] = useState('');
  const [privateMeetingId, setPrivateMeetingId] = useState('');
  const [privatePassword, setPrivatePassword] = useState('');

  // TODO: Add functions to call your API
  const handleSavePublicLink = () => {
    // API call logic using publicLink
    console.log('Saving public link:', publicLink);
  };

  const handleSavePublicId = () => {
    // API call logic using publicMeetingId and publicPassword
    console.log('Saving public ID/Pass:', publicMeetingId, publicPassword);
  };

  const handleAssignPrivateLink = () => {
    // API call logic using selectedUser and privateLink
    console.log('Assigning private link:', selectedUser, privateLink);
  };

  const handleAssignPrivateId = () => {
    // API call logic using selectedUser, privateMeetingId, and privatePassword
    console.log(
      'Assigning private ID/Pass:',
      selectedUser,
      privateMeetingId,
      privatePassword
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* You could reuse your Sidebar component here */}
      {/* <Sidebar /> */}

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 text-purple-600">
          Admin Panel
        </h1>

        {/* Section for Public Link */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Public Zoom Link
          </h2>
          <p className="text-gray-600 mb-4">
            This link will be visible to all logged-in customers. Provide a full
            link OR a Meeting ID and Password.
          </p>
          {/* Option 1: Full Link */}
          <div className="flex">
            <input
              type="text"
              placeholder="https://zoom.us/j/..."
              value={publicLink}
              onChange={(e) => setPublicLink(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <button
              onClick={handleSavePublicLink}
              className="ml-3 px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700"
            >
              Save Public Link
            </button>
          </div>

          {/* "OR" Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500 font-semibold">
              OR
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Option 2: ID and Password */}
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Meeting ID"
              value={publicMeetingId}
              onChange={(e) => setPublicMeetingId(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={publicPassword}
              onChange={(e) => setPublicPassword(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <button
              onClick={handleSavePublicId}
              className="px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700"
            >
              Save ID & Pass
            </button>
          </div>
        </div>

        {/* Section for Private Links */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Assign Private Link
          </h2>
          <p className="text-gray-600 mb-4">
            This link will only be visible to the user you select. Provide a full
            link OR a Meeting ID and Password.
          </p>

          <div className="mb-4">
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              {/* TODO: Load users from your API */}
              <option value="">Select a User...</option>
              <option value="user1_id">customer1@example.com</option>
              <option value="user2_id">customer2@example.com</option>
            </select>
          </div>

          {/* Option 1: Full Link */}
          <div className="flex">
            <input
              type="text"
              placeholder="https://private-link.com/..."
              value={privateLink}
              onChange={(e) => setPrivateLink(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <button
              onClick={handleAssignPrivateLink}
              className="ml-3 px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700"
            >
              Assign Private Link
            </button>
          </div>

          {/* "OR" Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500 font-semibold">
              OR
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Option 2: ID and Password */}
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Meeting ID"
              value={privateMeetingId}
              onChange={(e) => setPrivateMeetingId(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={privatePassword}
              onChange={(e) => setPrivatePassword(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <button
              onClick={handleAssignPrivateId}
              className="px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700"
            >
              Assign ID & Pass
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

