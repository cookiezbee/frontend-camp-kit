'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const basics = [
    { name: 'Как собрать страницу', path: '/basics/page-structure', icon: '📄' },
    { name: 'Цвета и стили', path: '/basics/colors', icon: '🎨' },
    { name: 'Отступы и размеры', path: '/basics/spacing', icon: '📏' },
    { name: 'Шрифты', path: '/basics/fonts', icon: '🔤' },
    { name: 'Работа с изображениями', path: '/basics/images', icon: '🖼️' },
    { name: 'API Запросы', path: '/basics/api-requests', icon: '🌐' },
    { name: 'Создание страниц и навигация', path: '/basics/pages-navigation', icon: '🧭' },
    { name: 'AI Помощник', path: '/basics/ai-helper', icon: '🤖' },
    { name: 'Полезные материалы', path: '/resources', icon: '💡' },
  ];

  const components = [
    { name: 'Кнопка', path: '/components/button', icon: '🔘' },
    { name: 'Карточка', path: '/components/card', icon: '🎴' },
    { name: 'Поле ввода', path: '/components/input', icon: '📝' },
    { name: 'Значок', path: '/components/badge', icon: '🏷️' },
    { name: 'Модальное окно', path: '/components/modal', icon: '🪟' },
    { name: 'Шапка', path: '/components/header', icon: '📰' },
    { name: 'Боковое меню', path: '/components/sidebar', icon: '📚' },
    { name: 'Подвал', path: '/components/footer', icon: '📄' },
    { name: 'Главная секция', path: '/components/hero', icon: '🎯' },
    { name: 'Счётчик', path: '/components/counter', icon: '🔢' },
    { name: 'Формы', path: '/components/forms', icon: '✉️' },
    { name: 'Частые вопросы', path: '/components/faq', icon: '❓' },
    { name: 'Чекбоксы и радиокнопки', path: '/components/checkbox-radio', icon: '✅' },
    { name: 'Фильтры', path: '/components/filter', icon: '🔍' },
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
            
            {/* Основы */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-1">
                Основы
                <span className="text-xs">▼</span>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                    Базовые знания
                  </div>
                  {basics.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Выпадающее меню с компонентами */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-1">
                Компоненты
                <span className="text-xs">▼</span>
              </button>
              
              <div className="absolute top-full -right-48 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 pt-3">
                  Компоненты
                </div>
                
                {/* Две колонки */}
                <div className="grid grid-cols-2 gap-0 p-2">
                  {/* Левая колонка */}
                  <div>
                    {components.slice(0, 7).map((component) => (
                      <Link
                        key={component.path}
                        href={component.path}
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <span className="text-xl">{component.icon}</span>
                        <span className="font-medium text-sm">{component.name}</span>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Правая колонка */}
                  <div>
                    {components.slice(7).map((component) => (
                      <Link
                        key={component.path}
                        href={component.path}
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        <span className="text-xl">{component.icon}</span>
                        <span className="font-medium text-sm">{component.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/gallery" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Галерея сайтов
            </Link>

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
                  Основы
                </p>
                <div className="flex flex-col gap-1">
                  {basics.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
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
                href="/gallery" 
                className="px-4 py-2 rounded-lg hover:bg-gray-50 font-medium text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Галерея сайтов
              </Link>

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