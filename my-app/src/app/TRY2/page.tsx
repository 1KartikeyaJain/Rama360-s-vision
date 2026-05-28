'use client'; // Add this at the top for React hooks

import React, { useState, useEffect } from 'react';

// Define a type for your User object
type User = {
  _id: string;
  name: string;
  email: string;
};

export default function AdminPanel() {
  // --- State ---
  const [users, setUsers] = useState<User[]>([]); // To store users for the dropdown
  const [statusMessage, setStatusMessage] = useState(''); // To show success/error

  // Public meeting state
  const [publicFormat, setPublicFormat] = useState<'link' | 'id'>('link');
  const [publicLink, setPublicLink] = useState('');
  const [publicMeetingId, setPublicMeetingId] = useState('');
  const [publicPassword, setPublicPassword] = useState('');

  // Private meeting state
  const [privateFormat, setPrivateFormat] = useState<'link' | 'id'>('link');
  const [selectedUser, setSelectedUser] = useState('');
  const [privateLink, setPrivateLink] = useState('');
  const [privateMeetingId, setPrivateMeetingId] = useState('');
  const [privatePassword, setPrivatePassword] = useState('');

  // Base URL for your API
  const API_URL = 'http://localhost:5000/api'; // Change if your API is elsewhere
  // !! IMPORTANT: For this page to work, your Node.js server (server.js)
  // !! must be running on your computer (e.g., by running 'node server.js')
  // !! so that http://localhost:3000 is accessible by this page.

  // --- Data Fetching ---
  // Fetch users when component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // !! In a real app, you'd send an auth token
        const response = await fetch(`${API_URL}/users`, {
          // headers: { 'Authorization': 'Bearer YOUR_ADMIN_TOKEN' }
        });
        if (!response.ok) {
          throw new Error(
            `Failed to fetch users (Status: ${response.status}). Are you an admin?`
          );
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
        // Updated error message to be more specific
        setStatusMessage(
          'Error: Failed to fetch users. Please ensure the Node.js server (server.js) is running on http://localhost:3000'
        );
      }
    };
    fetchUsers();
  }, []); // Empty dependency array means this runs once on mount

  // --- API Call Handlers ---
  const handleSavePublicMeeting = async () => {
    setStatusMessage('Saving...');
    let body;
    if (publicFormat === 'link') {
      body = JSON.stringify({ format: 'link', link: publicLink });
    } else {
      body = JSON.stringify({
        format: 'id',
        meetingId: publicMeetingId,
        password: publicPassword,
      });
    }

    try {
      const response = await fetch(`${API_URL}/links/public`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer YOUR_ADMIN_TOKEN'
        },
        body: body,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Failed to save public meeting.');
      }

      setStatusMessage('Public meeting saved successfully!');
      // Clear inputs
      setPublicLink('');
      setPublicMeetingId('');
      setPublicPassword('');
    } catch (error) {
      console.error(error);
      // Updated error message
      setStatusMessage(
        String(error) + ' (Is the server running at http://localhost:3000?)'
      );
    }
  };

  const handleAssignPrivateMeeting = async () => {
    if (!selectedUser) {
      setStatusMessage('Please select a user.');
      return;
    }

    setStatusMessage('Assigning...');
    let body;
    if (privateFormat === 'link') {
      body = JSON.stringify({
        userId: selectedUser,
        format: 'link',
        link: privateLink,
      });
    } else {
      body = JSON.stringify({
        userId: selectedUser,
        format: 'id',
        meetingId: privateMeetingId,
        password: privatePassword,
      });
    }

    try {
      const response = await fetch(`${API_URL}/links/private`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer YOUR_ADMIN_TOKEN'
        },
        body: body,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Failed to assign private meeting.');
      }

      setStatusMessage(`Private meeting assigned to user!`);
      // Clear inputs
      setSelectedUser('');
      setPrivateLink('');
      setPrivateMeetingId('');
      setPrivatePassword('');
    } catch (error) {
      console.error(error);
      // Updated error message
      setStatusMessage(
        String(error) + ' (Is the server running at http://localhost:3000?)'
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        {' '}
        {/* Added max-width and centering */}
        <h1 className="text-3xl font-bold mb-8 text-purple-600">
          Admin Panel
        </h1>
        {/* Status Message */}
        {statusMessage && (
          <div
            className={`p-4 mb-6 rounded-lg border ${
              statusMessage.startsWith('Error:')
                ? 'bg-red-100 text-red-800 border-red-300'
                : 'bg-blue-100 text-blue-800 border-blue-300'
            }`}
          >
            {statusMessage}
          </div>
        )}
        {/* Section for Public Link */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Public Zoom Meeting
          </h2>
          <p className="text-gray-600 mb-4">
            This meeting will be visible to all logged-in customers.
          </p>
          {/* Format Toggle */}
          <div className="flex space-x-4 mb-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="publicFormat"
                value="link"
                checked={publicFormat === 'link'}
                onChange={() => setPublicFormat('link')}
                className="text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2">By Link</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="publicFormat"
                value="id"
                checked={publicFormat === 'id'}
                onChange={() => setPublicFormat('id')}
                className="text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2">By ID & Password</span>
            </label>
          </div>
          {/* Conditional Inputs */}
          {publicFormat === 'link' ? (
            <div className="flex">
              <input
                type="text"
                placeholder="https://zoom.us/j/..."
                value={publicLink}
                onChange={(e) => setPublicLink(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="text"
                placeholder="Meeting ID"
                value={publicMeetingId}
                onChange={(e) => setPublicMeetingId(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text" // Use text for password to avoid browser auto-fill issues
                placeholder="Password (optional)"
                value={publicPassword}
                onChange={(e) => setPublicPassword(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}
          <button
            onClick={handleSavePublicMeeting}
            className="mt-4 px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 w-full transition-colors"
          >
            Save Public Meeting
          </button>
        </div>
        {/* Section for Private Links */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Assign Private Meeting
          </h2>
          <p className="text-gray-600 mb-4">
            This meeting will only be visible to the user you select.
          </p>
          <div className="mb-4">
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select a User...</option>
              {users.length === 0 && (
                <option disabled>Loading users...</option>
              )}
              {users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name || user.email} ({user._id})
                </option>
              ))}
            </select>
          </div>
          {/* Format Toggle */}
          <div className="flex space-x-4 mb-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="privateFormat"
                value="link"
                checked={privateFormat === 'link'}
                onChange={() => setPrivateFormat('link')}
                className="text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2">By Link</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="privateFormat"
                value="id"
                checked={privateFormat === 'id'}
                onChange={() => setPrivateFormat('id')}
                className="text-purple-600 focus:ring-purple-500"
              />
      <span className="ml-2">By ID & Password</span>
            </label>
          </div>
          {/* Conditional Inputs */}
          {privateFormat === 'link' ? (
            <div className="flex">
              <input
                type="text"
                placeholder="https://private-link.com/..."
                value={privateLink}
                onChange={(e) => setPrivateLink(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="text"
                placeholder="Meeting ID"
                value={privateMeetingId}
                onChange={(e) => setPrivateMeetingId(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Password (optional)"
                value={privatePassword}
                onChange={(e) => setPrivatePassword(e.target.value)} // <-- Fixed typo here (was e.g.target.value)
                className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}
          <button
            onClick={handleAssignPrivateMeeting}
            className="mt-4 px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 w-full transition-colors"
          >
            Assign Private Meeting
          </button>
        </div>
      </main>
    </div>
  );
}

