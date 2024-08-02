// src/Layout/Layout.tsx

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  const location = useLocation();

  // Mapping of paths to page names
  const pageNames: { [key: string]: string } = {
    '/': 'Overview',
    '/trends': 'Trends',
    '/matx-ai': 'MatXAI',
    '/locations': 'Locations',
    '/notifications': 'Notifications',
    '/settings': 'Settings',
    '/logout': 'Logout',
  };

  // Get the current path and determine the page name
  const currentPath = location.pathname;
  const pageTitle = pageNames[currentPath] || 'Overview';

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{pageTitle}</h1>
          <button className="text-blue-600 hover:underline flex items-center">
            {/* <span className="mr-2">👤</span> */}
            <span className="mr-2">
          <img
            loading="lazy"
            src={"https://cdn.builder.io/api/v1/image/assets/TEMP/841af853ff81a66b65582252df23ded31231ccec76099a6774b4d5891f92e5aa?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9"}
            alt={'Profile'}
            className="object-contain w-full aspect-square max-w-[32px]"
          />
        </span>
          </button>
        </header>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
