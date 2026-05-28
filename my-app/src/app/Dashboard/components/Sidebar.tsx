"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationItem {
  name: string;
  href: string;
  isActive?: boolean;
  isHighlighted?: boolean;
}

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    { name: '360OS™ Assistant', href: '/Dashboard' },
    { name: 'Practice', href: '/Dashboard/Practice' },
    { name: 'Voice Journal', href: '/Dashboard/Voice_Journal' },
    { name: 'Podcasts', href: '/Dashboard/Podcast' },
    { name: 'Community', href: '/Dashboard/Community' },
    { name: 'Live Practice', href: '/Dashboard/Live_Practices' },
    { name: 'Activity', href: '/Dashboard/Activity' },
  ];

  const isActive = (href: string) => {
    if (href === '/Dashboard') {
      return pathname === '/Dashboard';
    }
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-72 bg-[#181946] flex flex-col justify-between">
      <div>
        {/* Top Sidebar Title */}
        <div className="py-6 px-8 border-b border-[#50417a]">
          <nav>
            <p className="text-base mt-2 text-[#b97bf5] font-semibold">Rama's 360OS™ Experience</p>
          </nav>
        </div>
        
        {/* Sidebar Menu */}
        <nav className="mt-6 px-8">
          <h2 className="text-xs font-bold uppercase text-[#a6a3b8] mb-4">Features</h2>
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-[#30114e] text-[#b97bf5] font-semibold'
                      : 'text-[#a6a3b8] hover:bg-[#30114e] hover:text-[#b97bf5]'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <h2 className="text-xs font-bold uppercase text-[#a6a3b8] mt-8 mb-2">Settings</h2>
          <Link
            href="/Dashboard/Setting"
            className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
              isActive('/Dashboard/Setting')
                ? 'bg-[#30114e] text-[#b97bf5] font-semibold'
                : 'text-[#a6a3b8] hover:bg-[#30114e] hover:text-[#b97bf5]'
            }`}
          >
            Settings
          </Link>
        </nav>
      </div>
      
      {/* Light Mode Button */}
      <div className="w-full p-8">
        <button className="w-full bg-[#23244d] text-[#a6a3b8] font-bold py-2 rounded-lg hover:bg-[#30114e]">
          Light Mode
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
