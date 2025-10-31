"use client";

import Link from "next/link";
import { useState } from "react";

// Типы для dropdown элементов
interface DropdownLink {
  type: "link";
  label: string | React.ReactNode;
  href: string;
}

interface DropdownText {
  type: "text";
  label: string | React.ReactNode; 
}

interface DropdownButton {
  type: "button";
  label: string | React.ReactNode;
  onClick: () => void;
}

type DropdownItem = DropdownLink | DropdownText | DropdownButton;

interface NavigationLink {
  type: "link";
  label: string | React.ReactNode;
  href: string;
}

interface NavigationDropdown {
  type: "dropdown";
  label: string | React.ReactNode;
  items: DropdownItem[];
}

type NavigationItem = NavigationLink | NavigationDropdown;

interface HeaderProps {
  logo?: React.ReactNode;
  navigation?: NavigationItem[];
  actions?: React.ReactNode;
}

export default function Header({ logo, navigation, actions }: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Логотип */}
          <div className="flex items-center gap-2 mr-8">
            {logo || (
              <div className="text-2xl font-bold text-blue-600">Logo</div>
            )}
          </div>

          {/* Навигация */}
          {navigation && (
            <nav className="flex items-center gap-6">
              {navigation.map((item, index) => (
                <div key={index} className="relative">
                  {item.type === "link" ? (
                    // Обычная ссылка
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {typeof item.label === 'string' ? item.label : item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1"
                      >
                        {typeof item.label === 'string' ? item.label : item.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Выпадающее меню */}
                      {openDropdown === index && (
                        <>
                          <div
                            className="fixed inset-0 z-10"
                            onClick={closeDropdown}
                          />

                          <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[220px] z-20">
                            {item.items.map((dropdownItem, dropdownIndex) => {
                              if (dropdownItem.type === "link") {
                                return (
                                  <Link
                                    key={dropdownIndex}
                                    href={dropdownItem.href}
                                    onClick={closeDropdown}
                                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                );
                              } else if (dropdownItem.type === "text") {
                                return (
                                  <div
                                    key={dropdownIndex}
                                    className="px-4 py-2 text-gray-500 text-sm"
                                  >
                                    {dropdownItem.label}
                                  </div>
                                );
                              } else if (dropdownItem.type === "button") {
                                return (
                                  <button
                                    key={dropdownIndex}
                                    onClick={() => {
                                      dropdownItem.onClick();
                                      closeDropdown();
                                    }}
                                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                  >
                                    {dropdownItem.label}
                                  </button>
                                );
                              }
                            })}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Действия (кнопки, иконки) */}
          {actions && (
            <div className="flex items-center gap-3 ml-auto">{actions}</div>
          )}
        </div>
      </div>
    </header>
  );
}