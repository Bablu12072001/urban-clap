import React, { useState } from "react";
import {
  HomeIcon,
  Bars3Icon,
  UserGroupIcon,
  DocumentTextIcon,
  ChartBarIcon,
  MegaphoneIcon,
  MagnifyingGlassIcon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../../assets/images/logo.jpeg";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: HomeIcon },
    { label: "Booking", icon: Bars3Icon },
    { label: "Providers", icon: UserGroupIcon },
    { label: "Services", icon: DocumentTextIcon },
    { label: "Revenue & Comm", icon: ChartBarIcon },
    { label: "Marketing", icon: MegaphoneIcon },
  ];

  return (
    <nav className="bg-[#f8faff] border-b border-gray-200 px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-y-4 relative">


      <div className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          className="object-cover rounded-full shadow-lg"
          style={{ height: "5rem", width: "5rem" }}
        />
      </div>

      {/* Navigation Tabs - Desktop (centered) */}
      <div className="hidden md:flex flex-wrap justify-center gap-3 flex-1">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.label;

          return (
            <button
              key={index}
              onClick={() => setActiveTab(item.label)}
              className={`flex items-center gap-2 px-4 py-1 rounded-full shadow-md text-sm font-medium transition-all 
                ${isActive
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white"
                  : "bg-white text-white-800 hover:bg-gray-100"
                }`}
            >
              <div
                className={`rounded-full p-2 transition ${isActive ? "bg-gray-100" : "bg-white shadow-lg"
                  }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-blue-700" : "text-gray-700"}`} />
              </div>
              {item.label}
            </button>
          );
        })}
      </div>


      <div className="hidden md:flex items-center gap-3">
        <div className="p-2 rounded-full bg-white hover:bg-gray-200 cursor-pointer shadow-lg">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-700" />
        </div>
        <div className="p-2 rounded-full bg-white hover:bg-gray-200 cursor-pointer shadow-lg">
          <BellIcon className="h-5 w-5 text-gray-700" />
        </div>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="h-9 w-9 rounded-full"
        />
      </div>


      <div className="flex items-center gap-3 md:hidden ml-auto">
        <div className="p-2 rounded-full bg-white hover:bg-gray-200 cursor-pointer shadow-lg">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-700" />
        </div>
        <div className="p-2 rounded-full bg-white hover:bg-gray-200 cursor-pointer shadow-lg">
          <BellIcon className="h-5 w-5 text-gray-700" />
        </div>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="h-9 w-9 rounded-full"
        />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md bg-white shadow-md hover:bg-gray-100"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>


      {isMenuOpen && (
        <div className="w-full flex flex-col gap-2 mt-2 md:hidden">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeTab === item.label;

            return (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(item.label);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-1 rounded-full shadow-md text-sm font-medium transition-all mx-1
                  ${isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white"
                    : "bg-white text-white-800 hover:bg-gray-100"
                  }`}
              >
                <div
                  className={`rounded-full p-2 transition ${isActive ? "bg-gray-100" : "bg-white shadow-lg"
                    }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-blue-700" : "text-gray-700"}`} />
                </div>
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
