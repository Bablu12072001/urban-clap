import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const UserSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State to track open/collapsed submenus
  const [openMenus, setOpenMenus] = useState({});
  // State to track sidebar visibility on small/medium screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle submenu open/collapsed state
  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Close sidebar after routing
  const handleRouteChange = () => {
    setIsSidebarOpen(false);
  };



  const menuItems = [
    {
      label: "Dashboard",
      route: "/admin-dashboard",
      icon: "📊",
    },
    {
      label: "Users",
      route: "#",
      icon: "👥",
      subMenu: [
        { label: "View", route: "/admin-dashboard/users/view" },
        { label: "Blocked", route: "/admin-dashboard/users/blocked" },
        { label: "Payment Stop", route: "/admin-dashboard/users/payment-stop" },
      ],
    },
    {
      label: "Business",
      route: "/admin-dashboard/business",
      icon: "📦",
    },
    {
      label: "Reports",
      route: "/admin-dashboard/reports",
      icon: "📈",
    },
    {
      label: "Settings",
      route: "/admin-dashboard/settings",
      icon: "⚙️",
    },
  ];

  return (
    <div className="relative">
      {/* Hamburger button for small/medium screens */}
      <button
        className="absolute top-4 left-4 z-50 md:hidden text-2xl"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white p-4 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold pl-6">My MLM</h3>
          <span className="text-xs">@user</span>
        </div>

        {/* Menu Items */}
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              
              {item.subMenu ? (
                <div>
                  {/* Parent menu item */}
                  <div
                    className={`flex items-center justify-between cursor-pointer px-3 py-2 rounded-md ${
                      location.pathname.startsWith(item.route)
                        ? "font-bold text-blue-400"
                        : "hover:bg-blue-100"
                    }`}
                    onClick={() => toggleMenu(index)}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </div>
                    {/* Arrow to indicate open/collapsed state */}
                    <span>{openMenus[index] ? "▲" : "▼"}</span>
                  </div>
                  {/* Submenu */}
                  {openMenus[index] && (
                    <ul className="ml-6 mt-2 space-y-1">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.route}
                            onClick={handleRouteChange} // Close sidebar on route change
                            className={`block px-3 py-2 rounded-md ${
                              location.pathname === subItem.route
                                ? "font-bold bg-blue-100 text-blue-400"
                                : "hover:bg-blue-100"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.route}
                  onClick={handleRouteChange} // Close sidebar on route change
                  className={`flex items-center px-3 py-2 rounded-md ${
                    location.pathname === item.route
                      ? "font-bold text-blue-400"
                      : "hover:bg-blue-100"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default UserSidebar;
