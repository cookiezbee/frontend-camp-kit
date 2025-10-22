"use client";

import Link from "next/link";

interface HeaderProps {
  logo?: React.ReactNode;
  navigation?: { label: string; href: string }[];
  actions?: React.ReactNode;
}

export default function Header({ logo, navigation, actions }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
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
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Действия (кнопки, иконки) */}
          {actions && <div className="flex items-center gap-3 ml-auto">{actions}</div>}
        </div>
      </div>
    </header>
  );
}