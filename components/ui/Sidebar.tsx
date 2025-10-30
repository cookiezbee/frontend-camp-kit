"use client";

import Link from "next/link";
import { useState } from "react";

interface SidebarLink {
  label: string;
  href: string;
}

interface SidebarProps {
  links: SidebarLink[];
  position?: "left" | "right";
}

export default function Sidebar({ links, position = "left" }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Кнопка открытия (гамбургер) */}
      <button
        onClick={toggleSidebar}
        className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Открыть меню"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Оверлей (затемнение фона) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Боковое меню */}
      <div
        className={`fixed top-0 ${
          position === "left" ? "left-0" : "right-0"
        } h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : position === "left"
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
      >
        {/* Шапка сайдбара */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Меню</h2>
          <button
            onClick={closeSidebar}
            className="p-2 text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Закрыть меню"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Навигация */}
        <nav className="p-4">
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={closeSidebar}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}