import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Overview', path: '/', icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/069bac2b359e000994cc014e43e4846be650e73c281c3e6da38cd449f6cec792?apiKey=144882928c014ec7a74d06e0b85e9ba9" },
    { name: 'Trends', path: '/trends', icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bcfb130b553886b5b48b1a6897651ce7215931c503e1bbc93f388b8366fd08f8?apiKey=144882928c014ec7a74d06e0b85e9ba9" },
    { name: 'matX AI', path: '/matx-ai', icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ed887a809a723fd105ae8332aad9998200e1c8e2e155afbbf686a11cba536cc?apiKey=144882928c014ec7a74d06e0b85e9ba9" },
    { name: 'Locations', path: '/locations', icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/778537f6f6a2ec0fc2f684408271662d8b96c472db3fac5a5a6253aa891e21a0?apiKey=144882928c014ec7a74d06e0b85e9ba9" },
    { name: 'Notifications', path: '/notifications', icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf25d365cbeea1ac9803e542720b8f43942668378639ae18c8c02863ff1f76ed?apiKey=144882928c014ec7a74d06e0b85e9ba9" },
    { name: 'Settings', path: '/settings', icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4b6d97e70dccea4acc19280d10191d3bd1ffb4d3aa16b8a8f14708815c451f2?apiKey=144882928c014ec7a74d06e0b85e9ba9" },
    { name: 'Logout', path: '/logout', icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc052c69ae4993648c9cda6dbee63fe12012fbe0d87a7a6e11749bffbd6af5c1?apiKey=144882928c014ec7a74d06e0b85e9ba9" },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger menu for small screens */}
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 bg-white rounded shadow"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-10
          w-[250px] h-full
          bg-white border-r border-gray-200
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="p-4 h-full flex flex-col relative">
          {/* Close button for small screens */}
          <button
            className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={toggleSidebar}
          >
            ✕
          </button>

          <div className="flex items-start mb-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/16765979d7d79cec47b3749d38d9fad83c742608840d468557cb8a2c0aff786d?apiKey=144882928c014ec7a74d06e0b85e9ba9" alt="Logo" className="object-contain w-[149px]" />
          </div>

          <nav className="flex-grow">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => `
                      flex items-center px-4 py-3 text-sm rounded-lg
                      ${isActive ? 'bg-gray-100 text-black font-semibold' : 'text-gray-600'}
                      hover:bg-gray-50
                    `}
                  >
                    <img src={item.icon} alt={item.name} className="mr-4 h-5 w-5" />
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
