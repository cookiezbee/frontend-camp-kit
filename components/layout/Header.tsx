'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Список всех компонентов для навигации
  const components = [
    { name: 'Button', path: '/components/button', icon: '🔘' },
    { name: 'Card', path: '/components/card', icon: '🎴' },
    { name: 'Input', path: '/components/input', icon: '📝' },
    { name: 'Badge', path: '/components/badge', icon: '🏷️' },
    { name: 'Modal', path: '/components/modal', icon: '🪟' },
    { name: 'Header', path: '/components/header', icon: '📰' },
    { name: 'Footer', path: '/components/footer', icon: '📄' },
    { name: 'Hero', path: '/components/hero', icon: '🎯' },
    { name: 'Counter', path: '/components/counter', icon: '🔢' },
    { name: 'Contact Form', path: '/components/contact-form', icon: '✉️' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Логотип */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Code Bricks</h1>
              <p className="text-xs text-gray-500">Конструктор компонентов</p>
            </div>
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Главная
            </Link>
            
            {/* Выпадающее меню с компонентами */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-1">
                Компоненты
                <span className="text-xs">▼</span>
              </button>
              
              {/* Выпадающий список */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                    Все компоненты
                  </div>
                  {components.map((component) => (
                    <Link
                      key={component.path}
                      href={component.path}
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <span className="text-xl">{component.icon}</span>
                      <span className="font-medium">{component.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/about" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              О проекте
            </Link>
          </nav>

          {/* Мобильное меню - кнопка */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2">
              <Link 
                href="/" 
                className="px-4 py-2 rounded-lg hover:bg-gray-50 font-medium text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Компоненты
                </p>
                <div className="flex flex-col gap-1">
                  {components.map((component) => (
                    <Link
                      key={component.path}
                      href={component.path}
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-lg">{component.icon}</span>
                      <span className="font-medium">{component.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/about" 
                className="px-4 py-2 rounded-lg hover:bg-gray-50 font-medium text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                О проекте
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}